semantic.dropdown = {};

// ready event
semantic.dropdown.ready = function() {

  // sinon
  var
    headers = {
      'Content-Type': 'text/html'
    },
    method       = 'GET',
    responseCode = 200,
    body         = {
      first  : '<h3 class="ui header">AJAX Tab One</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">',
      second : '<h3 class="ui header">AJAX Tab Two</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">',
      third  : '<h3 class="ui header">AJAX Tab Three</h3><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png"><img class="ui wireframe image" src="/images/wireframe/paragraph.png">'
    },
    server = sinon.fakeServer.create()
  ;

  server.autoRespond = true;
  server.autoRespondAfter = 600;

  server
    .respondWith(/\/first(.*)/, [responseCode, headers, body.first])
  ;
  server
    .respondWith(/\/second(.*)/, [responseCode, headers, body.second])
  ;
  server
    .respondWith(/\/third(.*)/, [responseCode, headers, body.third])
  ;

  $('.first.example .menu .item')
    .tab({
      context: '.first.example'
    })
  ;

  $('.history.example .menu .item')
    .tab({
      context : '.history.example',
      history : true,
      path    : '/modules/tab.html'
    })
  ;

  $('.dynamic.example .menu .item')
    .tab({
      context : '.dynamic.example',
      auto    : true,
      histor  : false,
      path    : '/'
    })
  ;

};


// attach ready event
$(document)
  .ready(semantic.dropdown.ready)
;