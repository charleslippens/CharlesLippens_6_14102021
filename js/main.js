"use strict";

// Données
import ApiFish from "./fetch/ApiFish.js";

// Page d'acceuil
import HomePage from "./home/Home.js";
import PhotographerProfil from "./photographes/photographe.js";

(function Dispatcher() {
	new ApiFish()
		.getDataFish()
		.then((data) => {
			if (window.location.pathname.includes("/photographers.html")) {
				new PhotographerProfil().displayPhotographerProfil(data);
				return;
			}
			// Page d'accueil (photos)

			new HomePage().displayPhotographers(data);
		})
		.catch(() => {
			console.error("N'a pas pu charger l'api");
		});
})();
