(function() {
  'use strict';
  angular.module('rhsmCliApp')
    .directive('fadeOnChange', function($animate) {
      return function(scope, elem, attr) {
        var c = 'change';
        scope.$watch(attr.fadeOnChange, function() {
          $animate.addClass(elem, c).then(function() {
            elem.removeClass(c);
          });
        });
      };
    });
})();
