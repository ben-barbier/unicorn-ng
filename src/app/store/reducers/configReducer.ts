import {SET_MIN_AGE, SetMinAge} from '../actions/config.actions';
import {Config} from '../../common/config.model';

import * as _ from 'lodash';

export function configReducer(state: Config = {minAge: 0}, action: SetMinAge) {

    console.log(action.type, state);

    switch (action.type) {
        case SET_MIN_AGE:
            const newState = _.cloneDeep(state);
            newState.minAge = action.minAge;
            return newState;
        default:
            return state;
    }


}
