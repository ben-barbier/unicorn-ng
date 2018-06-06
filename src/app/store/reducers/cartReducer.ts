import {Unicorn} from '../../pages/unicorn-list/unicorn.model';
import {ADD_TO_CART, AddToCart, REMOVE_FROM_CART, RemoveFromCart} from '../actions/cart.actions';
import {REMOVE_UNICORN, RemoveUnicorn} from '../actions/unicorns.actions';
import {SET_MIN_AGE, SetMinAge} from '../actions/config.actions';

export function cartReducer(state: Unicorn[] = [], action: AddToCart | RemoveFromCart | RemoveUnicorn | SetMinAge) {

    console.log(action.type, state);

    switch (action.type) {
        case ADD_TO_CART:
            return state.concat(action.unicorn);
        case REMOVE_FROM_CART:
        case REMOVE_UNICORN:
            return state.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        case SET_MIN_AGE:
            return state.filter((unicorn: Unicorn) => (new Date().getFullYear() - unicorn.birthyear) >= action.minAge);
        default:
            return state;
    }


}
