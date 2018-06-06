import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Unicorn} from '../../../pages/unicorn-list/unicorn.model';

@Component({
    selector: 'uni-edit-unicorn',
    templateUrl: './edit-unicorn.component.html',
    styleUrls: ['./edit-unicorn.component.scss']
})
export class EditUnicornComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public unicorn: Unicorn,
                private dialogRef: MatDialogRef<Unicorn>) {
    }

    public updateUnicorn(unicorn: Unicorn) {
        this.dialogRef.close(unicorn);
    }
}
