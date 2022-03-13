//document.getElementById("valider").addEventListener("click", checkPseudo);

var form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  var check1 = checkPseudo();
  var check2 = checkMdpSecurity();
  if (check1 == true && check2 == true) {
    console.log("nice");
  } else {
    e.preventDefault();
  }
});

function checkPseudo() {
  // on supprime les messages d'erreurs déjà existant
  var messageErreurs = document.querySelectorAll(".errorPseudo");
  messageErreurs.forEach((message) => {
    message.remove();
  });
  var pseudo = document.getElementById("Pseudo").value;
  var noeudPseudo = document.getElementById("Pseudo");
  if (pseudo.length < 2 || pseudo.length > 25) {
    var pseudoError = document.createElement("p"); // on créer un paragraphe
    pseudoError.classList.add("errorPseudo");
    pseudoError.innerHTML = "Le pseudo doit avoir entre 2 et 25 caractères"; // on lui ajoute du texte
    document.getElementById("Pseudo").style.color = "red"; // on colorie le pseudo saisit en rouge
    noeudPseudo.parentNode.insertBefore(pseudoError, noeudPseudo.nextSibling); // on insert le message d'erreur
    pseudoError.style.color = "red";
    return false;
  } else {
    noeudPseudo.style.color = "black";
    return true;
  }
}

function checkMdpSecurity() {
  var securite = 0;
  var messageErreurs = document.querySelectorAll(".mdpInfo");
  messageErreurs.forEach((message) => {
    message.remove();
  });
  var erreurMdp = "le mot de passe doit contenir :";
  var mdp = document.getElementById("mdp").value;
  var noeudMdp = document.getElementById("mdp");
  var securiteInfo = document.createElement("p");
  var caracMaquant = document.createElement("p");
  securiteInfo.style.color = "red";
  caracMaquant.style.color = "red";
  caracMaquant.classList.add("mdpInfo");
  securiteInfo.classList.add("mdpInfo");
  if (mdp.length >= 8) {
    securite += 20;
    securiteInfo.innerHTML = securite + "%";
    noeudMdp.parentNode.insertBefore(securiteInfo, noeudMdp.nextSibling);
    console.log(securiteInfo);
  } else {
    erreurMdp += " au moins 8 caractères";
    caracMaquant.innerHTML = erreurMdp;
  }
  if (/[a-z]/.test(mdp)) {
    // si le mdp contient une lettre en minuscul
    securite += 20;
    securiteInfo.innerHTML = securite + "%";
    noeudMdp.parentNode.insertBefore(securiteInfo, noeudMdp.nextSibling);
  } else {
    erreurMdp += " une lettre en minuscul";
    caracMaquant.innerHTML = erreurMdp;
  }
  if (/[A-Z]/.test(mdp)) {
    // si le mdp contient une lettre en majuscul
    securite += 20;
    securiteInfo.innerHTML = securite + "%";
    noeudMdp.parentNode.insertBefore(securiteInfo, noeudMdp.nextSibling);
  } else {
    erreurMdp += " une lettre en majuscul";
    caracMaquant.innerHTML = erreurMdp;
  }
  if (/\d/.test(mdp)) {
    // si le mdp contient un chiffre
    securite += 20;
    securiteInfo.innerHTML = securite + "%";
    noeudMdp.parentNode.insertBefore(securiteInfo, noeudMdp.nextSibling);
  } else {
    erreurMdp += " un chiffre";
    caracMaquant.innerHTML = erreurMdp;
  }
  if (/[-+!*$@%]/.test(mdp)) {
    // si le mdp contient un caractère spécial
    securite += 20;
    securiteInfo.innerHTML = securite + "%";
    noeudMdp.parentNode.insertBefore(securiteInfo, noeudMdp.nextSibling);
  } else {
    erreurMdp += " un caractère spécial (-+!*$@%)";
    caracMaquant.innerHTML = erreurMdp;
  }
  if (securite == 100) {
    return true;
  } else {
    noeudMdp.parentNode.insertBefore(caracMaquant, noeudMdp.nextSibling);
    return false;
  }
}

let input = document.getElementById("mdp");

// Add an event listener to monitor changes
input.addEventListener("keyup", function (e) {
  checkMdpSecurity();
});
