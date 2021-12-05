"use strict";

//Afficher tous les photographes
// Créer la section comprenant l'ensemble des photographes sur la page d'accueil à partir
// des données JSON récupérées dans la class ApiFish

export default class HomePage {
	// Construire la section photographes

	displayPhotographers(data) {
		let photographers = data.photographers;

		photographers.map((photographe) => {
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
				<section class="tagSection">
				<ul id="tagList${photographe.id}">
				</ul>
			  </section>
            `;

			sectionPhotographers.appendChild(articlePhotographers);
			articlePhotographers.innerHTML = templatePhotographer;
			const tagList = document.getElementById(`tagList${photographe.id}`);
			photographe.tags.forEach((tagsElement) => {
				tagList.innerHTML += `<li id="tags"><a class="navFilter tagsLinkElement" href="#">#${tagsElement}</a></li>`;
			});
		});
	}
}
