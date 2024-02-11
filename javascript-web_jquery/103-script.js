#!/usr/bin/node
$(document).ready(function() {
    function fetchTranslation() {
        let languageCode = $('#language_code').val();
        let url = `https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`;
        
        $.getJSON(url, function(data) {
            let helloMessage = data.hello;
            $('#hello').text(helloMessage);
        });
    }

    $('#btn_translate').click(fetchTranslation);

    $('#language_code').keypress(function(event) {
        if (event.keyCode === 13) {
            fetchTranslation();
        }
    });
});
