import {Component, OnInit} from '@angular/core';
import {CartService} from '../common/cart.service';
import {Observable} from 'rxjs';
import {Unicorn} from '../pages/unicorn-list/unicorn.model';

@Component({
    selector: 'uni-main-toolbar',
    templateUrl: './main-toolbar.component.html',
    styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

    public cart: Observable<Unicorn[]> = this.cartService.cart;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
    }

}
