/**
 * Created by gustavo on 22/12/2016.
 */
angular
    .module('teamDetail').
    component('teamDetail', {
        template: 'TBD: Detail view for <span>{{$ctrl.teamId}}</span>',
        controller: ['$routeParams',
            function TeamDetailController($routeParams) {
                this.teamId = $routeParams.teamId;
            }
        ]
});