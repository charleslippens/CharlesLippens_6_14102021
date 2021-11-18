"use strict";
import Modale from "./Modale.js";
import Form from "./Formulaire.js";
export default class PhotographerProfil {
	// Vérifie sur quel page l'utilisateur est localisé, si cela correspond avec l'id du photographe, créer la section profil du photographe
	// Appel classes modale et formulaire
	displayPhotographerProfil(data) {
		let photographersData = data.photographers;
		const id = window.location.search.split("id=")[1];
		const photographers = !id
			? photographersData
			: photographersData.filter((photographer) => photographer.id == id);
		const sectionPhotographerProfil = document.getElementById("ph-profil-header");
		const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                    <p >${photographers[0].tags
						.map((tag) => `<a class="ph-tags" href="index.html">#${tag}</a>`)
						.join(" ")}</p>
                </div>
                <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${
			photographers[0].portrait
		}" alt="${photographers[0].alt}"></a>
            </article>
            `;

		sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
		new Modale().modal(photographersData);
		new Form().fields();
	}
}
