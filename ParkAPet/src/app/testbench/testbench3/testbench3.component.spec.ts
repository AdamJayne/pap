import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testbench3Component } from './testbench3.component';

describe('Testbench3Component', () => {
  let component: Testbench3Component;
  let fixture: ComponentFixture<Testbench3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testbench3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testbench3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
