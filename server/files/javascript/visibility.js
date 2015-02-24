semantic.visiblity = {};

// ready event
semantic.visiblity.ready = function() {

  // selector cache
  var
    // alias
    handler,
    count = 1
  ;

  // event handlers
  handler = {

    fakeContent: function() {
      // load fake content
      var
        $loader  =$(this).find('.inline.loader'),
        $content = $('<h3 class="ui header">Added Content #' + count + '</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png">')
      ;
      if(count <= 5) {
        $loader.addClass('active');
        setTimeout(function() {
          $loader
            .removeClass('active');
            .before($content)
          ;
        }, 1000);
      }
      count++;
    }

  };


  $('.long.segment')
    .visibility({
      debug           : true,
      once            : false,
      onBottomVisible : handler.fakeContent
    })
  ;


};


// attach ready event
$(document)
  .ready(semantic.visiblity.ready)
;