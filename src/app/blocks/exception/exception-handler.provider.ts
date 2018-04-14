(() => {
    'use strict';

    angular
        .module('blocks.exception')
        .provider('exceptionHandler', exceptionHandlerProvider)
        .config(config);

    function exceptionHandlerProvider() {
        this.config = {
            appErrorPrefix: undefined
        };

        this.configure = appErrorPrefix => {
            this.config.appErrorPrefix = appErrorPrefix;
        };

        this.$get = () => {
            return {config: this.config};
        };

        return this;
    }

    function config($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }

    function extendExceptionHandler($delegate, exceptionHandler, logger) {
        return (exception, cause) => {
            const appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
            const errorData = {exception: exception, cause: cause};
            exception.message = appErrorPrefix + exception.message;
            $delegate(exception, cause);
            logger.error(exception.message, errorData);
        };
    }
})();
