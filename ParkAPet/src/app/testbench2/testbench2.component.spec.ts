import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testbench2Component } from './testbench2.component';

describe('Testbench2Component', () => {
  let component: Testbench2Component;
  let fixture: ComponentFixture<Testbench2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testbench2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testbench2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
