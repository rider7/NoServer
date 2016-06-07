angular.module('myApp',['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
  .state('index', {
    url:'/'
  })
  .state('about', {
    templateUrl: './views/about-tmpl.html',
    url: '/about/'
  })
  .state('project', {
    templateUrl: './views/project-tmpl.html',
    url: '/project/'
  })
  .state('contact', {
    templateUrl: './views/contact-tmpl.html',
    url: '/contact/'
  })
  .state('work', {
    templateUrl: './views/work-tmpl.html',
    url: '/work/'
  })

$urlRouterProvider
.otherwise('/')

});
