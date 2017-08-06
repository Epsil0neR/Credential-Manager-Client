import { environment } from './../../environments/index';
import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptionsArgs, RequestOptions } from '@angular/http';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {
  constructor() {
    super();
    this.headers.set('Content-Type', 'application/json');
  }

  merge(options?: RequestOptionsArgs): RequestOptions {
    const newOptions = super.merge(options);

    if (environment.AuthId != null)
      newOptions.headers.set('AuthId', environment.AuthId);

    return newOptions;
  }
}
