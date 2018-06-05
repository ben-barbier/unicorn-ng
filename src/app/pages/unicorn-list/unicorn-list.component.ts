import {Component, Input, OnInit} from '@angular/core';
import {Unicorn} from './unicorn.model';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent implements OnInit {

    // @Input()
    public unicorns: Unicorn[];

    constructor(private route: ActivatedRoute) {

        this.route.data.subscribe(data => {
            this.unicorns = data.unicorns;
        });


    }

    ngOnInit() {
    }

}
