'use strict';

angular.module('rhsmCliApp')
  .filter('codeArray', function() {
    return function(input) {
      return input.join(' ');
    };
  });
