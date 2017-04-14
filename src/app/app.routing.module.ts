import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { CountryComponent }  from './country.component';
import { CountryDetailComponent }  from './country.details.component';

const routes: Routes = [
    {path: 'countries', component: CountryComponent},
    {path: 'countries-details/:countryCode', component: CountryDetailComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}

export const routingComponents = [CountryComponent, CountryDetailComponent];