import {Unicorn} from '../pages/unicorn-list/unicorn.model';

export interface AppState {
    unicorns: Unicorn[];
    cart: Unicorn[];
}
