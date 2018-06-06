import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {filter, flatMap, map, mergeMap, tap, toArray} from 'rxjs/operators';
import {Unicorn} from './unicorn.model';
import {Capacity} from './capacity.model';
import {CapacityService} from './capacity.service';
import {AppState} from '../../store/app.state';
import {select, Store} from '@ngrx/store';
import {EditUnicorn, RemoveUnicorn} from '../../store/actions/unicorns.actions';
import {Config} from '../../common/config.model';

@Injectable({
    providedIn: 'root'
})
export class UnicornService {

    constructor(private http: HttpClient,
                private capacityService: CapacityService,
                private store: Store<AppState>) {
    }

    private baseUrl = `http://localhost:3000/`;

    public get(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`${this.baseUrl}unicorns/${id}`);
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${this.baseUrl}unicorns`);
    }

    public getMajorUnicornsWithUppercaseName(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            filter(this.isMajor),
            map(this.upperCaseName),
            toArray()
        );
    }

    private isMajor(unicorn: Unicorn): boolean {
        return unicorn.birthyear <= 2017;
    }

    private upperCaseName(unicorn: Unicorn): Unicorn {
        return Object.assign({name: unicorn.name.toUpperCase()}, unicorn);
    }

    public getAllUnicornsWithCapacities(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn): Observable<Unicorn> => {
                return from(unicorn.capacities).pipe(
                    mergeMap((capacityId: number): Observable<Capacity> =>
                        this.capacityService.get(capacityId)
                    ),
                    toArray(),
                    map((capacities: Capacity[]): Unicorn => {
                        unicorn.capacitiesObject = capacities;
                        return unicorn;
                    })
                );
            }),
            toArray()
        );
    }

    public removeUnicorn(unicorn: Unicorn): Observable<any> {
        return this.http.delete(`${this.baseUrl}unicorns/${unicorn.id}`).pipe(
            tap(() => this.store.dispatch(new RemoveUnicorn(unicorn)))
        );
    }

    public updateUnicorn(update: Unicorn): Observable<any> {
        return this.http.put(`${this.baseUrl}unicorns/${update.id}`, update).pipe(
            tap(() => this.store.dispatch(new EditUnicorn(update)))
        );
    }

    public getUnicornsToDisplay() {
        return this.store.pipe(
            select('unicorns'),
            mergeMap((unicorns: Unicorn[]) => {
                return this.store.pipe(
                    select('config'),
                    map((config: Config): Unicorn[] => {
                        return unicorns.filter((unicorn: Unicorn) =>
                            (new Date().getFullYear() - unicorn.birthyear) >= config.minAge
                        );
                    }));
            }));
    }
}
