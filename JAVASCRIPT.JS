function primagen() {
    var rgb = new Array(0, 0, 0);
    for (var i = 0; i < 3; i++) rgb[i] = Math.trunc(Math.random() * 256);
    return rgb;
}

function pad(s) {
    while (s.length < 2) s = "0" + s;
    return s;
}

function rgbString(arr) {
    return "#" + pad(arr[0].toString(16)) + pad(arr[1].toString(16)) + pad(arr[2].toString(16));
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

// http://notasmr.epizy.com/common/misc/isexample/colors.htm
