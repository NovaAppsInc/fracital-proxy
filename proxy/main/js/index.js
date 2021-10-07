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
        link = "http://" + location.host + "/kb/" + link;
    };
    document.getElementById("frame").src=xor.encode(location.host + "/kb/" + link);
};
let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type == "attributes") {
        document.getElementById("frame").src=xor.decode(document.getElementById(id).contentWindow.location.href.split('/fetch/')[1]);
        console.log("cum");
      };
    });
  });
  observer.observe(document.getElementById("frame"), {
    attributes: true
  });
