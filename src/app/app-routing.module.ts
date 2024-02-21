import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Selector',
    loadChildren : ()=> import( './countries/countries.module').then(m=> m.CountriesModule),
  },

  {
    path: '**',
    redirectTo: 'Selector',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
