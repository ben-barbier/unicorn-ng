import {Component} from '@angular/core';
import {Unicorn} from './unicorn.model';
import {ActivatedRoute, Data} from '@angular/router';
import {UnicornService} from './unicorn.service';
import {Capacity} from './capacity.model';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Unicorn[];
    public capacities: Capacity[];

    constructor(private route: ActivatedRoute) {

        this.route.data.subscribe((data: Data) => {
            this.unicorns = data.unicornList;
            this.capacities = data.capacities;
        });

    }

    public removeUnicornFromList(unicornToRemove: Unicorn) {
        this.unicorns = this.unicorns.filter((unicorn: Unicorn) => unicorn.id !== unicornToRemove.id);
    }

}
