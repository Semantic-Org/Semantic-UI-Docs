semantic.started = {};

// ready event
semantic.started.ready = function() {

  // selector cache
  var handler = {

  };

  console.log('zzz');

  $('.main .ui.accordion')
    .accordion()
  ;
  $('.main .tabular .item')
    .tab({
      context: 'parent',
      onFirstLoad: function() {
        semantic.handler.makeCode();
      }
    })
  ;

};


// attach ready event
$(document)
  .ready(semantic.started.ready)
;