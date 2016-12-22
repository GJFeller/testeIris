/**
 * Created by gustavo on 21/12/2016.
 */
angular.
    module('teamList').
component('serieAList', {
    templateUrl: 'team-list/team-list.template.html',
    controller: [ '$http',
        function SerieAController($http) {
            var self = this;
            self.orderProp = 'name';

            $http.get('Teams-data/serieATeams.json').then(function(response) {
                self.teams = response.data;
            })
        }
    ]
}).
component('serieBList', {
    templateUrl: 'team-list/team-list.template.html',
    controller: [ '$http',
        function SerieBController($http) {
            var self = this;
            self.orderProp = 'name';

            $http.get('Teams-data/serieBTeams.json').then(function(response) {
                self.teams = response.data;
            })
        }
    ]
});