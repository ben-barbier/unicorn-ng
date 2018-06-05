import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Unicorn} from '../pages/unicorn-list/unicorn.model';
import {catchError, filter, find, flatMap, map, tap, toArray} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public readonly cart: BehaviorSubject<Unicorn[]> = new BehaviorSubject<Unicorn[]>([]);

    constructor() {
    }

    public addToCart(unicorn: Unicorn): void {
        const actualCart = this.cart.getValue();
        this.cart.next(actualCart.concat(unicorn));
    }

    public removeFromCart(unicornToRemove: Unicorn): void {
        const updatedCart = this.cart.getValue().filter((cartUnicorn: Unicorn) => cartUnicorn.id !== unicornToRemove.id);
        this.cart.next(updatedCart);
    }

    public isInCart(unicornToFind: Unicorn): boolean {
        const actualCart = this.cart.getValue();
        return !!actualCart.find((cartUnicorn: Unicorn) => cartUnicorn.id === unicornToFind.id);
    }

}
