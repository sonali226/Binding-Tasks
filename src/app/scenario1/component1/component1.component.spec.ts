import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario1Component1Component } from './component1.component';

describe('Component1Component', () => {
  let component:  Scenario1Component1Component;
  let fixture: ComponentFixture< Scenario1Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  Scenario1Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( Scenario1Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
