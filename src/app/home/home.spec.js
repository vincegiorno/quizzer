describe( 'HomeCtrl', function() {
  beforeEach( module( 'ngQuizzer.home' ) );
    var ctrl,scope;

    beforeEach(inject (function($rootScope,$controller) {
        scope = $rootScope.$new();
        ctrl = $controller('HomeCtrl', {
            '$scope': scope
        });
    }));

  it( 'should transition to login with correct data', inject( function($state) {
      spyOn( $state, 'go');
      scope.teacherLogin();
      expect( $state.go ).toHaveBeenCalledWith('login.teacher');
      scope.studentLogin();
      expect( $state.go ).toHaveBeenCalledWith('login.student');
  }));
});

