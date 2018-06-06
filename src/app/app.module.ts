import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {configReducer} from './store/reducers/configReducer';

export function getLocale(): string {
    // we can search on localstorage or elsewhere...
    return 'fr';
}

export function appInitializer(translateService: TranslateService) {
    return (() => {
        translateService.setDefaultLang('fr');
        translateService.use(getLocale());
    });
}

export function translateModuleFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'resources/i18n/', '.json');
}


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
            config: configReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (translateModuleFactory),
                deps: [HttpClient]
            }
        }),
        ServiceWorkerModule.register('./ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
        {provide: LOCALE_ID, useFactory: getLocale},
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer, multi: true,
            deps: [TranslateService, LOCALE_ID]
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        EditUnicornComponent
    ]
})
export class AppModule {
}
