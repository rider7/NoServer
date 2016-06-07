angular.module('myApp')
.directive('contactDir', function(){
  return {
    restrict: 'E',
    template: '<div ui-sref="contact" class="template-div"> <a ui-sref="contact">Contact</a> </div>',
    scope: {},
    link: function(scope, element, attrs) {
      element.css({
      });
    }
  }
});
