$(document).ready(function () {
    let amenitieCheckBox = $('DIV.amenities DIV.popover ul li input');
    amenitieCheckBox.css('margin-right', '10px');


    $('input[type=checkbox]').on('click', function () {
        if (this.prop('checked') == true){
            let amenitieName = $(this).text();
            console.log('checked prop' + amenitieName);
            $('DIV.amenities h4').text(amenitieName);
        }
    })   


})