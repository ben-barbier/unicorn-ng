import {Unicorn} from '../../pages/unicorn-list/unicorn.model';
import {EDIT_UNICORN, EditUnicorn, LOAD_UNICORN, LoadUnicorns, REMOVE_UNICORN, RemoveUnicorn} from '../actions/unicorns.actions';
import {SET_MIN_AGE, SetMinAge} from '../actions/config.actions';

export function unicornsReducer(state: Unicorn[] = [], action: LoadUnicorns | RemoveUnicorn | EditUnicorn | SetMinAge) {

    console.log(action.type, state);

    switch (action.type) {
        case LOAD_UNICORN:
            // appel HTTP ?
            return action.unicorns;
        case REMOVE_UNICORN:
            return state.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        case EDIT_UNICORN:
            return state
                .filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id)
                .concat(action.unicorn);
        case SET_MIN_AGE:
            // appel global + filtre
            return state.filter((unicorn: Unicorn) => (new Date().getFullYear() - unicorn.birthyear) >= action.minAge);
        default:
            return state;
    }

}
