const url = "api/photographers.json";

import Tagging from "./Tags.js";
import ApiFish from "../fetch/API.js";

// Fonction filters venant fetch les données et remplir les articles filtrés par tags
export function filters(filter) {
	new ApiFish().getDataFish().then((data) => {
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
		  <section class="tagSection">
		  <ul id="tagList${photographe.id}">
		  </ul>
		</section>        `;
				sectionPhotographers.appendChild(articlePhotographers);
				articlePhotographers.innerHTML = templatePhotographer;
				const tagList = document.getElementById(`tagList${photographe.id}`);
				photographe.tags.forEach((tagsElement) => {
					tagList.innerHTML += `<li id="Tagging"><a class="navFilter tagsLinkElement" href="#">#${tagsElement}</a></li>`;
				});
			}
		});
		new Tagging().tags();
	});
}
