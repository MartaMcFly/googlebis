// let central= document.querySelector('section');

// central.onclick = function() {
//     let maSrc = central.getAttribute('src');
//     if(maSrc === 'images/firefox-icon.png') {
//       monImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       monImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }

// function visibility() {
//     document.getElementById("central").style.visibility = "visible";
// } 


 bouton_intro.onclick = function() {
	document.getElementById("bouton_intro").style.visibility = "hidden";
	document.getElementById("central").style.visibility = "visible";
}

function getURL () {
let saisie = document.querySelector('#input').value;
let url = "https://www.google.fr/#q=" + saisie;
open(url);
}

setTimeout(function () {
	alert ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please!");
}, 10000);

// function recherche() {
//   let recherche = bar
//   localStorage.setItem('https://www.google.fr/#q=' + recherche);
//   monTitre.textContent = 'Mozilla est cool, ' + monNom;
// }

// bouton1.onclick = function(recherche) {
// 	document.getElementByClass("").
// }

// var recherche = document.getElementById("bar").value;
// var lien = "https://www.google.fr/#q=",recherche;

// document.querySelector(".bouton1"); 

// lien.onclick = fonction() {
// 	window.location.replace("https://www.google.fr/#q=" + '#input')
// }


// bouton1.onclick = function() {
// 	document.createElement("https://www.google.fr/#q=");
// }

// bar.onclick = function() {
// 	document.getElementById("bar").window.location.replace("https://www.google.fr/#q=" + recherche);
