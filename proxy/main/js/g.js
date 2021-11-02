// class xor {
//     static encode(str) {
//         return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
//     };
//     static decode(str) {
//         return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
//     };
// };

// function go(link) {
//   console.log(link);
//   if (link == '') {
//     alert('Bruh you need to insert a url!');
//   } else if (!link.includes("http://")) {
//         link = "http://" + link;
//     };
//     document.getElementById("frame").src="/kb/"+xor.encode(link);
// };

// document.cookie="olds=sus";

// // Game External buttons //
// const dls = document.getElementById("dls");
// const mcmr = document.getElementById("mcmr");
// const slith = document.getElementById("slith");
// const strv = document.getElementById("starve");
// const zomb = document.getElementById("zomb");
// // End //

// // Game External functions //
// dls.addEventListener("click", (e) => {
//   go("https://mathplayground.com/duck5/index.html");
// });

// mcmr.addEventListener("click", (e) => {
//   go("https://www.madalingames.com/madalingames/wp-content/uploads/games/webgl/M/MCM-files/01/002/mcm-webgl/index.html");
// });

// slith.addEventListener("click", (e) => {
//   go("slither.io");
// });

// strv.addEventListener("click", (e) => {
//   go("starve.io");
// });

// zomb.addEventListener("click", (e) => {
//   go("zombsroyale.io");
// })
// // End //