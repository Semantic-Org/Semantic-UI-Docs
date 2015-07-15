semantic.validateForm = {};

// ready event
semantic.validateForm.ready = function() {

  // selector cache
  var
    $dogForm      = $('.dog.example .ui.form'),
    $dropdownForm = $('.dropdown.example .ui.form'),
    $optionalForm = $('.optional.example .ui.form'),
    $inlineForm   = $('.inline.example .ui.form'),
    $form         = $('.ui.form').not($dogForm).not($inlineForm).not($dropdownForm).not($optionalForm),
    $checkbox     = $('.main.container .ui.checkbox'),
    $dropdown     = $('.main.container .ui.dropdown'),
    // alias
    handler
  ;

  // event handlers
  handler = {

  };
  $checkbox
    .checkbox()
  ;
  $dropdown
    .dropdown()
  ;

  $.fn.form.settings.onSuccess = function() {
    // alert('Valid form!');
    return false;
  };

  $.fn.form.settings.defaults = {
    firstName: {
      identifier  : 'first-name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your first name'
        }
      ]
    },
    skills: {
      identifier  : 'skills',
      rules: [
        {
          type   : 'minCount[1]',
          prompt : 'Please select at least two skills'
        }
      ]
    },
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
      ]
    },
    gender: {
      identifier  : 'gender',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please select a gender'
        }
      ]
    },
    lastName: {
      identifier  : 'last-name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your last name'
        }
      ]
    },
    username: {
      identifier : 'username',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a username'
        },
        {
          type   : 'length[5]',
          prompt : 'Your username must be at least 5 characters'
        }
      ]
    },
    email: {
      identifier : 'email',
      rules: [
        {
          type   : 'email',
          prompt : 'Please enter a valid e-mail'
        }
      ]
    },
    password: {
      identifier : 'password',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a password'
        },
        {
          type   : 'length[6]',
          prompt : 'Your password must be at least 6 characters'
        }
      ]
    },
    passwordConfirm: {
      identifier : 'password-confirm',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please confirm your password'
        },
        {
          identifier : 'password-confirm',
          type       : 'match[password]',
          prompt     : 'Please verify password matches'
        }
      ]
    },
    terms: {
      identifier : 'terms',
      rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
      ]
    }
  };


  $inlineForm
    .form({
      inline : true,
      on: 'blur'
    })
  ;

  $dropdownForm
    .form({
      fields: {
        gender: {
          identifier  : 'gender',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a gender'
            }
          ]
        },
        name: {
          identifier  : 'name',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your name'
            }
          ]
        }
      }
    })
    .find('.dropdown')
      .dropdown()
  ;

  $optionalForm
    .form({
      fields: {
        email: {
          identifier : 'email',
          rules: [
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        },
        ccEmail: {
          identifier : 'cc-email',
          optional   : true,
          rules: [
            {
              type   : 'email',
              prompt : 'Please enter a valid second e-mail'
            }
          ]
        }
      }
    })
  ;

  $dogForm
    .form({
      fields: {
        dog: {
          identifier: 'dog',
          rules: [
            {
              type: 'empty',
              prompt: 'You must have a dog to add'
            },
            {
              type: 'contains[fluffy]',
              prompt: 'I only want you to add fluffy dogs!'
            },
            {
              type: 'not[mean]',
              prompt: 'Why would you add a mean dog to the list?'
            }
          ]
        }
      }
    })
  ;

  $form
    .form()
  ;

};


// attach ready event
$(document)
  .ready(semantic.validateForm.ready)
;