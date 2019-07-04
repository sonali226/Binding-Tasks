import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario5ChildComponent } from './child/child.component';
import { Scenario5ParentComponent } from './parent/parent.component';
import { Scenario5GrandparentComponent } from './grandparent/grandparent.component';

@NgModule({
  declarations: [
    Scenario5ParentComponent,
    Scenario5GrandparentComponent,
    Scenario5ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Scenario5ParentComponent,
    Scenario5GrandparentComponent,
    Scenario5ChildComponent
  ]
})
export class Scenario5Module { }
