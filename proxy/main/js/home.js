const frame = document.getElementById("frame"); 

function clig1() {
    window.open("./g.html", "_self");
}

function bug() {
    window.open("https://github.com/NovaAppsInc/fractrial-proxy/issues", "_self");
}

function reloadh() {
    frame.setAttribute('src', 'home.html');
}

const isMobile = navigator.userAgentData.mobile;

if(isMobile) {
    frame.setAttribute("src", "what.html")
}