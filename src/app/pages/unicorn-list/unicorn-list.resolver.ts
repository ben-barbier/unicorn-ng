import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Unicorn} from './unicorn.model';
import {Observable} from 'rxjs';
import {UnicornService} from './unicorn.service';
import {catchError, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {LoadUnicorns} from '../../store/actions/unicorns.actions';
import {AppState} from '../../store/app.state';

@Injectable({
    providedIn: 'root'
})
export class UnicornListResolver implements Resolve<Unicorn[]> {

    constructor(private unicornService: UnicornService,
                private router: Router,
                private store: Store<AppState>) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Unicorn[]> {

        this.store.pipe(
            select('unicorn'),
            tap(e => {
                debugger;
            })
        );

        return this.unicornService.getAll().pipe(
            tap((unicorns: Unicorn[]) => this.store.dispatch(new LoadUnicorns(unicorns))),
            catchError((err) => {
                this.router.navigate(['/error']);
                return [];
            })
        );
    }
}
