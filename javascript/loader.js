semantic.loader = {};

// ready event
semantic.loader.ready = function() {

  // selector cache
  var
    $examples           = $('.example'),
    $contentExample     = $examples.filter('.content'),
    $contentCards       = $contentExample.find('.ui.cards'),
    $contentLoadingCard = $contentExample.find('.cards .card'),
    $contentFinalCard   = $contentExample.find('.ignored.card'),
    // alias
    handler
  ;

  // event handlers
  handler = {

  };

  $contentExample
    .find('.ui.button')
      .on('click', function() {
        var $button = $(this);
        var loadingHTML = $contentLoadingCard.get(0).outerHTML;
        var finalHTML = $contentFinalCard.get(0).outerHTML;

        if($button.hasClass('loading')) {
          return;
        }
        $button.addClass('loading');

        var names = ['lena', 'patrick', 'molly', 'kristy', 'mark', 'cassie', 'eve', 'lindsay', 'rachel', 'matthew', 'elyse'];


        var randomName = function() {
          var randomIndex = Math.floor(Math.random()*names.length);
          var name = names[randomIndex];
          names.splice(randomIndex, 1);
          return name;
        };

        $contentCards
          .empty()
          .append(loadingHTML)
          .append(loadingHTML)
          .append(loadingHTML)
        ;
        setTimeout(function() {
          var name = randomName();
          var $final = $(finalHTML)
            .removeClass('ignored')
            .find('.header').text(name[0].toUpperCase() + name.substr(1)).end()
            .find('img').attr('src', '/images/avatar2/large/' + name + '.png').end()
          ;
          $contentCards
            .children().eq(0)
            .replaceWith($final)
          ;
          $final.transition('fade in');
        }, 500);
        setTimeout(function() {
          var name = randomName();
          var $final = $(finalHTML)
            .removeClass('ignored')
            .find('.header').text(name[0].toUpperCase() + name.substr(1)).end()
            .find('img').attr('src', '/images/avatar2/large/' + name + '.png').end()
          ;
          $contentCards
            .children().eq(1)
            .replaceWith($final)
          ;
          $final.transition('fade in');
        }, 800);
        setTimeout(function() {
          var name = randomName();
          var $final = $(finalHTML)
            .removeClass('ignored')
            .find('.header').text(name[0].toUpperCase() + name.substr(1)).end()
            .find('img').attr('src', '/images/avatar2/large/' + name + '.png').end()
          ;
          $contentCards
            .children().eq(2)
            .replaceWith($final)
          ;
          $final.transition('fade in');
          $button.removeClass('loading');
        }, 1200);
      })
  ;
};


// attach ready event
$(document)
  .ready(semantic.loader.ready)
;
