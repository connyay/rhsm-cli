(function() {


  'use strict';

  angular.module('rhsmCliApp')
    .constant('TERM_SETTINGS', {
      prompt: 'you@tutorial:~$ ',
      greetings: 'Welcome to the Subscription Manager CLI Tutorial'
    })
    .directive('terminal', function(TERM_SETTINGS, interpreter) {
      return {
        template: '<div></div>',
        restrict: 'EA',
        replace: true,
        link: function(scope, element, attrs) {
          element.terminal(interpreter.base, TERM_SETTINGS);
        }
      };
    });

})();
