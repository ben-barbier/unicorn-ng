import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        UnicornCardComponent,
        UnicornListComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
