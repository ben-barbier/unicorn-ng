import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import {ErrorComponent} from './pages/error/error.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import {MainToolbarComponent} from './main-toolbar/main-toolbar.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {EditUnicornComponent} from './unicorn-list/dialog/edit-unicorn/edit-unicorn.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {unicornsReducer} from './store/reducers/unicornsReducer';
import {cartReducer} from './store/reducers/cartReducer';

@NgModule({
    declarations: [
        AppComponent,
        UnicornCardComponent,
        UnicornListComponent,
        ErrorComponent,
        MainToolbarComponent,
        EditUnicornComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        StoreModule.forRoot({
            unicorns: unicornsReducer,
            cart: cartReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        EditUnicornComponent
    ]
})
export class AppModule {
}
