"use strict";

import GalleryFactory from "../FactoryMethod/GalleryFactory.js";

export default class SortMenu {
	// Evenements, ouverterture/fermeture du menu de tri
	sort(data) {
		let arrowOpen = document.getElementsByClassName("tri-btn");
		let arrowClose = document.getElementsByClassName("arrow-up-close");
		let hiddenSort = document.getElementsByClassName("hidden-tri");

		if (arrowOpen) {
			arrowOpen[0].addEventListener("click", () => {
				hiddenSort[0].style.display = "block";
			});
			this.SortMedias(data);
		}
		if (arrowClose) {
			arrowClose[0].addEventListener("click", () => {
				hiddenSort[0].style.display = "none";
			});
		}
	}

	// Trier les medias (par popularité et par titre)
	SortMedias(data) {
		let mediaTabSort = [];
		let media = data.media;
		let btnSort = document.querySelector(".tri-btn");
		let hiddenSort = document.getElementsByClassName("hidden-tri");
		// permet de créer une nouvelle instance d'arrayà partir d'un tab
		let SortBtn = Array.from(document.getElementsByClassName("tri"));

		SortBtn.forEach((btn, index) =>
			btn.addEventListener("click", () => {
				hiddenSort[0].style.display = "none";
				if (index == 0) {
					btnSort.innerHTML = `Popularité`;
					mediaTabSort = media.sort((a, b) => {
						// Trier par popularité dans l'ordre descandant
						return b.likes - a.likes;
					});
				} else if (index == 1) {
					btnSort.innerHTML = `Titre`;
					mediaTabSort = media.sort((a, b) => {
						// Trier par titre, retourne la chaîne de caractères courante en minuscules
						if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
							return -1;
						} else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
							return 1;
						}
					});
				}
				this.AffichSortMedia(mediaTabSort);
			})
		);
	}

	AffichSortMedia(mediaTabSort) {
		// Afficher les travaux (photos,) des photographes avec le tri
		document.getElementById("photo-works").innerHTML = "";
		new GalleryFactory().builder(mediaTabSort);
	}
}
