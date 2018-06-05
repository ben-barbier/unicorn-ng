import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../unicorn.model';
import {UnicornService} from '../unicorn.service';
import {CartService} from '../../../common/cart.service';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent {

    @Input()
    public unicorn: Unicorn;

    @Output()
    public deleted: EventEmitter<Unicorn> = new EventEmitter<Unicorn>();

    public isInCart = false;

    constructor(private unicornService: UnicornService,
                private cartService: CartService,
                private snackBar: MatSnackBar) {
    }

    public addOrRemoveFromCart(unicorn: Unicorn): void {
        if (this.cartService.isInCart(unicorn)) {
            this.cartService.removeFromCart(unicorn);
            this.isInCart = false;
        } else {
            this.cartService.addToCart(unicorn);
            this.isInCart = true;
        }
    }

    public removeUnicorn(unicorn: Unicorn): void {
        this.unicornService.removeUnicorn(unicorn).subscribe(() => {
            this.snackBar.open(`${unicorn.name} a été supprimé`);
            this.deleted.emit(unicorn);
            this.cartService.removeFromCart(unicorn);
        });
    }

}
