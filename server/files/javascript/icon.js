semantic.icon = {};

// ready event
semantic.icon.ready = function() {

  // selector cache
  var
    $iconSearch = $('iconSearch.ui.search'),
    $grid       = $('.ui.five.column.doubling.grid'),
    // alias
    handler = {
      getIconList: function() {
        var
          $examples   = $('.icon .example')
          icons       = []
        ;
        $examples.each(function() {
          var
            $header  = $(this).children('.ui.header'),
            $icons   = $(this).find('.grid > .column'),
            category = $header.text()
          ;
          $icons.each(function() {
            var
              $icon = $(this).find('.icon'),
              icon  = $icon.attr('class').replace(' icon', '')
              title = '<i class="' + icon +' icon"></i> ' + icon
            ;
            if(!_.findWhere(icons, { icon: icon})) {
              icons.push({
                category : category,
                title    : title,
                icon     : icon
              });
            }
          });
        });
        return icons;
      }
    }
  ;

  if($iconSearch.length > 0) {

    $iconSearch
      .search({
        type          : 'category',
        minCharacters : 1,
        maxResults    : 10,
        source        : handler.getIconList(),
        onResults     : function(result) {
          setTimeout(function() {
            var
              $results = $('iconSearch.ui.search .result')
            ;
            $results.each(function() {
              var
                $result = $(this)
              ;
              new Clipboard(this, {
                text: function() {
                  var
                    iconHTML = $result.find('i').get(0).outerHTML
                  ;
                  return iconHTML;
                }
            });
            });
          }, 0);
        },
        onSelect: function() {
          var
            $search = $('iconSearch .input > input')
          ;
          $search.blur();
          setTimeout(function() {
            $('iconSearch input').transition('glow');
            $search.val('Copied to clipboard!');
          }, 50)
          setTimeout(function() {
            $search.val('');
          }, 1500)
          return false;
        }
      })
    ;

  }

};


// attach ready event
$(document)
  .ready(semantic.icon.ready)
;
