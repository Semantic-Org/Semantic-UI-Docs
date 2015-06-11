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
  $('.external.example .ui.search')
    .search({
      type          : 'category',
      minCharacters : 3,
      apiSettings   : {
        onFailure: function() {
          $(this).search('display message', '<b>Hold off a few minutes</b> <div class="ui divider"></div> GitHub rate limit exceeded for anonymous search.');
        },
        onResponse: function(githubResponse) {
          var
            response = {
              results : {}
            }
          ;
          if(githubResponse.items.length === 0) {
            // no results
            return response;
          }
          $.each(githubResponse.items, function(index, item) {
            var
              language  = item.language || 'Unknown',
              maxLength = 200,
              description
            ;
            if(index >= 8) {
              // only show 8 results
              return false;
            }
            // Create new language category
            if(response.results[language] === undefined) {
              response.results[language] = {
                name    : language,
                results : []
              };
            }
            description = (item.description < maxLength)
                ? item.description
                : item.description.substr(0, maxLength) + '...'
            ;
            description = $.fn.search.settings.templates.escape(description);
            // Add result to category
            response.results[language].results.push({
              title       : item.name,
              description : description,
              url         : item.html_url
            });
          });
          return response;
        },
        url: '//api.github.com/search/repositories?q={query}'
      }
    })
  ;

  // visiblity
  $('.visibility.example .overlay')
    .visibility({
      type   : 'fixed',
      offset : 15 // give some space from top of screen
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