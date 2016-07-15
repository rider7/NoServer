angular.module('myApp')
.directive('aboutDir', function(){
  return {
    restrict: 'E',
    template: '<div ui-sref="about" class="template-div"><a ui-sref="about">About</a> </div>',
    }
});
