import {ActivatedRouteSnapshot, Resolve, Routes} from '@angular/router';
import {DeviceComponent} from "./device.component";
import {DeviceStationComponent} from "./device-station/device-station.component";
import {Injectable} from "@angular/core";
import {DeviceService} from "./device.service";

@Injectable({providedIn: 'root'})
export class DeviceRouting implements Resolve<any> {
  constructor(private service: DeviceService) {
  }

  resolve(route: ActivatedRouteSnapshot | any): any {
    // const id: string = route.params?.id ? route.params?.id : null;
    // if (id) {
    //   return this.service.findById(id);
    // }
    return null;
  }
}

export const routes: Routes = [
  {
    path: '',
    component: DeviceComponent
  },
  {
    path: ':id/station',
    component: DeviceStationComponent,
    resolve: {
      data: DeviceRouting,
    },
  }
];

