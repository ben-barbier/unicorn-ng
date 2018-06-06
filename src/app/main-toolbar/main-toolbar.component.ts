import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Unicorn} from '../pages/unicorn-list/unicorn.model';
import {AppState} from '../store/app.state';
import {select, Store} from '@ngrx/store';

@Component({
    selector: 'uni-main-toolbar',
    templateUrl: './main-toolbar.component.html',
    styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

    public cart: Observable<Unicorn[]> = this.store.pipe(select('cart'));

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
    }

}
