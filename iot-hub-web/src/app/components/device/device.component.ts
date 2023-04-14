import {Component, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";
import {DeviceService} from "./device.service";
import {BaseComponent} from "../../shared/interfaces/base.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent extends BaseComponent implements OnInit {

  public positiveStatus: Partial<ChartOptions> | any;
  public negativeStatus: Partial<ChartOptions> | any;

  devices: any[] = [];

  constructor(
    private readonly deviceService: DeviceService,
    private readonly toastrService: ToastrService
  ) {
    super();
  }

  ngOnInit(): void {
    // this.getAllDevices();
    this.mockeDevices();
    this.mockChartNegativeStatus();
    this.mockChartPositiveStatus();
    this.loadingService.stop();
  }

  private getAllDevices(): void {
    this.deviceService.findAllDevices().subscribe(
      {
        next: (value: any) => {
          console.log(value.body);
        }, error: (error: any) => {
          this.toastrService.error(error.error);
        }
      });
  }

  private mockeDevices(): void {
    this.devices = [
      {id: 1, name: 'Torno CNC Romi GL-203', product: '157', status: true},
      {id: 2, name: 'Torno CNC Romi GL-202', product: '17', status: false},
      {id: 3, name: 'Torno CNC Romi GL-304', product: '15', status: false},
      {id: 4, name: 'Torno CNC Romi GL-505', product: '117', status: true},
      {id: 5, name: 'Torno CNC Romi GL-13', product: '127', status: true},
      {id: 6, name: 'Torno CNC Romi GL-103', product: '157', status: true}
    ];
  }

  private mockChartPositiveStatus(): void {
    let values: any = this.devices.map((item: any) => {
      if (item && item?.status && item) return item;
    });
    values = values.filter((item: any) => !!item);
    const data: any[] = [];
    values.forEach((item: any) => {
      data.push({name: item.name, data: [item.product]});
    });

    this.positiveStatus = {
      series: data,
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {horizontal: false, columnWidth: "55%", endingShape: "rounded"}
      },
      dataLabels: {enabled: true},
      stroke: {
        show: true, width: 2, colors: ["transparent"]
      },
      xaxis: {
        categories: ["Torno with positive status"],
        labels: {
          style: {
            colors: 'rgba(0,0,0,0.8)'
          }
        }
      },
      yaxis: {
        title: {text: "product"},
        labels: {
          style: {
            colors: '#173f61'
          }
        }
      },
      fill: {opacity: 1},
      tooltip: {
        y: {
          formatter: (val: any) => {
            return val;
          }
        }
      }
    };
  };

  private mockChartNegativeStatus(): void {
    let values: any = this.devices.map((item: any) => {
      if (item && !item?.status && item) return item;
    });
    values = values.filter((item: any) => !!item);
    const data: any[] = [];
    values.forEach((item: any) => {
      data.push({name: item.name, data: [item.product]});
    });

    this.negativeStatus = {
      series: data,
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {horizontal: false, columnWidth: "55%", endingShape: "rounded"}
      },
      dataLabels: {enabled: true},
      stroke: {
        show: true, width: 2, colors: ["transparent"]
      },
      xaxis: {
        categories: ["Torno with negative status"],
        labels: {
          style: {
            colors: 'rgba(0,0,0,0.8)'
          }
        }
      },
      yaxis: {
        title: {text: "product"},
        labels: {
          style: {
            colors: 'rgba(0,0,0,0.8)'
          }
        }
      },
      fill: {opacity: 1},
      tooltip: {
        y: {
          formatter: (val: any) => {
            return val;
          }
        }
      }
    };
  };

  goToDeviceStation(id: any): void {
    const url: string = `soft/devices/${id}/station`;
    this.navigate([url]).then((result: any) => {
      this.loadingService.start();
    });
  }

}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

