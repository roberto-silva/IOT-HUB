import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {LoadingService} from "./components/loading/loading.service";
import {LoadingComponent} from "./components/loading/loading.component";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {GougeChartComponent} from './components/gouge-chart/gouge-chart.component';
import {NgApexchartsModule} from "ng-apexcharts";


@NgModule({
  declarations: [LoadingComponent, NavbarComponent, SidebarComponent, GougeChartComponent],
  exports: [LoadingComponent, NavbarComponent, SidebarComponent, GougeChartComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    RouterLink,
    RouterLinkActive,
    NgApexchartsModule,
  ],
  providers: [TranslateService, LoadingService]
})
export class SharedModule {
}
