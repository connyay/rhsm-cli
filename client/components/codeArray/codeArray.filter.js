'use strict';

angular.module('rhsmCliApp')
  .filter('codeArray', function() {
    return function(input) {
      if (input && input.join) {
        return input.join(' ');
      }
    };
  });
