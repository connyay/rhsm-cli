'use strict';

describe('Filter: codeArray', function () {

  // load the filter's module
  beforeEach(module('rhsmCliApp'));

  // initialize a new instance of the filter before each test
  var codeArray;
  beforeEach(inject(function ($filter) {
    codeArray = $filter('codeArray');
  }));

  it('should return the input prefixed with "codeArray filter:"', function () {
    var text = 'angularjs';
    expect(codeArray(text)).toBe('codeArray filter: ' + text);
  });

});
