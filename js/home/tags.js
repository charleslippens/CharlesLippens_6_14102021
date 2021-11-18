const url = "api/photographers.json";

import { filters } from "./Filtrer.js";
import ApiFish from "../fetch/API.js";

// Fonction Tags venant fetch les données pour afficher la liste de filtres de navigation
export default class Tagging {
	tags() {
		new ApiFish().getDataFish().then((data) => {
			// Boucle sur chaque photographe puis sur chaque tags afin de les stocker dans un tabeau array
			const containerTags = document.getElementById("containerTags");
			const tagsList = [];
			data.photographers.forEach((photograph) => {
				photograph.tags.forEach((tagsElement) => {
					tagsList.push(tagsElement);
				});
			});
			// Suppression des tags en doublons et intégration HTML de chaque tags trouvé
			const uniqueArrayTags = [...new Set(tagsList)];
			containerTags.innerHTML = "";
			uniqueArrayTags.forEach((tags) => {
				containerTags.innerHTML += `
      <li><a class="navFilter tagsLinkElement" alt="tag" href="#">#${tags}</a></li>
      `;
			});
			// Ajout du listener avec appel à la fonction filters(filter)
			let filterName = "";
			const nodeFilter = document.querySelectorAll(".navFilter");
			nodeFilter.forEach((filter) => {
				filter.addEventListener("click", (e) => {
					e.preventDefault();
					filterName = filter.innerHTML.replace("#", "");

					filters(filterName);

					//	console.log(filterName);
				});
			});
		});
	}
}
