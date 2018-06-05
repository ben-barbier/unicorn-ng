import {TestBed, inject} from '@angular/core/testing';

import {UnicornListResolver} from './unicorn-list.resolver';

describe('UnicornListService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UnicornListResolver]
        });
    });

    it('should be created', inject([UnicornListResolver], (service: UnicornListResolver) => {
        expect(service).toBeTruthy();
    }));
});
