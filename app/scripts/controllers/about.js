'use strict';

/**
 * @ngdoc function
 * @name webfrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webfrontApp
 */
angular.module('webfrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
