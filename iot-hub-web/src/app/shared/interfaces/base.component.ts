import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AppInjector} from '../../app.injector';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder} from '@angular/forms';
import {Subject} from 'rxjs';
import {LoadingService} from "../components/loading/loading.service";

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {
  protected componentDestroyed$: Subject<null> = new Subject();

  protected router: Router = AppInjector.get(Router);

  protected loadingService: LoadingService = AppInjector.get(LoadingService);

  protected translateService: TranslateService = AppInjector.get(TranslateService);

  protected formBuilder: FormBuilder = AppInjector.get(FormBuilder);

  constructor() {
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }

  protected navigate(urls: any[]): Promise<any> {
    return this.router.navigate(urls);
  }

  protected translate(code: string): string {
    return this.translateService.instant(code);
  }
}
