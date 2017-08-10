import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbenchComponent } from './testbench.component';

describe('TestbenchComponent', () => {
  let component: TestbenchComponent;
  let fixture: ComponentFixture<TestbenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
