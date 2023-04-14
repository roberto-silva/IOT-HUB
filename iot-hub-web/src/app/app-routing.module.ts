import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      },
    ],
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

export class AppRoutingModule {
}
