$(document).ready(function () {
  const amenitieCheckBox = $('DIV.amenities DIV.popover ul li input');
  amenitieCheckBox.css('margin-right', '10px');
  const datos = {};
  $('input[type=checkbox]').on('click', function () {
    if ($(this).prop('checked') === true) {
      datos[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete datos[$(this).attr('data-name')];
    }
    $('DIV.amenities h4').text(Object.keys(datos).join(', '));
  });

  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    console.log(data.status);
    if (data.status === 'OK') {
      console.log('prendido');
      $('DIV#api_status').toggleClass('available');
    } else {
      $('DIV#api_status').toggleClass('unavailable');
    }
  });
});
