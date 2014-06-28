/**
 * Router code lives here!
 */

Router.map(function(){
  this.route('home', {
    path: '/'
  });

  this.route('login', {
    path: '/login',
    redirectOnLogin: true,
    onBeforeAction: function(){
      if (Meteor.user() || Meteor.loggingIn()) {
        Router.go('dashboard');
      }
    }
  });

  this.route('register', {
    path: '/register',
    redirectOnLogin: true,
    onBeforeAction: function(){
      if (Meteor.user() || Meteor.loggingIn()) {
        Router.go('dashboard');
      }
    }
  });

  this.route('dashboard', {
    path: '/dashboard',
    loginRequired: 'login'
  });
});