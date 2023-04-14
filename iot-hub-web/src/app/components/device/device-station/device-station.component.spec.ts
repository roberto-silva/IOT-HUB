import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceStationComponent } from './device-station.component';

describe('DeviceStationComponent', () => {
  let component: DeviceStationComponent;
  let fixture: ComponentFixture<DeviceStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
