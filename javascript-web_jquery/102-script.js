#!/usr/bin/node
$(document).ready(function() {
    $('#btn_translate').click(function() {
        let languageCode = $('#language_code').val();
        let url = `https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`;
        
        $.getJSON(url, function(data) {
            let helloMessage = data.hello;
            $('#hello').text(helloMessage);
        });
    });
});
