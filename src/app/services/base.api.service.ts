import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

@Injectable()
export class BaseApiService {
  constructor(
    private alertService: AlertService
  ) { }

  /**
   * Checks if response is correct and also has valid api key expiration
   * @param response Response to check.
   */
  CheckResponse(response: Response): boolean {
    // TODO: Implement functionality.

    // TODO: Throw exception if response is not valid. (Response code != 400 || response object is invalid.)
    return true;
  }
}
