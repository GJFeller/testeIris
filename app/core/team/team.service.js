/**
 * Created by Gustavo on 09/01/2017.
 */
angular.
    module('core.team').
    factory('Team', ['$resource',
        function($resource) {
            return $resource('Teams-data/:teamId.json', {}, {
                query: {
                    method: 'GET',
                    params: {phoneId: 'teams'},
                    isArray: true
                }
            });
        }
    ]);