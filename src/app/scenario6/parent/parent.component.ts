import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Scenario6ParentComponent implements OnInit {

public name="";
  constructor() { }

  ngOnInit() {
  }
  click(value)
  {
    this.name=value;
    console.log("parentcomponent");
  }

}
