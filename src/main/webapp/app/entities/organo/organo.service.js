(function() {
    'use strict';
    angular
        .module('reunionsApp')
        .factory('Organo', Organo);

    Organo.$inject = ['$resource'];

    function Organo ($resource) {
        var resourceUrl =  'api/organos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();