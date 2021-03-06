angular.module( 'ngQuizzer', [
  'templates-app',
  'templates-common',
  'ngQuizzer.home',
  'ngQuizzer.login',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){
      if (toState.name == 'dashboard' && !teacherService.isAuthenticated) {
          $state.go('home');
      }
  });
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Quizzer' ;
    }
  });
})

;

