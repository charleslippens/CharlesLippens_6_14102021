"use strict";

import Gallerie from "../FactoryMethod/Galerie.js";

export default class TriMenu {
	// Evenements, ouverterture/fermeture du menu de tri
	Tri(data) {
		let arrowOpen = document.getElementsByClassName("tri-btn");
		let arrowClose = document.getElementsByClassName("arrow-up-close");
		let hiddenTri = document.getElementsByClassName("hidden-tri");

		if (arrowOpen) {
			arrowOpen[0].addEventListener("click", () => {
				hiddenTri[0].style.display = "block";
			});
			this.TriMedias(data);
		}
		if (arrowClose) {
			arrowClose[0].addEventListener("click", () => {
				hiddenTri[0].style.display = "none";
			});
		}
	}

	// Trier les medias (par popularité et par titre)
	TriMedias(data) {
		let mediaTabTri = [];
		let media = data.media;
		let btnTri = document.querySelector(".tri-btn");
		let hiddenTri = document.getElementsByClassName("hidden-tri");
		// permet de créer une nouvelle instance d'arrayà partir d'un tab
		let TriBtn = Array.from(document.getElementsByClassName("tri"));

		TriBtn.forEach((btn, index) =>
			btn.addEventListener("click", () => {
				hiddenTri[0].style.display = "none";
				if (index == 0) {
					btnTri.innerHTML = `Popularité`;
					mediaTabTri = media.sort((a, b) => {
						// Trier par popularité dans l'ordre descandant
						return b.likes - a.likes;
					});
				} else if (index == 1) {
					btnTri.innerHTML = `Titre`;
					mediaTabTri = media.sort((a, b) => {
						// Trier par titre, retourne la chaîne de caractères courante en minuscules
						if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
							return -1;
						} else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
							return 1;
						}
					});
				}
				this.AffichTriMedia(mediaTabTri);
			})
		);
	}

	AffichTriMedia(mediaTabTri) {
		// Afficher les travaux (photos,) des photographes avec le tri
		document.getElementById("ph-works").innerHTML = "";
		new Gallerie().builder(mediaTabTri);
	}
}
