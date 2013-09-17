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
    .controller('HomeController', function HomeController($scope, titleService) {
        titleService.setTitle('Home');

        $scope.myData = [
            {name: "Moroni", age: 50, status: 'BAD'},
            {name: "Tiancum", age: 43, status: 'BAD'},
            {name: "Jacob", age: 27, status: 'GOOD'},
            {name: "Nephi", age: 29, status: 'BAD'},
            {name: "Enos", age: 34, status: 'GOOD'}
        ];

        $scope.gridOptions = {data: 'myData'};

    });

