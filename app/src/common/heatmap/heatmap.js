angular.module('heatmap', [])

    .directive('heatmap', function () {
        return {
            link: function (scope, element, attrs) {
                var cal = new CalHeatMap();
                cal.init({
                    domain: "week",
                    subDomain: "hour",
                    data: "assets/datas-years.json",
                    start: new Date(2000, 0, 5),
                    cellSize: 15,
                    range: 2,
                    previousSelector: "#example-g-PreviousDomain-selector",
                    nextSelector: "#example-g-NextDomain-selector",
                    legend: [2, 4, 6, 8]
                });
            },
            templateUrl: 'heatmap/heatmap.tpl.html'
        };
    });