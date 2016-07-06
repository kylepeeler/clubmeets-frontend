/**
 * Created by Kyle on 7/5/16.
 */
angular.module('clubmeets.controllers', [])

.controller('LoginCtrl', function($scope, $http, $state, UserSession){
  $scope.email = "";
  $scope.password = "";
  $scope.login = function(email, password){
    var user = {
      email: email,
      password: password
    };
    //_httpPostLogin(user);
    //TODO: remove, skipping authentication
    UserSession.set("user", "test");
    UserSession.set("active", true);
    $state.go('feed');
  };

  function _httpPostLogin(user){
    var request = {
      method: "POST",
      url: "", //TODO: set dev server url,
      headers: {
        'content-type': 'application/json'
      },
      data: {
        email: user.email,
        password: user.password
      }
    };
    $http(request).then(
      function(res){
        console.dir(res);
        if (res.status === 200){
          UserSession.set("user", res.data);
          UserSession.set("active", true);
          $state.go('feed');
        }else{
          $state.go('error');
        }
      }
    )
  }
})
  .controller('FeedCtrl', function($scope, $http, $state){
    
  });
