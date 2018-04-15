import { Logger } from '../logger/logger';

declare var angular: angular.IAngularStatic;

export class Exception {

  constructor(private logger: Logger) {}

  catcher(message: string) {
    return (reason: string) => {
      this.logger.error(message, reason);
    };
  }

}

angular
  .module('blocks.exception')
  .service('exception', Exception);
