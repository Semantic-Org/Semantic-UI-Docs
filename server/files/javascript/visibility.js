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
  setTimeout(function() {
    $('.visibility.example .demo.segment .sticky')
      .sticky({
        observeChanges : false,
        context        : '.visibility.example .demo.segment',
        offset         : 80,
        onStick        : function() {
          if($(this).hasClass('hidden')) {
            $(this).transition('fade in');
          }
        },
        onBottom: function() {
          /*if(!$(this).hasClass('hidden')) {
            $(this).transition('fade out');
          }*/
        }
      })
    ;
    $('.visibility.example .demo.segment')
      .visibility({
        once           : false,
        continuous     : true,
        observeChanges : false,
        onUpdate       : function(calculations) {
          $.each(calculations, function(name, value) {
            var
              value = (typeof value == 'integer')
                ? parseInt(value, 10)
                : value.toString(),
              $td
            ;
            if(name == 'pixelsPassed' || name == 'width' || name == 'height') {
              value = parseInt(value, 10) + 'px';
            }
            else if(name == 'percentagePassed') {
              value = parseInt(value * 100, 10) + '%';
            }
            $td = $('.demo.segment .sticky tr.'+ name +' td:last-child');
            if($td.html() !== value) {
              if(value == 'true' || value == 'false') {
                $td.removeClass('highlight').addClass('highlight');
                setTimeout(function(){ $td.removeClass('highlight'); }, 2000);
              }
              $td.html(value);
            }
          });
        }
      })
    ;
  }, 2000);
};

var count = 1;
window.loadFakeContent = function() {
  // load fake content
  var
    $segment = $('.long.segment'),
    $loader  = $segment.find('.inline.loader'),
    $content = $('<h3 class="ui header">Loaded Content #' + count + '</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">')
  ;
  if(count <= 5) {
    $loader.addClass('active');
    setTimeout(function() {
      $loader
        .removeClass('active')
        .before($content)
      ;
      $segment.visibility('refresh');
    }, 500);
  }
  count++;
}



// attach ready event
$(document)
  .ready(semantic.visiblity.ready)
;