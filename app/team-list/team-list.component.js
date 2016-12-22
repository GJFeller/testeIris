/**
 * Created by gustavo on 21/12/2016.
 */
angular.
    module('teamList').
component('serieAList', {
    template:
    '<ul> ' +
    '<li ng-repeat="team in $ctrl.teams">' +
    '<span>{{team.name}}</span>' +
    '<p>{{team.city}}</p>' +
    '<p>{{team.state}}</p>' +
    '</li>' +
    '</ul>',
    controller: function SerieAController() {
        this.teams = [
            {
                name: 'Gremio',
                city: 'Porto Alegre',
                state: 'Rio Grande do Sul'
            }, {
                name: 'Palmeiras',
                city: 'Sao Paulo',
                state: 'Sao Paulo'
            }, {
                name: 'Flamengo',
                city: 'Rio de Janeiro',
                state: 'Rio de Janeiro'
            }
        ];
    }
}).
component('serieBList', {
    template:
    '<ul> ' +
    '<li ng-repeat="team in $ctrl.teams">' +
    '<span>{{team.name}}</span>' +
    '<p>{{team.city}}</p>' +
    '<p>{{team.state}}</p>' +
    '</li>' +
    '</ul>',
    controller: function SerieBController() {
        this.teams = [
            {
                name: 'Internacional',
                city: 'Porto Alegre',
                state: 'Rio Grande do Sul'
            }, {
                name: 'Juventude',
                city: 'Caxias do Sul',
                state: 'Rio Grande do Sul'
            }, {
                name: 'Figueirense',
                city: 'Florianopolis',
                state: 'Santa Catarina'
            }
        ];
    }
});