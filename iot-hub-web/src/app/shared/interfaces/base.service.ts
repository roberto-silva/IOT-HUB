import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppInjector} from 'src/app/app.injector';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  protected http: HttpClient = AppInjector.get(HttpClient);

  protected translateService: TranslateService = AppInjector.get(TranslateService);

  constructor() {
  }

  get(url: string, params: HttpParams | any = null): Observable<any> {
    return this.http.get(url, {
      headers: this.getHeaders(),
      params: params,
    });
  }

  post(url: string, body: any = {}): Observable<any> {
    return this.http.post(url, body, {
      headers: this.getHeaders(),
    });
  }

  put(url: string, body: any = {}): Observable<any> {
    return this.http.put(url, body, {
      headers: this.getHeaders(),
    });
  }

  patch(url: string, body: any = {}): Observable<any> {
    return this.http.patch(url, body, {
      headers: this.getHeaders(),
    });
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, {headers: this.getHeaders()});
  }

  protected getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const authorization = localStorage?.getItem('authorization');
    if (authorization) {
      httpHeaders = new HttpHeaders().set('authorization', 'authorization');
    }
    return httpHeaders;
  }
}
