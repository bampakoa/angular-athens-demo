class Exception {

  constructor(private logger) {}

  catcher(message) {
    return reason => {
      this.logger.error(message, reason);
    };
  }

}

angular
  .module('blocks.exception')
  .service('exception', Exception);
