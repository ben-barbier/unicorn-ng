import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../unicorn.model';
import {UnicornService} from '../unicorn.service';
import {CartService} from '../../../common/cart.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditUnicornComponent} from '../../../unicorn-list/dialog/edit-unicorn/edit-unicorn.component';

import * as _ from 'lodash';

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
                private snackBar: MatSnackBar,
                private dialog: MatDialog) {
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

    public editUnicorn(unicorn: Unicorn) {
        this.dialog.open(EditUnicornComponent, {data: _.cloneDeep(unicorn)}).afterClosed()
            .subscribe((updatedUnicorn: Unicorn) => {
                this.unicornService.updateUnicorn(updatedUnicorn).subscribe(() => {
                    this.unicorn = updatedUnicorn;
                    this.snackBar.open(`${unicorn.name} a été renommé en ${updatedUnicorn.name}`);
                });
            });
    }

}
