class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

function go(link) {
  var domainends = [".com", ".net", ".org", ".pw", ".com.uk", ".dev",".io",".us",".gay"];
  console.log(link);
  if (link == '') {
    alert('Bruh you need to insert a url!');
  } else if (!link.includes("http://")) {
        link = "http://" + link;
  } else if(!sp.includes(domainends)) {
    alert("nah bruh, stop that shit!")    
    // document.getElementById("frame").src="/kb/"+xor.encode("https://google.com/?q=" + link);
    };
    document.getElementById("frame").src="/kb/"+xor.encode(link);
};
let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type == "attributes") {
        console.log("attribute");
        document.getElementById("urlbar").src=xor.decode(document.getElementById("frame").contentWindow.location.href.split('/kb/')[1]);
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
function reloadh() {
  document.getElementById("frame").setAttribute('src', 'home.html');
}