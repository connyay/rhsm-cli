'use strict';

angular.module('rhsmCliApp')
  .factory('interpreter', function(SubManager) {
    var immediateCallback = function(command) {
      console.debug('immediate callback from ' + command);
    };
    // Public API here
    return {
      base: function(input, term) {
        var inputs = input.split(' ');
        var command = inputs[0];
        if (command === 'subscription-manager') {
          SubManager(inputs, term);
        } else if (command) {
          term.echo('' + inputs[0] + ': command not found');
        }
        return immediateCallback(inputs);
      }
    };
  });
