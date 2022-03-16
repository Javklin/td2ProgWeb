//document.getElementById("valider").addEventListener("click", checkPseudo);

var form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  var check1 = checkPseudo();
  var check2 = checkMdpSecurity();
  var check3 = checkMdpAreSame();
  var check4 = checkAge();
  var check5 = checkIdentifiant();
  var check6 = checkMail();
  var check7 = checkCGU();
  if (
    check1 == true &&
    check2 == true &&
    check3 == true &&
    check4 == true &&
    check5 == true &&
    check6 == true &&
    check7 == true
  ) {
    alert("le formulaire a bien été envoyé");
  } else {
    e.preventDefault(); // on empèche le formulaire d'être envoyé
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
// on effectue la vérification du mot de passe quand l'utilisateur sasit du texte sur l'input mdp
var input = document.getElementById("mdp");

// Add an event listener to monitor changes
input.addEventListener("keyup", function (e) {
  checkMdpSecurity();
});

function checkMdpAreSame() {
  var messageErreurs = document.querySelectorAll(".mdpIdentique");
  var messageMdpIdentique = document.createElement("p");
  messageMdpIdentique.classList.add("mdpIdentique");
  messageMdpIdentique.style.color = "red";
  messageErreurs.forEach((message) => {
    message.remove();
  });
  var mdp1 = document.getElementById("mdp").value;
  var mdp2 = document.getElementById("mdpConfirmed").value;
  var noeudmdp2 = document.getElementById("mdpConfirmed");
  if (mdp1 == mdp2) {
    return true;
  } else {
    messageMdpIdentique.innerHTML = "vos 2 mot de passe ne correspondent pas";
    noeudmdp2.parentNode.insertBefore(
      messageMdpIdentique,
      noeudmdp2.nextElementSibling
    );
    return false;
  }
}

function checkAge() {
  var messageErreurs = document.querySelectorAll(".errorAge");
  var messageAge = document.createElement("p");
  messageAge.classList.add("errorAge");
  messageAge.style.color = "red";
  messageErreurs.forEach((message) => {
    message.remove();
  });
  var age = document.getElementById("Age").value;
  var noeudAge = document.getElementById("Age");
  if (age >= 18) {
    document.getElementById("Age").style.color = "black";
    return true;
  } else {
    messageAge.innerHTML = "vous devez être majeur";
    noeudAge.parentNode.insertBefore(messageAge, noeudAge.nextElementSibling);
    document.getElementById("Age").style.color = "red";
    return false;
  }
}

function checkIdentifiant() {
  var messageErreurs = document.querySelectorAll(".errorId");
  var messageId = document.createElement("p");
  messageId.classList.add("errorId");
  messageId.style.color = "red";
  messageErreurs.forEach((message) => {
    message.remove();
  });
  var id = document.getElementById("Identifiant").value;
  var noeudId = document.getElementById("Identifiant");
  if (/^[a-zA-Z]+$/.test(id)) {
    document.getElementById("Identifiant").style.color = "black";
    return true;
  } else {
    messageId.innerHTML = "votre id ne doit contenir que des lettres";
    noeudId.parentNode.insertBefore(messageId, noeudId.nextElementSibling);
    document.getElementById("Identifiant").style.color = "red";
    return false;
  }
}

function checkMail() {
  var messageErreurs = document.querySelectorAll(".errorMail");
  var messageMail = document.createElement("p");
  messageMail.classList.add("errorMail");
  messageMail.style.color = "red";
  messageErreurs.forEach((message) => {
    message.remove();
  });
  var mail = document.getElementById("E-mail").value;
  var noeudMail = document.getElementById("E-mail");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    messageMail.innerHTML = "votre mail n'est pas valide";
    noeudMail.parentNode.insertBefore(
      messageMail,
      noeudMail.nextElementSibling
    );
    return false;
  }
}

function checkCGU() {
  var messageErreurs = document.querySelectorAll(".errorCGU");
  var messageCGU = document.createElement("p");
  messageCGU.classList.add("errorCGU");
  messageCGU.style.color = "red";
  messageErreurs.forEach((message) => {
    message.remove();
  });
  var noeudCGU = document.getElementById("consent");
  if (document.getElementById("consent").checked) {
    return true;
  } else {
    messageCGU.innerHTML = "vous devez accepter les conditions d'utilisation";
    noeudCGU.parentNode.insertBefore(messageCGU, noeudCGU.nextElementSibling);
    return false;
  }
}
