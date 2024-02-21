import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [
  ]
})

export class SelectorComponent implements OnInit {

  public  CountriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  public myForm : FormGroup = this.fb.group({
    region :  ['', Validators.required ],
    country : ['', Validators.required ],
    borders : ['', Validators.required ],
  });


  constructor( 
    private fb: FormBuilder,
    private countriesService: CountriesService,
    ) { }

    
        ngOnInit(): void {
         this.onRegionChanged();
      }

   get regions():Region[]{
    return this.countriesService.regions;
   }

  onRegionChanged():void{
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap( ()=> this.myForm.get('country')!.setValue(' ')),
      tap( () => this.borders = [] ),
      switchMap( region=> this.countriesService.getCountriesByRegion(region)),
    )
     .subscribe( countries =>{
      console.log(countries);
      
      this.CountriesByRegion = countries;
    });

}
}
