import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Platillo2Component } from './platillo2.component';

describe('Platillo2Component', () => {
  let component: Platillo2Component;
  let fixture: ComponentFixture<Platillo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Platillo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Platillo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
