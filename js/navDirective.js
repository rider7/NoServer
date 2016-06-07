angular.module('myApp')
.directive('aboutDir', function(){
  return {
    restrict: 'E',
    template: '<div ui-sref="about" class="template-div"><a ui-sref="about">About</a> </div>',
    scope: {},
    link: function(scope, element, attrs) {
      console.log(element)
      element.children().css({

      });
    }
  }
});
