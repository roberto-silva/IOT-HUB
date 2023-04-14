import {Component, Input, OnInit, ViewChild} from "@angular/core";

import {ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ChartComponent} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};


@Component({
  selector: 'app-gouge-chart',
  templateUrl: './gouge-chart.component.html',
  styleUrls: ['./gouge-chart.component.scss']
})
export class GougeChartComponent implements OnInit {

  @Input() title: string = 'OEE';
  @Input() value: number = 75;
  @Input() color: string = '#173F61';

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {

  }

  ngOnInit(): void {
    this.assembleChart();
  }

  private assembleChart(): void {
    this.chartOptions = {
      series: [this.value],
      chart: {
        type: "radialBar",
        height: 325,
        width: '100%'
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#ffffff",
            strokeWidth: "100%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 3,
            }
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
              color: 'rgba(0,0,0,0.8)'
            },
          }
        }
      },
      fill: {
        colors: [this.color],
        type: "solid",
        gradient: {
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: ["red"]
    };
  }
}
