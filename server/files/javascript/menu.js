semantic.menu = {};

// ready event
semantic.menu.ready = function() {

  // selector cache
  var
    $dropdownItem = $('.main.container .menu .dropdown .item'),
    $menuItem     = $('.main.container .menu a.item, .menu .link.item').not($dropdownItem),
    $dropdown     = $('.main.container .menu .dropdown'),
    // alias
    handler = {

      activate: function() {
        if(!$(this).hasClass('dropdown')) {
          $(this)
            .addClass('active')
            .closest('.ui.menu')
            .find('.item')
              .not($(this))
              .removeClass('active')
          ;
        }
      }

    }
  ;

  $dropdown
    .dropdown({
      on: 'hover'
    })
  ;

  $menuItem
    .on('click', handler.activate)
  ;

};


// attach ready event
$(document)
  .ready(semantic.menu.ready)
;