/**
 * Created by Gustavo on 09/01/2017.
 */
angular.
    module('core').
    filter('checkmark', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    });