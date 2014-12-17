'use strict';

angular.module('rhsmCliApp', [
  'ngAnimate',
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
