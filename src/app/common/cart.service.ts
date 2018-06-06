import {Injectable} from '@angular/core';
import {Unicorn} from '../pages/unicorn-list/unicorn.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {AddToCart, RemoveFromCart} from '../store/actions/cart.actions';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private store: Store<AppState>) {
    }

    public addToCart(unicorn: Unicorn): void {
        this.store.dispatch(new AddToCart(unicorn));
    }

    public removeFromCart(unicorn: Unicorn): void {
        this.store.dispatch(new RemoveFromCart(unicorn));
    }

}
