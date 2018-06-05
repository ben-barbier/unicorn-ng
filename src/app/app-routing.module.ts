import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnicornListResolver} from './pages/unicorn-list/unicorn-list.resolver';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {ErrorComponent} from './pages/error/error.component';

const routes: Routes = [
    {path: '', component: UnicornListComponent, resolve: {unicornList: UnicornListResolver}},
    {path: 'error', component: ErrorComponent},
    {path: '**', redirectTo: ''}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
