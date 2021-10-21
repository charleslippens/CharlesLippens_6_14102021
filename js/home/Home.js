"use strict";

//Afficher tous les photographes
export default class HomePage {
	// Construire la section photographe
	displayPhotographers(data) {
		let photographers = data.photographers;
		photographers.map((photographe) => {
			let sectionPhotographers = document.getElementById("photographers");
			let articlePhotographers = document.createElement("article");
			articlePhotographers.className = photographe.tags.join(" ") + " articlePh";
			let templatePhotographer = `
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags
				.map((tag) => `<li data-filter="${tag}">#${tag}</li>`)
				.join(" ")}</ul> 
            `;

			sectionPhotographers.appendChild(articlePhotographers);
			articlePhotographers.innerHTML = templatePhotographer;
		});
	}
}
