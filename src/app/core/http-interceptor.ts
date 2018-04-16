import { Logger } from './logger.service';
import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

export class HttpInterceptor implements angular.IHttpInterceptor {

  constructor(private $q: angular.IQService, private logger: Logger) {}

  request = (config: angular.IRequestConfig) => {
    if (this.isApiCall(config.url)) {
      if (!config.params) {
        config.params = {};
      }
      config.params.apikey = environment.apiKey;
    }

    return config;
  }

  response = (resp: any) => {
    if (this.isApiCall(resp.config.url)) {
      resp.data = resp.data.data.results;
    }

    return resp;
  }

  responseError = (rejection: any) => {
    if (this.isApiCall(rejection.config.url)) {
      this.logger.error(rejection.data.message, rejection.data, rejection.data.code);
    }

    return this.$q.reject(rejection);
  }

  private isApiCall(url: string) {
    return url.indexOf(environment.apiUrl) !== -1;
  }

}

angular
  .module('ngaApp.core')
  .service('httpInterceptor', HttpInterceptor);
