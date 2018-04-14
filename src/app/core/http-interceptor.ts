(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .service('httpInterceptor', httpInterceptor);

    function httpInterceptor(apiUrl, apiKey) {
        const service = {
            request: request,
            response: response
        };

        return service;

        function isApiCall(url) {
            return url.indexOf(apiUrl) !== -1;
        }

        function request(config) {
            if (isApiCall(config.url)) {
                if (!config.params) {
                    config.params = {};
                }
                config.params.apikey = apiKey;
            }

            return config;
        }

        function response(resp) {
            if (isApiCall(resp.config.url)) {
              resp.data = resp.data.data.results;
            }

            return resp;
        }
    }
})();
