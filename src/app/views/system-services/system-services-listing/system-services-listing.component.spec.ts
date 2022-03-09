import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemServicesListingComponent } from './system-services-listing.component';

describe('SystemServicesListingComponent', () => {
  let component: SystemServicesListingComponent;
  let fixture: ComponentFixture<SystemServicesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemServicesListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemServicesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
