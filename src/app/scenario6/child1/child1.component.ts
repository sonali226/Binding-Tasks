import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenario6child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Scenario6Child1Component implements OnInit {
@Output()
public childEvent1 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
log(value)
{
  this.childEvent1.emit(value);
}
}
