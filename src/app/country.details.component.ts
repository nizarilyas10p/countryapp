import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CountryService } from './service/country.service'
import { Router, ActivatedRoute } from "@angular/router";
import { Country } from './models/country.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: `./views/country.details.component.html`,
})

@Injectable()
export class CountryDetailComponent implements OnInit {   
    constructor(private route: Router, private countryService: CountryService, private router: ActivatedRoute ) {
    }

    countriesDetails:any;
    countryNeighbours: any[] = [];
    geonameId: number;

    loadCountryDetails(countryCode: string) {
      this.countryService.getCountryDetails(countryCode).subscribe((response) => { this.countriesDetails = response.geonames[0]; 
      this.geonameId = response.geonames[0].geonameId;
      
      this.countryService.getNeighbourCountries(this.geonameId).subscribe((res) => {this.countryNeighbours = res.geonames; 
     
     if (this.countryNeighbours.length > 0 && this.countryNeighbours.length > 3) {
         this.countryNeighbours.slice(0,3);
     }
     });
     });
    }
    ngOnInit() {
        this.loadCountryDetails(this.router.snapshot.params['countryCode']);
    }

    
 }
