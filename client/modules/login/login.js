
Template.login.rendered = function(){

  function login(){
    Meteor.loginWithPassword(
      $('#email').val(),
      $('#password').val()
    , function(error) {
        if (error){
          showError(error);
        }
    })
  }

  function showError(error){
    console.log(error.reason);
  }

  // Do when template is rendered
  $(this.find(".login"))
    .transition('fade up in');

  $(this.find('.ui.form'))
    .form({
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'empty',
            prompt: "Please enter your email!"
          },
          {
            type: 'email',
            prompt: "That's not a valid email address :("
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type: 'empty',
            prompt: "Please enter your password!"
          }
        ]
      }
    },{
      onSuccess: login
    });
};
