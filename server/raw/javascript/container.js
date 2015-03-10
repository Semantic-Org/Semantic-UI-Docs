semantic.container = {};

// ready event
semantic.container.ready = function() {

  var
    $pageTabs = $('.top.tab.segment .menu .item')
  ;

  $pageTabs
    .tab({
      history   : true,
      onTabInit : function() {
        semantic.handler.makeCode();
      }
    })
  ;

};


// attach ready event
$(document)
  .ready(semantic.container.ready)
;