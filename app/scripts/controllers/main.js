'use strict';

/**
 * @ngdoc function
 * @name webfrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webfrontApp
 */
angular.module('webfrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
