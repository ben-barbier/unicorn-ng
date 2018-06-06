import {Component, Input} from '@angular/core';
import {Unicorn} from '../unicorn.model';
import {UnicornService} from '../unicorn.service';
import {CartService} from '../../../common/cart.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditUnicornComponent} from '../../../unicorn-list/dialog/edit-unicorn/edit-unicorn.component';

import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {AppState} from '../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {map, tap} from 'rxjs/operators';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent {

    @Input()
    public unicorn: Unicorn;

    public isInCart: Observable<boolean>;
    public isInCartValue: boolean;

    constructor(private unicornService: UnicornService,
                private cartService: CartService,
                private snackBar: MatSnackBar,
                private dialog: MatDialog,
                private store: Store<AppState>) {
        this.isInCart = this.store.pipe(
            select('cart'),
            map((cart: Unicorn[]): boolean => {
                return !!cart.find((unicorn: Unicorn) => unicorn.id === this.unicorn.id);
            }),
            tap(isInCartValue => this.isInCartValue = isInCartValue)
        );
    }

    public addToCart(unicorn: Unicorn) {
        this.cartService.addToCart(unicorn);
    }

    public removeFromCart(unicorn: Unicorn) {
        this.cartService.removeFromCart(unicorn);
    }

    public removeUnicorn(unicorn: Unicorn): void {
        this.unicornService.removeUnicorn(unicorn).subscribe(() => {
            this.snackBar.open(`${unicorn.name} a été supprimé`);
            this.unicornService.removeUnicorn(unicorn);
        });
    }

    public editUnicorn(unicorn: Unicorn) {
        this.dialog.open(EditUnicornComponent, {data: _.cloneDeep(unicorn)}).afterClosed()
            .subscribe((updatedUnicorn: Unicorn) => {
                if (updatedUnicorn) {
                    this.unicornService.updateUnicorn(updatedUnicorn).subscribe(() => {
                        this.unicorn = updatedUnicorn;
                        this.snackBar.open(`${unicorn.name} a été renommé en ${updatedUnicorn.name}`);
                    });
                }
            });
    }

}
