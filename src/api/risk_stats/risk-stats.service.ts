import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AssertionError } from 'assert';
import { handleError } from '../service-utils';
import { AuthService } from '../auth/auth.service';
import { IRiskStats, IRiskStatsBase } from './risk-stats';


@Injectable()
export class RiskStatsService {
  private req_options: RequestOptions;
  private api_base: string = window['cordova'] ? 'https://glaucoma-australia.complicated.io' : '';
  public risk_stats: {};
  public risk;

  constructor(private authService: AuthService, private http: Http) {
  }

  private setReqOptions() {
    this.req_options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Access-Token': this.authService.accessToken
      })
    });
  }

  create(risk_stats: IRiskStatsBase): Observable<IRiskStats> {
    this.setReqOptions();
    return this.http.post(`${this.api_base}/api/risk_stats`, JSON.stringify(risk_stats), this.req_options)
      .map((r: Response) => r.json() as IRiskStats)
      .catch(handleError)
  }

  read(createdAt: string | 'latest' | Date): Observable<IRiskStats> {
    return this.http.get(`${this.api_base}/api/risk_stats/${createdAt}`, new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json'
      })
    }))
      .map((r: Response) => r.json() as IRiskStats)
      .catch(handleError)
  }

  update(prevRecord: IRiskStats, newRecord: IRiskStatsBase): Observable<IRiskStats> {
    this.setReqOptions();
    return this.http.put(`${this.api_base}/api/risk_stats/${prevRecord.createdAt}`, JSON.stringify(newRecord), this.req_options)
      .map((r: Response) => r.json() as IRiskStats)
      .catch(handleError)
  }

  destroy(createdAt: string | Date): Observable<{}> {
    this.setReqOptions();
    return this.http.delete(`${this.api_base}/api/risk_stats/${createdAt}`, this.req_options)
      .map((r: Response) => r.status === 204 ? Object.freeze({}) : Observable.throw(
        new AssertionError(`Expected status of 204, got ${r.status}`)))
      .catch(handleError)
  }
}
