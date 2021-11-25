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
			let articles = document.querySelectorAll(".articlePh");
			const nodeFilter = document.querySelectorAll(".navFilter");
			nodeFilter.forEach((filter) => {
				filter.addEventListener("click", (e) => {
					e.preventDefault();
					filterName = filter.innerHTML.replace("#", "");
					//	let classValue = e.target.classList.value;
					//	if (-1 === classValue.indexOf("actived")) {
					//		e.target.classList.add("actived");
					//	} else {
					//		e.target.classList.remove("actived");
					//	}
					//				this.sortDomArticle(articles);
					filters(filterName);
					//	console.log(filterName);
				});
			});
		});
	}
	// En cours de finalisation : multi tags avec activited
	// retourne les filtres avec la classe "actived" et les place dans un tableau "filterSelected"
	//getActiveFilters() {
	//	let currentFilters = document.querySelectorAll("ul li.actived");
	//	let filterSelected = [];

	//	currentFilters.forEach(function (currentFilter) {
	//		filterSelected.push(currentFilter.getAttribute("data-filter"));
	//	});

	//	return filterSelected;
	//}
	// compare/vérifié si "filters" a la meme valeur que la classe "article"
	//ownAllFilters(article) {
	//	let filters = this.getActiveFilters();
	//	let classValue = article.classList.value;
	//	let classes = classValue.split(" ");
	//	let intersection = filters.filter((x) => classes.includes(x));

	//	return filters.length == intersection.length;
	//}

	//montrer ou cacher les articles
	//sortDomArticle(articles) {
	//	articles.forEach((article) => {
	//		if (this.ownAllFilters(article)) {
	//			article.style.display = "block";
	//		} else {
	//			article.style.display = "none";
	//		}
	//	});
	//}
}
