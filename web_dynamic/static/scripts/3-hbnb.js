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
    if (data.status === 'OK') {
      $('DIV#api_status').toggleClass('available');
    } else {
      $('DIV#api_status').toggleClass('unavailable');
    }
  });

  url = 'http://0.0.0.0:5001/api/v1/places_search/';
  $.ajax({
    type:"POST",
    url: url,
    data: JSON.stringify({}),
    success: function (data) {
      console.log(data)
      data.forEach(place => {
        let guests = place.max_guest === 1 ? 'Guest' : 'Guests';
        let bedrooms = place.number_rooms === 1 ? 'Bedroom' : 'Bedrooms';
        let bathrooms = place.number_bathrooms === 1 ? 'Bathroom': 'Bathrooms';
        let tittle_box = '<div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + '$' +place.price_by_night+'</div></div>';
        let information = '<div class="information"><div class="max_guest">'+
        place.max_guest + ' ' + guests + '</div><div class="number_rooms">'
        + place.number_rooms + ' ' + bedrooms + '</div><div class="number_bathrooms">' +
        place.number_bathrooms + ' ' + bathrooms + '</div></div>';
        let description = '<div class="description">' + place.description + '</div>';
        let content = tittle_box + information + description;
        $('SECTION.places').append('<article>' + content + '</article>');

      });
    },
    contentType: 'application/json; charset=utf-8'
  });
});
