function primagen() {
    var rgb = new Array(0, 0, 0);
    for (var i = 0; i < 3; i++) rgb[i] = Math.trunc(Math.random() * 256);
    return rgb;
}

function pad(s) {
    while (s.length() < 6) s = "0" + s;
}

function rgbString(arr) {
    var res = 256 * arr[0] + 16 * arr[1] + arr[2];
    return "#" + pad(res.toString(16));
}

function protogen() {
    return rgbString(primagen());
}

function inv(arr) {
    return new Array(255 - arr[0], 255 - arr[1], 255 - arr[2]);
}

function setbg(color) {
    document.body.style.background = color;
}
