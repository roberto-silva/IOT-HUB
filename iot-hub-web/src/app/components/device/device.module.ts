import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeviceComponent} from './device.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./device.routing";
import {NgApexchartsModule} from "ng-apexcharts";
import {DeviceStationComponent} from './device-station/device-station.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    DeviceComponent,
    DeviceStationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DeviceModule implements OnInit {
  ngOnInit(): void {
  }
}
