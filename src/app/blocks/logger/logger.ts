declare var angular: angular.IAngularStatic;

export class Logger {

  constructor(private $log: angular.ILogService, private toastr: Toastr) {}

  error(message: string, data: any, title?: string) {
    this.toastr.error(message, title);
    this.$log.error('Error: ' + message, data);
  }

  info(message: string, data: any, title: string) {
    this.toastr.info(message, title);
    this.$log.info('Info: ' + message, data);
  }

  success(message: string, data: any, title: string) {
    this.toastr.success(message, title);
    this.$log.info('Success: ' + message, data);
  }

  warning(message: string, data: any, title: string) {
    this.toastr.warning(message, title);
    this.$log.warn('Warning: ' + message, data);
  }

}

angular
  .module('blocks.logger')
  .service('logger', Logger);
