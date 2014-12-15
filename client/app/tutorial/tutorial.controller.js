'use strict';
angular.module('rhsmCliApp')
  .controller('TutorialCtrl', function($scope) {
    angular.element(document.body).addClass('tutorial-active');
    $scope.steps = [{
      number: 0,
      completed: false
    }, {
      number: 1,
      completed: false
    }, {
      number: 2,
      completed: false
    }, {
      number: 3,
      completed: false
    }, {
      number: 4,
      completed: false
    }, {
      number: 5,
      completed: false
    }, {
      number: 6,
      completed: false
    }];
    $scope.current = {
      number: 0
    };

    $scope.changeStep = function(number) {
      $scope.current.number = number;
    };
  });
