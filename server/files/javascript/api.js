
$.fn.api.settings.debug = true;

/* Define API endpoints once globally */
$.extend($.fn.api.settings.api, {
  'get followers' : '/followers/{id}?results={count}',
  'create user'   : '/create',
  'follow user'   : '/follow/{id}',
  'search'        : '/search/?query={value}'
});

semantic.api = {};
// ready event
semantic.api.ready = function() {

  $.fn.api.settings.mockResponseAsync = function(settings, callback) {
    setTimeout(function() {
      callback({
        "success": "true"
      });
    }, 500);
  };

  $('.test.example .ui.button')
    .api()
  ;
  $('.test.example .ui.input input')
    .api({
      stateContext: '.test.example .ui.input'
    })
  ;

  $('form .ui.dropdown')
    .dropdown()
  ;

};


// attach ready event
$(document)
  .ready(semantic.api.ready)
;