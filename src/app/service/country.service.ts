import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/country.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CountryService {
    constructor(private http: Http){
    }

    getCountriesUrl: string = "http://api.geonames.org/countryInfoJSON?username=saifiqbal10p";
    getCountryDetailsUrl: string = "http://api.geonames.org/countryInfoJSON?username=saifiqbal10p&type=json&country=";
    getNeighbourCountriesUrl: string = "http://api.geonames.org/neighboursJSON?username=saifiqbal10p&type=json&geonameId=";

    getCountries()
    {        
        return this.http.get(this.getCountriesUrl).map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getCountryDetails(countryCode: string)
    {
        return this.http.get(this.getCountryDetailsUrl + countryCode).map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getNeighbourCountries(geonameId: number)
    {
     return this.http.get(this.getNeighbourCountriesUrl + geonameId).map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));   
    }
}