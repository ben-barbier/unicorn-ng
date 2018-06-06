import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {SetMinAge} from '../../../store/actions/config.actions';
import {ConfigService} from '../../config.service';

@Component({
    selector: 'uni-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

    public minAge: number;

    constructor(private configService: ConfigService){

    }

    public saveMinAge(minAge: number) {
        this.configService.saveMinAge(minAge);
    }
}
