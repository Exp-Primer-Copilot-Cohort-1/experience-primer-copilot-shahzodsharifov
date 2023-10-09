function skillsMember() {
    return {
        restrict: 'E',
        scope: {
        info: '='
        },
        templateUrl: 'js/directives/member.html'
    };
}