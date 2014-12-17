'use strict';

angular.module('rhsmCliApp', [
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'oitozero.ngSweetAlert'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
