semantic.dropdown = {};

// ready event
semantic.dropdown.ready = function() {

  // selector cache
  var
    $indeterminate = $('.indeterminate.example').find('.ui.checkbox'),
    $checkbox = $('.example').not('.static').find('.ui.checkbox'),
    // alias
    handler
  ;

  // event handlers
  handler = {

  };

  $checkbox
    .checkbox()
  ;

  $indeterminate
    .checkbox('indeterminate')
  ;



};


// attach ready event
$(document)
  .ready(semantic.dropdown.ready)
;