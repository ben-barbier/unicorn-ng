import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Unicorn} from '../pages/unicorn-list/unicorn.model';
import {AppState} from '../store/app.state';
import {select, Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'uni-main-toolbar',
    templateUrl: './main-toolbar.component.html',
    styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent {

    public cart: Observable<Unicorn[]> = this.store.pipe(select('cart'));

    constructor(private store: Store<AppState>,
                private translateService: TranslateService) {
    }

    public setLocale(locale: string) {
        this.translateService.use(locale);
    }

}
