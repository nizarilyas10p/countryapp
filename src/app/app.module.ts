import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent }  from './app.component';
import { routingComponents } from './app.routing.module'
import { CountryService} from './service/country.service'
import { HttpModule} from '@angular/http'

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule],                  
  declarations: [ AppComponent, routingComponents ],
  bootstrap:    [ AppComponent ],
  providers: [CountryService]

})
export class AppModule { }
