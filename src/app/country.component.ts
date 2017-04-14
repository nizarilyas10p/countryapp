import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CountryService } from './service/country.service'
import { Router } from "@angular/router";
import { Country } from './models/country.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: `./views/country.component.html`,
})

@Injectable()
export class CountryComponent implements OnInit {   
    constructor(private router: Router, private countryService: CountryService) {
    }

    countriesList: any[] = [];

    loadCountries() {
      this.countryService.getCountries().subscribe((response)=>{ this.countriesList=response; });
    }

    ngOnInit() {
        this.loadCountries();
    }

    onSelect(country: Country) {
        this.router.navigate(['/countries-details',country.countryCode]);
  }
 }
