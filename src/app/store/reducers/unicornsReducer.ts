import {Unicorn} from '../../pages/unicorn-list/unicorn.model';
import {EDIT_UNICORN, EditUnicorn, LOAD_UNICORN, LoadUnicorns, REMOVE_UNICORN, RemoveUnicorn} from '../actions/unicorns.actions';

export function unicornsReducer(state: Unicorn[] = [], action: LoadUnicorns | RemoveUnicorn | EditUnicorn) {

    console.log(action.type, state);

    switch (action.type) {
        case LOAD_UNICORN:
            return action.unicorns;
        case REMOVE_UNICORN:
            return state.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        case EDIT_UNICORN:
            return state
                .filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id)
                .concat(action.unicorn);
        default:
            return state;
    }

}
