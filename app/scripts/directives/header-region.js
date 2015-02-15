'use strict'
/**
 * Created by panma on 2/16/15.
 */
angular.module('webfrontApp')
  .directive('wfrontHeaderRegion',[function(){
    return {
      restrict : 'E',
      replace: true,
      templateUrl:'views/directive-view/header.html',
      link:function(scope){

      }

    }

  }]);
