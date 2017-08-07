import { environment } from './../../environments/index';
import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {
  constructor() {
    super();
    this.headers.set('Content-Type', 'application/json');
    // this.headers.set('Test1', '1');
  }

  merge(options?: RequestOptionsArgs): RequestOptions {
    const newOptions = super.merge(options);
    this.populateHeaders(newOptions.headers);
    return newOptions;
  }

  private populateHeaders(headers: Headers): void {
    // headers.set('Test2', '2');

    if (environment.AuthId != null)
      headers.set('AuthId', environment.AuthId);
  }

  mergeHeaders(headers: Headers): Headers {
    this.populateHeaders(headers);

    let keys = this.headers.keys();
    keys.forEach(k => {
      let values = this.headers.getAll(k);
      values.forEach(v => {
        headers.set(k, v);
      });
    });

    return headers;
  }
}
