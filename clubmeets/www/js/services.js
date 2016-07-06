/**
 * Created by Kyle on 7/5/16.
 */
angular.module('clubmeets.services', [])
  .factory('UserSession', function(){
    var currentSessions = {active: false};
    return {
      get: function(){
        return currentSessions;
      },
      set: function(key, value){
        currentSessions[key] = value;
      }
    };
  });
