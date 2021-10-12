class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

function go(link) {
  if (link == '') {
    alert('insert a url bruhv');
  } else if (!link.includes("http://")) {
        link = "http://" + link;
    };
    document.getElementById("frame").src="/kb/"+xor.encode(link);
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
  document.querySelector('#urlbar').addEventListener('keyup', event => {
      if (event.key !== 'Enter') return;
      go(document.getElementById('urlbar').value)
    });
document.cookie="olds=sus";
