(() => {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    function exception(logger) {
        const service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return reason => {
                logger.error(message, reason);
            };
        }
    }
})();
