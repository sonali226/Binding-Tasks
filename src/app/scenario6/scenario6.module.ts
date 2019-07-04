import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario6ParentComponent } from './parent/parent.component';
import { Scenario6Child2Component } from './child2/child2.component';
import { Scenario6Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
    Scenario6Child1Component,
    Scenario6Child2Component,
    Scenario6ParentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Scenario6Child1Component,
    Scenario6Child2Component,
    Scenario6ParentComponent
  ]
})
export class Scenario6Module { }
