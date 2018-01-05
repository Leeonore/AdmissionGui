import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVenueComponent } from './modifier-venue.component';

describe('ModifierVenueComponent', () => {
  let component: ModifierVenueComponent;
  let fixture: ComponentFixture<ModifierVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
