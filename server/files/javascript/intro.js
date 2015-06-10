semantic.intro = {};

// ready event
semantic.intro.ready = function() {

  // selector cache
  var handler = {

    activate: function() {
      if(!$(this).hasClass('dropdown browse')) {
        $(this)
          .addClass('active')
          .closest('.ui.menu')
          .find('.item')
            .not($(this))
            .removeClass('active')
        ;
      }
    }

  };

  // api
  $('.mock.example .button')
    .api({
      // lets just pretend this always works
      mockResponse: {
        success: true
      }
    })
    .state({
      text: {
        inactive   : 'Off',
        active     : 'On'
      }
    })
  ;
  $('.async.example .button')
    .api({
      // lets just pretend this mostly doesnt work
      mockResponseAsync: function(settings, callback) {
        var
          randomSuccess = (Math.random() < 0.3),
          response = (randomSuccess)
            ? { success: true }
            : false
        ;
        setTimeout(function() {
          callback(response);
        }, 500);
      }
    })
    .state({
      text: {
        inactive : 'Off',
        active   : 'On'
      }
    })
  ;


  // menu
  $('.main.container .menu a.item, .main.container .menu .link.item').not('.dropdown.item')
    .on('click', handler.activate)
  ;

  $('.ui.menu .browse.item')
    .popup({
      popup     : '.classes.popup',
      hoverable : true,
      position  : 'bottom left',
      delay     : {
        show: 300,
        hide: 800
      }
    })
  ;
  $('.main.container .ui.menu .ui.search')
    .search({
      type: 'category',
      apiSettings: {
        action: 'categorySearch'
      }
    })
  ;

  // dropdowns
  $('.dropdown.example .ui.dropdown').dropdown();
  $('.user.example .ui.dropdown').dropdown({
    allowAdditions: true
  });

  $('.remote.example .ui.dropdown')
    .dropdown({
      apiSettings: {
        url: '//api.semantic-ui.com/tags/{query}'
      }
    })
  ;

};


// attach ready event
$(document)
  .ready(semantic.intro.ready)
;