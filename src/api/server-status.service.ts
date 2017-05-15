import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ServerStatus } from './ServerStatus';
import { handleError } from './service-utils';

@Injectable()
export class ServerStatusService {
  private api_base: string = window['cordova'] ? 'https://glaucoma-australia.complicated.io' : '';

  constructor(private http: Http) {
  }

  get(): Observable<ServerStatus> {
    return this.http.get(`${this.api_base}/api`)
      .map(response => response.json())
      .catch(handleError);
  }
}
