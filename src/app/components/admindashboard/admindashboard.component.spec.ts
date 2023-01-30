import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboarddComponent } from './admindashboard.component';

describe('AdmindashboarddComponent', () => {
  let component: AdmindashboarddComponent;
  let fixture: ComponentFixture<AdmindashboarddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashboarddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindashboarddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
