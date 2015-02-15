'use strict'
/**
 * Created by panma on 2/16/15.
 */
angular.module('webfrontApp')
  .directive('wfrontFooterRegion',[function(){
    return {
      restrict : 'E',
      replace: true,
      templateUrl:'views/directive-view/footer.html',
      link:function(scope){

      }

    }

  }]);
