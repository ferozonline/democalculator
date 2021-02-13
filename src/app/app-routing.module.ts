import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CalculatorComponent} from './calculator/calculator.component';
import {CalcComponent} from './calc/calc.component';

const routes: Routes = [
  {path: 'calculator',component: CalculatorComponent},
  {path: 'calc',component:  CalcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
