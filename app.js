angular.module('myApp',['ui.router', 'uiRouterStyles'])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
  .state('about', {
    templateUrl: './views/about-tmpl.html',
    url: '/about/',
    data: {
      css: ['./css/about.css']
    }
  })
  .state('future', {
    templateUrl: './views/future-tmpl.html',
    url: '/future/'
  })
  .state('skills', {
    templateUrl: './views/skills-tmpl.html',
    url: '/skills/'
  })
  .state('work', {
    templateUrl: './views/work-tmpl.html',
    url: '/work/'
  })

});
