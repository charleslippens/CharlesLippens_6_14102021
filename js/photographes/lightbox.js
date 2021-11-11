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
		this.close();
		return this;
	}

	// fermeture de la modale lightbox
	close() {
		document.querySelector(".close-lightbox-icon").addEventListener("click", () => {
			let lightbox = document.getElementById("lightbox");

			lightbox.style.display = "none";
		});
	}
}
