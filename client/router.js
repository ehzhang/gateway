/**
 * Router code lives here!
 *
 */

Router.map(function(){

  this.route('home', {
    path: '/'
  });

  this.route('login', {
    path: '/login'
  });

  this.route('register', {
    path: '/register'
  });

  this.route('dashboard', {
    path: '/dashboard'
  })
});