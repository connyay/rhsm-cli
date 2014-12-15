'use strict';
angular.module('rhsmCliApp')
  .controller('TutorialCtrl', function($scope, $stateParams, questions) {
    angular.element(document.body).addClass('tutorial-active');
    $scope.steps = [];
    var qs = questions.getQuestions($stateParams.tutorial);
    angular.forEach(qs, function(q, index) {
      $scope.steps.push({
        number: index + 1,
        completed: false,
        question: q
      });
    });
    function setCurrent() {
      questions.setCurrent($scope.currentStep.question);
    }
    $scope.currentStep = $scope.steps[0];
    setCurrent();
    $scope.answerHidden = true;
    $scope.changeStep = function(number) {
      $scope.answerHidden = true;
      $scope.currentStep = $scope.steps[number - 1];
      setCurrent();
    };
    $scope.toggleAnswer = function() {
      $scope.answerHidden = !$scope.answerHidden;
    };
  });
