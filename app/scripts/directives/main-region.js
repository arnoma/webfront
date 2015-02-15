'use strict'
/**
 * Created by panma on 2/16/15.
 */
angular.module('webfrontApp')
  .directive('wfrontMainRegion',[function(){
    return {
      restrict : 'E',
      replace: true,
      templateUrl:'views/directive-view/main.html',
      link:function(scope){

      }

    }

  }]);
