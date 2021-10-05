class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

function go(link) {
    if (!link.contains("http://")) {
        link = "http://" + location.host + "kb" + link;
    };
    document.getElementById("home").style.visibility = "collapse";
    document.getElementById("frame").src=xor.encode(link)
}
