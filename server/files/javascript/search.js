semantic.search = {};

// ready event
semantic.search.ready = function() {

  // selector cache
  var
    $search     = $('.ui.search'),
    // alias
    handler
  ;

  $search
    .search()
  ;

};


// attach ready event
$(document)
  .ready(semantic.search.ready)
;