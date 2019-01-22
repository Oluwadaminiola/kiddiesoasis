function sendMail() {
    var link = "mailto:pelumioni32@gmail.com"
             + "?cc=" + escape(document.getElementById('email').value)
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('message').value)
    ;

    window.location.href = link;
}