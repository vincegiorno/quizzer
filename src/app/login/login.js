angular.module( 'ngQuizzer.login', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider
   .state( 'login', {
    url: '/login',
    abstract: true,
    views: {
        "main": {
            template: '<div ui-view="login"></div>'
        }
    }})
      .state( 'login.student', {
          url:'/take_test',
          views: {
              "login": {
                  templateUrl: 'login/student.tpl.html',
                  controller: 'loginCtrl'
              }
          },
          data:{ pageTitle: 'Login' }
      })
      .state( 'login.teacher', {
          url:'/create_test',
          views: {
              "login": {
                  templateUrl: 'login/teacher.tpl.html',
                  controller: 'loginCtrl'
              }
          },
          data:{ pageTitle: 'Login' }
      })
  ;
})



.controller( 'loginCtrl', function LoginCtrl( $scope ) {
    $scope.login = true;
    $scope.signup = !$scope.login;
    $scope.loginError = false;
    $scope.signupError = false;
    
    $scope.teacherSignup = function() {
        
    };
    
    $scope.teacherLogin = function() {
        
    };

})


;
