semantic.form = {};

// ready event
semantic.form.ready = function() {

  // selector cache
  var
    $codeDropdown = $('.existing.code .dropdown'),
    $dropdown     = $('.main.container .ui.dropdown').not($codeDropdown),
    $addExample   = $('.add.example form')
    // alias
    handler
  ;

  // event handlers
  handler = {

  };

  $dropdown
    .dropdown()
  ;


};


// attach ready event
$(document)
  .ready(semantic.form.ready)
;
