'use strict';

describe('Directive: terminal', function () {

  // load the directive's module
  beforeEach(module('rhsmCliApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<terminal></terminal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the terminal directive');
  }));
});
