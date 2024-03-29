import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectorComponent } from './pages/selector/selector.component';


@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule

  ]
})
export class CountriesModule { }
