import {Action} from '@ngrx/store';
import {Unicorn} from '../../pages/unicorn-list/unicorn.model';

export const LOAD_UNICORN = '[Unicorn] LOAD_UNICORN';
export const REMOVE_UNICORN = '[Unicorn] REMOVE_UNICORN';
export const EDIT_UNICORN = '[Unicorn] EDIT_UNICORN';

export class LoadUnicorns implements Action {
    readonly type = LOAD_UNICORN;
    constructor(public unicorns: Unicorn[]) { }
}

export class RemoveUnicorn implements Action {
    readonly type = REMOVE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}

export class EditUnicorn implements Action {
    readonly type = EDIT_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
