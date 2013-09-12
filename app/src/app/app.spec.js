describe('ArgusController', function () {
    describe('isCurrentUrl', function () {
        var AppCtrl, $location, $scope;

        beforeEach(module('ArgusApp'));

        beforeEach(inject(function ($controller, _$location_, $rootScope) {
            $location = _$location_;
            $scope = $rootScope.$new();
            AppCtrl = $controller('ArgusController', { $location: $location, $scope: $scope });
        }));

        it('should pass a dummy test', inject(function () {
            expect(AppCtrl).toBeTruthy();
        }));
    });
});
