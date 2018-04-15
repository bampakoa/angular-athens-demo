declare var angular: angular.IAngularStatic;

export class HttpInterceptor {

  constructor(private $q, private apiUrl, private apiKey, private exception) {}

  request = (config) => {
    if (this.isApiCall(config.url)) {
      if (!config.params) {
        config.params = {};
      }
      config.params.apikey = this.apiKey;
    }

    return config;
  }

  response = (resp) => {
    if (this.isApiCall(resp.config.url)) {
      resp.data = resp.data.data.results;
    }

    return resp;
  }

  responseError = (rejection) => {
    if (this.isApiCall(rejection.config.url)) {
      this.exception.catcher(rejection.data.code + ':' + rejection.data.message)(rejection.data);
    }

    return this.$q.reject(rejection);
  }

  private isApiCall(url) {
    return url.indexOf(this.apiUrl) !== -1;
  }

}

angular
  .module('ngaApp.core')
  .service('httpInterceptor', HttpInterceptor);
