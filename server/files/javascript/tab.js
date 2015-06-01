semantic.dropdown = {};

// ready event
semantic.dropdown.ready = function() {


  $.fn.api.settings.mockResponseAsync = function(settings, callback) {
    var response = {
      first  : '<h3 class="ui header">AJAX Tab One</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">',
      second : '<h3 class="ui header">AJAX Tab Two</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">',
      third  : '<h3 class="ui header">AJAX Tab Three</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">'
    };
    // do any asynchronous task here
    setTimeout(function() {
      callback( response[settings.urlData.tab] );
    }, 200);
  };

  $('.first.example .menu .item')
    .tab({
      context: '.first.example'
    })
  ;

  $('.history.example .menu .item')
    .tab({
      context : '.history.example',
      history : true,
      path    : '/modules/tab.html'
    })
  ;

  $('.paths.example .menu .item')
    .tab({
      context: '.paths.example'
    })
  ;

  $('.dynamic.example .menu .item')
    .tab({
      context : '.dynamic.example',
      auto    : true,
      history  : false,
      path    : '/'
    })
  ;

};


// attach ready event
$(document)
  .ready(semantic.dropdown.ready)
;