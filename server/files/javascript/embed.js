semantic.embed = {};

// ready event
semantic.embed.ready = function() {

  // selector cache
  var
    // alias
    $myfavesEmbed = $('.example').eq(0).find('iframe'),
    handler
  ;

  // event handlers
  handler = {

  };

  $('.embed.example .ui.embed')
    .embed()
  ;


};


// attach ready event
$(document)
  .ready(semantic.embed.ready)
;