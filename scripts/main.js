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

// function getURL () {
// let saisie = document.querySelector('#input').value;
// let url = "https://www.google.fr/#q=" + saisie;
// open(url);
// }


// version corrigé par Bab saisie.replace %20 par des espace dans l'URL
function getURL() {
 let saisie = document.querySelector('#input').value;
 let texteFinal = saisie.replace(/ /g, '+');
 let url= "https://www.google.fr/#q=" + texteFinal;
open(url);
}



setTimeout(function () {
	alert ("Fun fact: There's a rotated version of Google known as 'Google Mirror', which shows everything in a mirrored avatar. why not use this Google page to Google it 👨🏾‍💻");
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
