
/* Code du démineur*/

// fonction lors du click sur le bouton NON
function NON() {
	var bouttonOui = document.getElementById("clickOui");
	bouttonOui.remove();
	var bouttonNon = document.getElementById("clickNON");
	bouttonNon.remove();
	alert("Merci, aurevoir.");
	location.reload();
  }

// fonction qui va lancer le jeu lors du click OUI
function OUI() {
	var bouttonNon = document.getElementById("clickNON");
	bouttonNon.remove();
	var bouttonOui = document.getElementById("clickOui");
	bouttonOui.remove();
	alert("Amusez-vous bien.");
  
	initialiserGrille(); //appel la fct pour placer les bombes "#")
	chiffreGrille(); //appel la fonction pour placer les chiffres
	retireCase(); // retire les cases lors du click
	//endGame();
	flag(); //appel la fonction pour placer le drapeau (actuellement pas encore crée)
  }

//fonction qui rempli la grille  avec les bombes (#)
function initialiserGrille() {
	// Initialisation de la grille avec des zéros
	var grille = [[], [], [], [], [], [], [], [], [], []];
  
	// Remplissage aléatoire d'une case par ligne
	for (var i = 0; i < grille.length; i++) {
	  var randomCol = Math.floor(Math.random() * grille.length);
	  grille[i][randomCol] = 1;
	}
  
	// Récupération du tableau HTML et modification des cases
	var grilleHtml = document.getElementById("grille");
	for (var i = 0; i < grille.length; i++) {
	  for (var j = 0; j < grille.length; j++) {
		if (grille[i][j] === 1) {
		  grilleHtml.rows[i].cells[j].innerHTML = "#";
		}
	  }
	}
  }


  //fonction qui rempli la grille avec les chiffres(C)
function chiffreGrille() {
	// Initialisation de la grille avec des zéros
	var grille = [[], [], [], [], [], [], [], [], [], []];
  
	// Remplissage aléatoire d'une case par ligne
	for (var i = 0; i < grille.length; i++) {
	  var randomCol = Math.floor(Math.random() * grille.length);
	  grille[i][randomCol] = 1;
	}
  
	// Récupération du tableau HTML et modification des cases
	var grilleHtml = document.getElementById("grille");
	for (var i = 0; i < grille.length; i++) {
	  for (var j = 0; j < grille.length; j++) {
		if (grille[i][j] === 1) {
		  grilleHtml.rows[i].cells[j].innerHTML = "C";
		}
	  }
	}
  }


  // function pour découvrir les cases au click
 
function retireCase(){
	var cases = document.getElementsByClassName("boom");
     var grille;   
	// Ajout de l'écouteur d'événement "click" sur chaque case
	for (var i = 0; i < cases.length; i++) {
	  cases[i].addEventListener("click", function() {
		// Retire la case cliquée de la grille
		//this.parentNode.removeChild(this);
		this.classList.toggle("gris");
	  });
	}
}

//function pour placer les drapeaux
function flag(){
	var cases = document.getElementsByClassName("boom");
	var grille;   
	var compteur = 0; // initialisation du compteur
   // Ajout de l'écouteur d'événement "click" sur chaque case
   
   for (var i = 0; i < cases.length; i++) {
	 cases[i].addEventListener("contextmenu", function() {
		//empêche l'affichage 
		event.preventDefault();

		if (compteur < 10) { // Vérifier si le nombre de fois que l'utilisateur a placé le drapeau est inférieur à 10
			// Retire la case cliquée de la grille
			this.innerHTML="F";
			compteur++; // incrémente le compteur 
		}
	
		if (compteur >= 10) { // Si l'utilisateur a placé le drapeau 10 fois, désactive l'écouteur d'événement pour empêcher l'utilisateur de placer plus de drapeaux
			for (var i = 0; i < cases.length; i++) {
				cases[i].removeEventListener("contextmenu", arguments.callee);
			}
		}
	 });
   }

}




/*
function endGame(){

}*/

  











  //fonction pour placer le drapeau

 /* function flag(){}*/