import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class Scenario5GrandparentComponent implements OnInit {
public msg="";
  constructor() { }

  ngOnInit() {
   console.log(this.msg);
  }

}
