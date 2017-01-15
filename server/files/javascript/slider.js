semantic.slider = {};

semantic.slider.ready = function() {
  var
    $slider       = $('.definition .ui.slider').not('.double'),
    $double       = $('.definition .ui.double.slider'),
    valueDisplay  = '.value-display'
  ;

  $slider.slider({
    min: 0,
    max: 10,
    start: 5,
    step: 1,
  });

  function updateDisplay(value, firstVal, secVal) {
    var
      $self = $(this),
      $display = $self.parent().find(valueDisplay)
    ;
    $display.html('Values: |' + firstVal + " - " + secVal + '| = ' + value);
  }

  $double.slider({
    min: 0,
    max: 10,
    start: 5,
    step: 1,
    onMove: updateDisplay
  })
};

$(document).ready(semantic.slider.ready);
