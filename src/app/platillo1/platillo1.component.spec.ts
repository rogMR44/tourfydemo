import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Platillo1Component } from './platillo1.component';

describe('Platillo1Component', () => {
  let component: Platillo1Component;
  let fixture: ComponentFixture<Platillo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Platillo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Platillo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
