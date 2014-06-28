Template.dashboard.username = function(){
  return Meteor.user().emails[0].address;
};

Template.dashboard.events({

});