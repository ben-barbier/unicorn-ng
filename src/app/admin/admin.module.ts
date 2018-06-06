import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule {
}
