function openTab (evt, type) {
    var i, tabcontent, tablinks;

//Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i=0; i < tabcontent.length; i++) {
    tabcontent[i].getElementsByClassName.display = "none";
}
//Show current tab and add active class to button
document.getElementById(type).style.display = "block";
evt.currentTarget.className += " active";
}

var fields = {};
document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.msg = document.getElementById('msg');
}

function notEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;

    return (value.length > 0);
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}