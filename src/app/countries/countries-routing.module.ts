import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from './pages/selector/selector.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'Selector',component: SelectorComponent,},
            {  path: '**', redirectTo: 'Selector'},
        ] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
 