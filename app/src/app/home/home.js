/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('ArgusApp.home', [
        'ui.state',
        'titleService',
        'heatmap'
    ])

    /**
     * Each section or module of the site can also have its own routes. AngularJS
     * will handle ensuring they are all available at run-time, but splitting it
     * this way makes each module more "self-contained".
     */
    .config(function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeController',
                    templateUrl: 'home/home.tpl.html'
                }
            }
        });
    })

    /**
     * And of course we define a controller for our route.
     */
    .controller('HomeController', function HomeController($scope, $http, titleService) {
        titleService.setTitle('Home');

        $scope.allData = [
            {revision: 1, author: "Roger",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 2, author: "Fabio",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_DIFF'},
            {revision: 3, author: "Koko",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'DIFF'},
            {revision: 4, author: "Yang",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'MERGE'},
            {revision: 5, author: "Andy",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 1, author: "Jungmin", date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 2, author: "Roger",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 3, author: "Fabio",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_DIFF'},
            {revision: 4, author: "Koko",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'DIFF'},
            {revision: 5, author: "Yang",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'MERGE'},
            {revision: 5, author: "Andy",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 4, author: "Jungmin", date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 3, author: "Roger",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 2, author: "Fabio",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_DIFF'},
            {revision: 1, author: "Koko",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'DIFF'},
            {revision: 5, author: "Yang",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'MERGE'},
            {revision: 4, author: "Andy",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 3, author: "Jungmin", date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 2, author: "Roger",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 1, author: "Fabio",   date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_DIFF'},
            {revision: 1, author: "Koko",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'DIFF'},
            {revision: 2, author: "Yang",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'MERGE'},
            {revision: 3, author: "Andy",    date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'},
            {revision: 4, author: "Jungmin", date: 'DATE', time: 'SOME_TIME', diffStatus: 'NO_RB'}
        ];

        $scope.filteredData = $scope.allData;

        $scope.gridOptions = {data: 'filteredData'};

        $scope.$on('HEATMAP_CLICKED', function(event, args) {

            $scope.filteredData = _.reject($scope.allData, function(num) { return num.revision % _.random(0, 5) === 0; });

            if (!$scope.$$phase) {
                $scope.$apply();
            }

        });

    });

