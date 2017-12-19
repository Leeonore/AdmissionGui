import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherPatientComponent } from './chercher-patient.component';

describe('ChercherPatientComponent', () => {
  let component: ChercherPatientComponent;
  let fixture: ComponentFixture<ChercherPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercherPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
