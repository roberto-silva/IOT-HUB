import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GougeChartComponent } from './gouge-chart.component';

describe('GougeChartComponent', () => {
  let component: GougeChartComponent;
  let fixture: ComponentFixture<GougeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GougeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GougeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
