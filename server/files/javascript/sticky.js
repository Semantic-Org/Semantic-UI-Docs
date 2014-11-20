semantic.dropdown = {};

// ready event
semantic.dropdown.ready = function() {

  // selector cache
  var
    // alias
    handler
  ;

  // event handlers
  handler = {

  };

  setTimeout(function() {
    $('.main.container .sticky.example .sticky').sticky('refresh');
    $('.main.container .pushing.example .sticky').sticky('refresh');
  }, 500);

  $('.main.container .pushing.example')
    .each(function() {
      var
        $sticky      = $(this).find('.ui.sticky').not('.segment > .sticky'),
        $context     = $(this).find('.segment')
      ;
      $sticky
        .sticky({
          context: $context,
          offset: 50,
          pushing: true
        })
      ;
    })
  ;

  $('.main.container .inline.example')
    .each(function() {
      var
        $inlineSticky = $(this).find('.segment .ui.sticky'),
        $context      = $(this).find('.segment')
      ;
      if($inlineSticky.size() > 0) {
        $inlineSticky
          .sticky({
            context: $context,
            offset: 39
          })
        ;
      }
    })
  ;

  $('.main.container .sticky.example')
    .each(function() {
      var
        $sticky      = $(this).find('.ui.sticky').not('.segment > .sticky'),
        $context     = $(this).find('.segment')
      ;
      $sticky
        .sticky({
          context: $context,
          offset: 75
        })
      ;
    })
  ;

};


// attach ready event
$(document)
  .ready(semantic.dropdown.ready)
;