Template.nav.loggedIn = function() {
  return Meteor.user();
};

Template.nav.events({
  'click .logout': function(){
    Meteor.logout();
  }
})
