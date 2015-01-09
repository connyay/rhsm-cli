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
        'regandsub': {
          name: 'Registration and Subscription',
          questions: regAndSub()
        },
        'about': {
          name: 'About your system',
          questions: about()
        },
        'repos': {
          name: 'Working with repositories',
          questions: repos()
        }
      };



      // Public API here
      return {
        getTutorial: function(tutorial) {
          if (tutorialMap[tutorial]) {
            return tutorialMap[tutorial];
          }
          return {};
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
      about: 'The most common process for using RHSM is to register and subscribe your system in a single command. ' +
        'This two step process, registration and then subscription, is consolidated into a single command and covers most use cases.',
      assignment: 'Register and subscribe automatically. Use the username \'redhat\' and the password \'LearningFun1!\'. The command should look like this:',
      command_expected: ['subscription-manager', 'register', '--auto-attach', '--username=redhat', '--password=LearningFun1!'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 2 about',
      assignment: 'Register only',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'register'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 3 about',
      assignment: 'Subscribe a system automatically',
      command_expected: ['subscription-manager', 'attach', '--auto'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 4 about',
      assignment: 'List available subscriptions',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'list', '--available'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 5 about',
      assignment: 'Subscribe a system with a specific subscription pool IDs (stacking multiple)',
      command_expected: ['subscription-manager', 'attach', '--pool='],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 6 about',
      assignment: 'Unsubscribe all system subscriptions',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'remove', '--all'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 7 about',
      assignment: 'Unsubscribe a specific subscription serial',
      command_expected: ['subscription-manager', 'remove', '--serial='],
      result: "<p>Correct</p>"
    });
    return q;
  }

  function about() {
    var q = [];
    q.push({
      about: 'Step 1 about',
      assignment: 'Get subscription manager identity',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'identity'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 2 about',
      assignment: 'List consumed subscriptions',
      command_expected: ['subscription-manager', 'list', '--consumed'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 3 about',
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
      about: 'Step 1 about',
      assignment: 'List available repositories',
      command_expected: ['subscription-manager', 'repos', '--list'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 2 about',
      assignment: 'Enabling a repository',
      tip: "<p>Try typing <code>subscription-manager</code> to see the full list of accepted arguments</p>",
      command_expected: ['subscription-manager', 'repos', '--enable', 'rhel-6-server-optional-rpms'],
      result: "<p>Correct</p>"
    });

    q.push({
      about: 'Step 3 about',
      assignment: 'Disabling a repository',
      command_expected: ['subscription-manager', 'repos', '--disable', 'rhel-6-server-optional-rpms'],
      result: "<p>Correct</p>"
    });

    return q;
  }

})();
