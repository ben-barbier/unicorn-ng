import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {SetMinAge} from '../store/actions/config.actions';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    constructor(private store: Store<AppState>) {

    }

    public saveMinAge(minAge: number) {
        this.store.dispatch(new SetMinAge(minAge));
    }

}
