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

  $('.main.container .sticky.example')
    .each(function() {
      var
        $sticky      = $(this).find('.ui.sticky').not('.segment > .sticky'),
        $exactSticky = $(this).find('.segment .ui.sticky'),
        $context     = $(this).find('.segment')
      ;
      $sticky
        .sticky({
          context: $context,
          offset: 75
        })
      ;
      if($exactSticky.size() > 0) {
        $exactSticky
          .sticky({
            context: $context,
            offset: 39
          })
        ;
      }
    })
  ;

};


// attach ready event
$(document)
  .ready(semantic.dropdown.ready)
;