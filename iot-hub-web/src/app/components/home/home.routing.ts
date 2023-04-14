import {Routes} from '@angular/router';
import {HttpRequisitionsConst} from '../../shared/util/http-requisitions.const';
import {HomeComponent} from './home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: HttpRequisitionsConst.NAME_PROJECT,
    pathMatch: 'full',
  },
  {
    path: HttpRequisitionsConst.NAME_PROJECT,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'devices',
            pathMatch: 'full',
          },
          {
            path: 'devices',
            loadChildren: () => import('../device/device.module').then(m => m.DeviceModule),
          },
        ]
      },

    ],
  },
];
