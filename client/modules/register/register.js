
Template.register.rendered = function(){

  function register(){
    Accounts.createUser({
      email: $('#email').val(),
      password: $('#password').val()
    },
    function(error) {
        if (error){
          showError(error);
        }
    })
  }

  $(this.find(".register"))
    .transition('fade up in');

  function showError(error){
    console.log(error.reason);
  }

  $(this.find('.ui.form'))
    .form({
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'empty',
            prompt: "Please enter an email!"
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
            prompt: "Please enter a password!"
          }
        ]
      }
    },{
      onSuccess: register
    })
};
