Template.dashboard.username = function(){
  return Meteor.user().emails[0].address;
};

Template.dashboard.rendered = function(){
  $(this.find('.dashboard'))
    .transition('fade up in');
};
