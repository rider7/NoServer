angular.module('myApp')
.directive('workDir', function(){
  return {
    restrict: 'E',
    template: '<div ui-sref="work" class="template-div"> <a ui-sref="work">Work</a></div>',
    scope: {},
    link: function(scope, element, attrs) {
      element.css({
      });
    }
  }
});
