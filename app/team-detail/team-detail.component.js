/**
 * Created by gustavo on 22/12/2016.
 */
angular
    .module('teamDetail').
    component('teamDetail', {
        templateUrl: "team-detail/team-detail.template.html",
        controller: ['$http', '$routeParams',
            function TeamDetailController($http, $routeParams) {
                var self = this;

                $http.get('Teams-data/' + $routeParams.teamId + '.json').then(function(response) {
                    self.team = response.data;
                    self.team.officialHonours = response.data.honours;
                });
            }
        ]
});