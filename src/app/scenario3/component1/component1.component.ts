import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Scenario3Component1Component implements OnInit {
public name="";
  constructor() { }
public sendtochild(value)
{
  this.name=value;
}
  ngOnInit() {
  }

}
