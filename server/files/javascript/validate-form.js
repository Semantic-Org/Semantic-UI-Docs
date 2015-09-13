semantic.validateForm = {};

// ready event
semantic.validateForm.ready = function() {

  // selector cache
  var
    $dogForm      = $('.dog.example .ui.form'),
    $matchingForm = $('.matching.example .ui.form'),
    $autoForm     = $('.auto.example .ui.form'),
    $promptForm   = $('.prompt.example .ui.form'),
    $dropdownForm = $('.dropdown.example .ui.form'),
    $optionalForm = $('.optional.example .ui.form'),
    $inlineForm   = $('.inline.example .ui.form'),
    $form         = $('.ui.form').not($dogForm).not($inlineForm).not($dropdownForm).not($optionalForm).not($promptForm),
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

  $form
    .form()
  ;

  $matchingForm
    .form({
      fields: {
        name: {
          identifier : 'special-name',
          rules: [
            {
              type   : 'empty'
            }
          ]
        }
      }
    })
  ;

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

/*  $autoForm
    .form({
      fields: {
        name     : 'empty',
        gender   : 'empty',
        username : 'empty',
        password : ['minLength[6]', 'empty'],
        skills   : ['minCount[2]', 'empty'],
        terms    : 'checked'
      }
    })
  ;
*/
  $promptForm
    .form({
      fields: {
        field1: {
          rules: [
            {
              type   : 'empty'
            }
          ]
        },
        field2: {
          rules: [
            {
              type   : 'exactly[dog]',
              prompt : '{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'
            }
          ]
        }
      }
    })
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
};


// attach ready event
$(document)
  .ready(semantic.validateForm.ready)
;