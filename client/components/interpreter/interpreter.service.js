'use strict';

angular.module('rhsmCliApp')
  .factory('interpreter', function(SubManager) {
    var immediateCallback = function(command) {
      console.debug('immediate callback from ' + command);
    };
    // Public API here
    return {
      base: function(command, term) {
        var cmd = $.terminal.splitCommand(command);
        if (cmd.name === 'subscription-manager') {
          SubManager(cmd, term);
        } else if (cmd) {
          term.echo('' + cmd.name + ': command not found');
        }
        return immediateCallback(cmd);
      }
    };
  });
