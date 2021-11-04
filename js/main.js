"use strict";

// Données
import ApiFish from "./fetch/API.js";

// Page d'acceuil
import HomePage from "./home/Home.js";
import { tags } from "./home/Tags.js";
import MediaBuilder from "./photographes/Galerie.js";

import PhotographerProfil from "./photographes/Photographe.js";

(function Dispatcher() {
	new ApiFish()
		.getDataFish()
		.then((data) => {
			if (window.location.pathname.includes("/photographes.html")) {
				new PhotographerProfil().displayPhotographerProfil(data);
				new MediaBuilder().photographersMedias(data);
				return;
			}
			// Page d'accueil (photos)
			tags();
			new HomePage().displayPhotographers(data);
		})
		.catch(() => {
			console.error("N'a pas pu charger l'api");
		});
})();
