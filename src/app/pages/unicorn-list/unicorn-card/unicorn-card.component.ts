import {Component, Input, OnInit} from '@angular/core';
import {Unicorn} from '../unicorn.model';
import {UnicornService} from '../unicorn.service';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    constructor(private unicornService: UnicornService) {
    }

    ngOnInit() {
    }

}
