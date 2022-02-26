function incrementValue(id) {
    event.preventDefault();
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).value = value;
}

function decrementValue(id) {
    event.preventDefault();
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById(id).value = value;
}

