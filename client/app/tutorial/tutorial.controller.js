'use strict';
angular.module('rhsmCliApp')
  .controller('TutorialCtrl', function($scope, $rootScope, $stateParams, questions, SweetAlert) {
    angular.element(document.body).addClass('tutorial-active');
    $scope.steps = [];
    var tutorial = questions.getTutorial($stateParams.tutorial);
    var qs = tutorial.questions;
    $scope.tutorialName = tutorial.name;
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
    $scope.nextStep = function() {
      $scope.changeStep($scope.currentStep.number + 1);
      $scope.$digest();
      $rootScope.$broadcast('termFocus');
    };
    $scope.toggleAnswer = function() {
      $scope.answerHidden = !$scope.answerHidden;
      $rootScope.$broadcast('termFocus');
    };
    var doneFn = $scope.nextStep;
    var correctAnswerDeregister = $rootScope.$on('correctAnswer', function() {
      SweetAlert.swal({
        title: 'Good job!',
        text: 'You got it right!',
        type: 'success',
        confirmButtonText: 'Next →'
      }, doneFn);
    });
    $scope.$on('$destroy', function() {
      correctAnswerDeregister();
    });
  });
