"use strict";

//Afficher tous les photographes
// Créer la section comprenant l'ensemble des photographes sur la page d'accueil à partir
// des données JSON récupérées dans la class ApiFish
// Appel de la fonction filters.

export default class HomePage {
	// Construire la section photographes

	displayPhotographers(data) {
		let photographers = data.photographers;
		photographers.map((photographe) => {
			const tagPagePhotographe = window.location.search.split("-")[1]; //On sépare la chaine des paramètres en fonction de "-"
			//	console.log(tagPagePhotographe);
			if (tagPagePhotographe === undefined) {
				let sectionPhotographers = document.getElementById("container");
				let articlePhotographers = document.createElement("article");
				articlePhotographers.className = photographe.tags.join(" ") + " articlePh";
				let templatePhotographer = `
			<a href="photographes.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map((tag) => `<li>#${tag}</li>`).join(" ")}</ul> 
            `;

				sectionPhotographers.appendChild(articlePhotographers);
				articlePhotographers.innerHTML = templatePhotographer;
			} else {
				filters(tagPagePhotographe);
			}
		});
	}
}
