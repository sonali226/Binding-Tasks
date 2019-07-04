import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario4ParentComponent } from './parent/parent.component';
import { Scenario4ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    Scenario4ParentComponent,
    Scenario4ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Scenario4ParentComponent,
    Scenario4ChildComponent
  ]
})
export class Scenario4Module { }
