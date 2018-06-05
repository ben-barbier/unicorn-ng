import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Unicorn} from './unicorn.model';
import {Observable} from 'rxjs';
import {UnicornService} from './unicorn.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UnicornListResolver implements Resolve<Unicorn[]> {

    constructor(private unicornService: UnicornService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Unicorn[]> {
        return this.unicornService.getAll().pipe(
            catchError((err) => {
                this.router.navigate(['/error']);
                return [];
            })
        );
    }
}
