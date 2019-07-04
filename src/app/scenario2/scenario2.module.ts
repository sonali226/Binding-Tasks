import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario2Component1Component } from './component1/component1.component';
import {FormsModule}  from '@angular/forms';
@NgModule({
  declarations: [Scenario2Component1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Scenario2Component1Component
  ]
})
export class Scenario2Module { }
