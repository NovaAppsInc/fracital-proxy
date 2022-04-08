let framedoc = frame.contentDocument;

window.onload = function() {
  framedoc.body.innerHTML = framedoc.body.innerHTML + '<link rel="stylesheet" href="./styles/scrollbars.css">';
}