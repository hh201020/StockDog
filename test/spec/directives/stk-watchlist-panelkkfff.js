'use strict';

describe('Directive: stkWatchlistPanelkkfff', function () {

  // load the directive's module
  beforeEach(module('stockDogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stk-watchlist-panelkkfff></stk-watchlist-panelkkfff>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stkWatchlistPanelkkfff directive');
  }));
});
