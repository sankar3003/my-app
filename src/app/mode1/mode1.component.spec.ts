import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mode1Component } from './mode1.component';

describe('Mode1Component', () => {
  let component: Mode1Component;
  let fixture: ComponentFixture<Mode1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mode1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mode1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
