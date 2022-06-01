function primagen() {
    var rgb = new Array(0, 0, 0);
    for (var i = 0; i < 3; i++) rgb[i] = Math.trunc(Math.random() * 256);
    return rgb;
}

function rgbString(arr) {
    var res = "#";
    for (var i = 0; i < 3; i++) {
        var s = arr[i].toString(16);
        if (s.length < 2) s = "0" + s;
        res = res + s;
    }
    return res;
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
