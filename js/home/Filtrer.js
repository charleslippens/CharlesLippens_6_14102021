const url = "api/photographers.json";

import { tags } from "./tags.js";

// Fonction filters venant fetch les données et remplir les articles filtrés par tags
export const filters = async function filters(filter) {
	const response = await fetch(url);
	const data = await response.json().catch((error) => {
		console.log(error);
	});
	container.innerHTML = " ";
	// Boucle sur chaque photographe filtré afin de lui créer son propre article
	data.photographers.forEach((photographe) => {
		if (photographe.tags.includes(filter)) {
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
		}
	});
	tags();
};
