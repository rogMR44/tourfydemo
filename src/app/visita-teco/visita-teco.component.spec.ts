import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaTecoComponent } from './visita-teco.component';

describe('VisitaTecoComponent', () => {
  let component: VisitaTecoComponent;
  let fixture: ComponentFixture<VisitaTecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaTecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaTecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
