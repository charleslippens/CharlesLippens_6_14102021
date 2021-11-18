"use strict";

export default class LightBox {
	constructor() {
		this.Index = 0;
	}
	// initilisation de la lightbox quand on clique sur un media
	init(Media, MediaName) {
		// crée une nouvelle instance d'array à partir d'un objet tab
		let Medias = Array.from(document.getElementsByClassName("ph-media"));
		Medias.forEach((mediaWorks, index) =>
			mediaWorks.addEventListener("click", () => {
				let lightBoxM = document.getElementById("lightbox-media");
				let lightBoxN = document.getElementById("lightbox-name");
				let src = Media[index];
				let nameSrc = MediaName[index];
				this.Index = index;

				document.getElementById("lightbox").style.display = "block";
				lightBoxM.innerHTML = `${src}`;
				lightBoxN.innerHTML = `${nameSrc}`;
			})
		);
		this.previous(document.querySelector(".left-arrow-lightbox"), Media, MediaName);
		this.next(document.querySelector(".right-arrow-lightbox"), Media, MediaName);
		this.close();
		this.keyboard(Media, MediaName);
		return this;
	}

	// fermeture de la modale lightbox
	close() {
		document.querySelector(".close-lightbox-icon").addEventListener("click", () => {
			let lightbox = document.getElementById("lightbox");

			lightbox.style.display = "none";
		});
	}

	// retourner au media précedent
	previous(elt, media, name) {
		elt.addEventListener("click", () => {
			this.Index -= 1;
			let lightBoxM = document.getElementById("lightbox-media");
			let lightBoxN = document.getElementById("lightbox-name");

			if (this.Index < 0) {
				this.Index = media.length - 1;
				this.Index = name.length - 1;
			}

			let src = media[this.Index];
			let nameSrc = name[this.Index];

			lightBoxM.innerHTML = `${src}`;
			lightBoxN.innerHTML = `${nameSrc}`;
		});
	}

	// aller au média suivant
	next(elt, media, name) {
		elt.addEventListener("click", () => {
			this.Index += 1;
			let lightBoxM = document.getElementById("lightbox-media");
			let lightBoxN = document.getElementById("lightbox-name");

			if (this.Index > name.length - 1) {
				this.Index = 0;
			}

			let src = media[this.Index];
			let nameSrc = name[this.Index];

			lightBoxM.innerHTML = `${src}`;
			lightBoxN.innerHTML = `${nameSrc}`;
		});
	}

	keyboard(currentMedia, currentMediaName) {
		document.addEventListener("keydown", (key) => {
			let lightBoxM = document.getElementById("lightbox-media");
			let lightBoxN = document.getElementById("lightbox-name");

			// ECHAP pour fermer
			if (key.code == "Escape") {
				let lightBox = document.getElementById("lightbox");
				lightBox.style.display = "none";
			}

			// Fleche droit pour aller à droite
			else if (key.code == "ArrowRight") {
				this.Index += 1;

				if (this.Index > currentMediaName.length - 1) {
					this.Index = 0;
				}

				let src = currentMedia[this.Index];
				let nameSrc = currentMediaName[this.Index];

				lightBoxM.innerHTML = `${src}`;
				lightBoxN.innerHTML = `${nameSrc}`;
			}

			// Fleche gauche pour aller à gauche
			else if (key.code == "ArrowLeft") {
				this.Index -= 1;

				if (this.Index < 0) {
					this.Index = currentMedia.length - 1;
					this.Index = currentMediaName.length - 1;
				}

				let src = currentMedia[this.Index];
				let nameSrc = currentMediaName[this.Index];

				lightBoxM.innerHTML = `${src}`;
				lightBoxN.innerHTML = `${nameSrc}`;
			}
		});
	}
}
