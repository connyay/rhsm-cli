'use strict';

angular.module('rhsmCliApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tutorial', {
        url: '/tutorial/:tutorial',
        templateUrl: 'app/tutorial/tutorial.html',
        controller: 'TutorialCtrl'
      });
  });
