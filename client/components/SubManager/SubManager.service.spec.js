'use strict';

describe('Service: SubManager', function () {

  // load the service's module
  beforeEach(module('rhsmCliApp'));

  // instantiate service
  var SubManager;
  beforeEach(inject(function (_SubManager_) {
    SubManager = _SubManager_;
  }));

  it('should do something', function () {
    expect(!!SubManager).toBe(true);
  });

});
