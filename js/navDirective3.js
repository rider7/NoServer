angular.module('myApp')
.directive('projectDir', function(){
  return {
    restrict: 'E',
    template: '<div ui-sref="project" class="template-div"> <a ui-sref="project">Project</a> </div>',
    scope: {},
    link: function(scope, element, attrs) {
      element.css({
      });
    }
  }
});
