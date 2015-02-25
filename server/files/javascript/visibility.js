semantic.visiblity = {};

// ready event
semantic.visiblity.ready = function() {

  // selector cache
  var
    // alias
    handler
  ;

  // event handlers
  handler = {
  };



};

var count = 1;
window.loadFakeContent = function() {
  // load fake content
  var
    $segment = $('.long.segment'),
    $loader  = $segment.find('.inline.loader'),
    $content = $('<h3 class="ui header">Loaded Content #' + count + '</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">')
  ;
  $loader.addClass('active');
  setTimeout(function() {
    $loader
      .removeClass('active')
      .before($content)
    ;
    $segment.visibility('refresh');
  }, 500);
  count++;
}



// attach ready event
$(document)
  .ready(semantic.visiblity.ready)
;