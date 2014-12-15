(function() {
  'use strict';

  angular.module('rhsmCliApp')
    .constant('EVENT_TYPES', {
      none: 'none',
      start: 'start',
      command: 'command',
      next: 'next',
      peek: 'peek',
      feedback: 'feedback',
      complete: 'complete'
    })
    .factory('questions', function(EVENT_TYPES) {
      var currentQuestion = {};
      var tutorialMap = {
        'regandsub': regAndSub(),
        'about': about(),
        'repos': repos()
      };



      // Public API here
      return {
        getQuestions: function(tutorial) {
          if (tutorialMap[tutorial]) {
            return tutorialMap[tutorial];
          }
          return [];
        },
        getCurrent: function() {
          return currentQuestion;
        },
        setCurrent: function(question) {
          currentQuestion = question;
        }
      };
    });

  function regAndSub() {
    var q = [];
    q.push({
      html: '<h3>Blah blah #1</h3>RHSM Step 1',
      assignment: 'Register and Subscribe in one command',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'register', '--auto-attach'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #2</h3>RHSM Step 2',
      assignment: 'Register only',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'register'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #3</h3>RHSM Step 3',
      assignment: 'Subscribe a system automatically',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'attach', '--auto'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #3</h3>RHSM Step 4',
      assignment: 'List available subscriptions',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'list', '--available'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #3</h3>RHSM Step 5',
      assignment: 'Subscribe a system with a specific subscription pool IDs (stacking multiple)',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'attach', '--pool='],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #3</h3>RHSM Step 6',
      assignment: 'Unsubscribe all system subscriptions',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'remove', '--all'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #3</h3>RHSM Step 7',
      assignment: 'Unsubscribe a specific subscription serial',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'remove', '--serial='],
      result: "<p>Correct</p>"
    });
    return q;
  }

  function about() {
    var q = [];
    q.push({
      html: '<h3>Blah blah #1</h3>RHSM Step 1',
      assignment: 'Get subscription manager identity',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'identity'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #1</h3>RHSM Step 2',
      assignment: 'List consumed subscriptions',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'list', '--consumed'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #1</h3>RHSM Step 3',
      assignment: 'Configuring subscription manager behavior',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'config', '--server.hostname=subscription.example.com'],
      result: "<p>Correct</p>"
    });

    return q;
  }

  function repos() {
    var q = [];
    q.push({
      html: '<h3>Blah blah #1</h3>RHSM Step 1',
      assignment: 'List available repositories',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'repos', '--list'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #1</h3>RHSM Step 2',
      assignment: 'Enabling a repository',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'repos', '--enable', 'rhel-6-server-optional-rpms'],
      result: "<p>Correct</p>"
    });

    q.push({
      html: '<h3>Blah blah #1</h3>RHSM Step 2',
      assignment: 'Disabling a repository',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'repos', '--disable', 'rhel-6-server-optional-rpms'],
      result: "<p>Correct</p>"
    });

    return q;
  }

})();
