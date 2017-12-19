import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPatientComponent } from './afficher-patient.component';

describe('AfficherPatientComponent', () => {
  let component: AfficherPatientComponent;
  let fixture: ComponentFixture<AfficherPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
