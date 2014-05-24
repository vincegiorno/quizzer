angular.module( 'ngQuizzer.home', [
    'ui.router'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    })

    .controller( 'HomeCtrl', ['$scope', '$state', function HomeController( $scope, $state ) {
        $scope.studentLogin = function() {
            $state.go('login.student');
        };
        $scope.teacherLogin = function() {
            $state.go('login.teacher');
        };

    }])

;

