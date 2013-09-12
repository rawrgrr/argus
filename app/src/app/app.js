angular.module('ArgusApp', [
        'templates-app',
        'templates-common',
        'ArgusApp.home',
        'ngBoilerplate.about',
        'ui.state',
        'ui.route',
        'ngGrid'])

    .config(function myAppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })

    .run(function run(titleService) {
        titleService.setSuffix(' | ArgusApp');
    })

    .controller('ArgusController', function ArgusController($scope, $location) {

    });

