(function() {
  'use strict';
  var primaryModules = [{
    cmd: 'attach',
    description: 'Attach a specified subscription to the registered system'
  }, {
    cmd: 'list',
    description: 'List subscription and product information for this system'
  }, {
    cmd: 'refresh',
    description: 'Pull the latest subscription data from the server'
  }, {
    cmd: 'register',
    description: 'Register this system to the Customer Portal or another subscription management service'
  }, {
    cmd: 'release',
    description: 'Configure which operating system release to use'
  }, {
    cmd: 'remove',
    description: 'Remove all or specific subscriptions from this system'
  }, {
    cmd: 'status',
    description: 'Show status information for this system\'s subscriptions and products'
  }, {
    cmd: 'unregister',
    description: 'Unregister this system from the Customer Portal or another subscription management service'
  }, ];
  var otherModules = [{
    cmd: 'auto-attach',
    description: 'Set if subscriptions are attached on a schedule (default of daily)'
  }, {
    cmd: 'clean',
    description: 'Remove all local system and subscription data without affecting the server'
  }, {
    cmd: 'config',
    description: 'List, set, or remove the configuration parameters in use by this system'
  }, {
    cmd: 'environments',
    description: 'Display the environments available for a user'
  }, {
    cmd: 'facts',
    description: 'View or update the detected system information'
  }, {
    cmd: 'identity',
    description: 'Display the identity certificate for this system or request a new one'
  }, {
    cmd: 'import',
    description: 'Import certificates which were provided outside of the tool'
  }, {
    cmd: 'orgs',
    description: 'Display the organizations against which a user can register a system'
  }, {
    cmd: 'plugins',
    description: 'View and configure subscription-manager plugins'
  }, {
    cmd: 'redeem',
    description: 'Attempt to redeem a subscription for a preconfigured system'
  }, {
    cmd: 'repos',
    description: 'List the repositories which this system is entitled to use'
  }, {
    cmd: 'service-level',
    description: 'Manage service levels for this system'
  }, {
    cmd: 'subscribe',
    description: 'Deprecated, see attach'
  }, {
    cmd: 'unsubscribe',
    description: 'Deprecated, see remove'
  }, {
    cmd: 'version',
    description: 'Print version information'
  }];

  angular.module('rhsmCliApp')
    .factory('SubManager', function(questions, $rootScope) {
      function SubManager(inputs, term) {
        var current = questions.getCurrent();
        var echo = term.echo;
        var insert = term.insert;
        var callback = function() {
          return this.finishedCallback(inputs);
        };
        if (angular.equals(inputs, current.command_expected)) {
          $rootScope.$emit('correctAnswer');
        }
        var command = inputs[1];
        if (!inputs[1]) {
          echo(usage());
        } else if (inputs[1] === 'version') {
          echo(version());
        }
      }
      return SubManager;
    });

  function _rpad(str, padString, length) {
    while (str.length < length) {
      str = str + padString;
    }
    return str;
  }

  function version() {
    var output = [];
    output.push('server type: Red Hat Subscription Management\n',
      'subscription management server: 0.9.26.4-1\n',
      'subscription-manager: 1.9.11-1.el6\n',
      'python-rhsm: 1.9.6-1.el6');
    return output.join('');
  }

  function usage() {
    var output = [];
    output.push('Usage: subscription-manager MODULE-NAME [MODULE-OPTIONS] [--help]\n\n',
      'Primary Modules:\n\n');

    angular.forEach(primaryModules, function(module) {
      output.push('\t' + _rpad(module.cmd, ' ', 15) + module.description + '\n');
    });
    output.push('\nOther Modules:\n\n');
    angular.forEach(otherModules, function(module) {
      output.push('\t' + _rpad(module.cmd, ' ', 15) + module.description + '\n');
    });
    return output.join('');
  }

})();
