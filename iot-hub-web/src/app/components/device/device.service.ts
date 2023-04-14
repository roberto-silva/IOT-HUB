import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  baseUrl: string = 'https://puc-iot-hub-pipe-api.azurewebsites.net/v1';

  constructor(private httpClient: HttpClient) {
  }


  findById(id: string, params?: any): any {
    return this.httpClient.get(`${this.baseUrl}/datadevice/${id}`, {
      params: params,
      headers: this.getHeaders(),
      observe: 'response'
    });
  }

  async whenFindById(id: string, params?: any): Promise<any> {
    return await firstValueFrom(this.findById(id, params));
  }

  findAllDevices(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/datadevice`, {
      headers: this.getHeaders(),
      observe: 'response'
    });
  }

  protected getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders =
      new HttpHeaders()
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        .set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    return httpHeaders;
  }
}
