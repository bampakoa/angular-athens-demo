import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { LoggerService } from './ajs-upgraded-providers';
import { environment } from '../environments/environment';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {}

  handleError(error: Error) {
    this.injector.get(LoggerService).error(error.message, error, environment.settings.appErrorPrefix);
  }

}
