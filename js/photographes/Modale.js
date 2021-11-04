"use strict";

export default class Modale {
	// Evenements, lancement et fermeture modale en cliquant, sur le bouton contactez moi
	modal(data) {
		let modalBtn = document.getElementById("ph-contact");
		let closeBtn = document.getElementsByClassName("close-form-icon");

		if (modalBtn) {
			modalBtn.addEventListener("click", this.launchModal);
			this.formPhName(data);
		}
		if (closeBtn) {
			closeBtn[0].addEventListener("click", this.closeModal);
		}
	}

	// lancement de la modale
	launchModal() {
		let modalbg = document.getElementById("form-dialog");

		modalbg.style.display = "block";
	}

	// fermeture de la modale
	closeModal() {
		let modalbg = document.getElementById("form-dialog");

		modalbg.style.display = "none";
	}

	// affiche les noms des photographes dans le form
	formPhName(data) {
		let id = window.location.search.split("id=")[1];
		let photographers = !id ? data : data.filter((photographer) => photographer.id == id);
		let phName = document.getElementById("ph-form-name");
		let phNameTemp = `${photographers[0].name}`;
		phName.innerHTML = phNameTemp;
	}
}
