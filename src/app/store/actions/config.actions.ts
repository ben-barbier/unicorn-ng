import {Action} from '@ngrx/store';
import {Config} from '../../common/config.model';

export const SET_MIN_AGE = '[Config] SET_MIN_AGE';

export class SetMinAge implements Action {
    readonly type = SET_MIN_AGE;
    constructor(public minAge: number) { }
}
