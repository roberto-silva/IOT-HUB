import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../../shared/interfaces/base.component";
import {FormGroup} from "@angular/forms";
import {DeviceStationConst} from "./device-station.const";
import {DeviceService} from "../device.service";
import {ActivatedRoute} from "@angular/router";
import {interval, takeUntil, takeWhile} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-device-station',
  templateUrl: './device-station.component.html',
  styleUrls: ['./device-station.component.scss']
})
export class DeviceStationComponent extends BaseComponent implements OnInit {

  public formGroup: FormGroup | any = this.getForm();

  DeviceStationConst = DeviceStationConst;

  capture: boolean = false;
  device: any = null;

  constructor(
    private readonly deviceService: DeviceService,
    private readonly route: ActivatedRoute
  ) {
    super();

  }

  ngOnInit(): void {
    this.getDevice();
    this.loadingService.stop();
  }

  getForm(): any {
    return this.formBuilder.group({
      [DeviceStationConst.PRODUCTION_SCHEDULE]: [null, []],
      [DeviceStationConst.EQUIPMENT]: [null, []],
      [DeviceStationConst.PRODUCT_PRODUCTION]: [null, []],
      [DeviceStationConst.PRODUCTIVE_CAPACITY]: [null, []],
      [DeviceStationConst.STANDARD_TIME]: [null, []],
    });
  }

  isDisabledForm(name: string, formGroup: any = null): boolean {
    return formGroup
      ? formGroup.get(name).disabled
      : this.formGroup.get(name).disabled;
  }

  getNoteOfStop(): any[] {
    const list: any[] = [];
    for (let i = 0; i <= 4; i++) {
      list.push(
        {
          start: this.capture ? Math.round(Math.random() * 10) : '00:00',
          stop: this.capture ? Math.round(Math.random() * 10) : '00:00',
          spent: this.capture ? Math.round(Math.random() * 10) : '00:00',
          reason: 'Setup de Producao'
        });
    }
    return list;
  }

  getProductionNoteShift(): any[] {
    const list: any[] = [];
    for (let i = 0; i <= 9; i++) {
      list.push(
        {
          time: this.capture ? Math.round(Math.random() * 10) : '00:00',
          production: this.capture ? Math.round(Math.random() * 10) : '0',
          good_parts: this.capture ? Math.round(Math.random() * 10) : '0',
          bad_parts: this.capture ? Math.round(Math.random() * 10) : '0',
        });
    }
    return list;
  }

  getStatusOee(): any[] {
    return [
      {name: 'Disponibilidade', percentage: this.capture ? Math.round(Math.random() * 100) : '0'},
      {name: 'Performance', percentage: this.capture ? Math.round(Math.random() * 100) : '0'},
      {name: 'Qualidade', percentage: this.capture ? Math.round(Math.random() * 100) : '0'},
    ];
  }

  getProductionTurnCard(): any[] {
    return [
      {name: 'Producao Total - 1 Turno', value: this.capture ? Math.round(Math.random() * 100) : '0', status: 'success'},
      {name: 'Producao Total - 3 Turno', value: this.capture ? Math.round(Math.random() * 100) : '0', status: 'danger'},
      {name: 'Producao Total - 3 Turno', value: this.capture ? Math.round(Math.random() * 100) : '0', status: 'warning'},
    ];
  }

  getProductCard(): any[] {
    const list: any[] = [];
    for (let i = 0; i <= 2; i++) {
      list.push(
        {
          good: this.capture ? Math.round(Math.random() * 10) : '0',
          bad: this.capture ? Math.round(Math.random() * 10) : '0',
        });
    }
    return list;
  }

  async whenCapture(): Promise<void> {
    this.capture = !this.capture;
    if (this.capture) {
      this.formGroup.disable();
      // await this.captureStart();
    } else {
      this.formGroup.enable();
    }
  }

  private async captureStart(): Promise<void> {
    interval(1000)
      .pipe(takeWhile(() => this.capture))
      .pipe(takeUntil(this.componentDestroyed$)).subscribe(async () => {
      const response: HttpResponse<any> = await this.deviceService.whenFindById(this.device.id, this.formGroup.value);
      console.log(response.body)
    });
  }

  private getDevice(): void {
    this.route.data.subscribe(
      {
        next: (value: any) => {
          this.device = value;
        }, error: (error: any) => {
          console.log(error);
        }
      });
  }
}
