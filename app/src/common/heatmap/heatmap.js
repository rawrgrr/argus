angular.module('heatmap', [])

    .directive('heatmap', function () {
        return {
            link: function (scope, element, attrs) {
                var cal = new CalHeatMap();
                cal.init({
                    domain: "year",
                    subDomain: "day",
                    data: "assets/datas-years.json",
                    start: new Date(2000, 0, 5),
                    cellSize: 16,
                    range: 1,
                    domainGutter: 5,
                    previousSelector: "#example-g-PreviousDomain-selector",
                    nextSelector: "#example-g-NextDomain-selector",
                    legend: [2, 4, 6, 8],
                    onClick: function(date, nb) {
                        scope.$broadcast('HEATMAP_CLICKED', {date: date, value: nb});
                    }
                });
            },
            templateUrl: 'heatmap/heatmap.tpl.html'
        };
    });