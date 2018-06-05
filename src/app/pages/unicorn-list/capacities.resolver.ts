import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Capacity} from './capacity.model';
import {Observable} from 'rxjs';
import {CapacityService} from './capacity.service';

@Injectable({
    providedIn: 'root'
})
export class CapacitiesResolver implements Resolve<Capacity[]> {

    constructor(private capacityService: CapacityService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Capacity[]> {
        return this.capacityService.getAll();
    }
}
