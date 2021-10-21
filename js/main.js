"use strict";

// Données
import ApiFish from "./fetch/ApiFish.js";

// Page d'acceuil
import HomePage from "./home/Home.js";

(function appDispatch() {
	new ApiFish()
		.getDataFish()
		.then((data) => {
			// Page d'accueil (photos, filtres)
			new HomePage().displayPhotographers(data);
		})
		.catch(() => {
			console.error("N'a pas pu charger l'api");
		});
})();
