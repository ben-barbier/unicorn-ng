import {Component} from '@angular/core';
import {Unicorn} from './unicorn.model';
import {ActivatedRoute, Data} from '@angular/router';
import {Capacity} from './capacity.model';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Observable<Unicorn[]> = this.store.pipe(select('unicorns'));
    public capacities: Capacity[];

    constructor(private route: ActivatedRoute,
                private store: Store<AppState>) {

        this.route.data.subscribe((data: Data) => {
            this.capacities = data.capacities;
        });

    }

}
