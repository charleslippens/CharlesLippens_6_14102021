"use strict";

// Données
import ApiFish from "./fetch/API.js";

// Page d'acceuil
import HomePage from "./home/Home.js";
import Tagging from "./home/Tags.js";
import MediaBuild from "./photographes/Mediabuild.js";
import SortMenu from "./photographes/Sort.js";

import PhotographerProfil from "./photographes/Photographe.js";

(function Dispatcher() {
	new ApiFish()
		.getDataFish()
		.then((data) => {
			if (window.location.pathname.includes("/photographes.html")) {
				// Profil photographe header
				new PhotographerProfil().displayPhotographerProfil(data);
				// Menu de tri
				new SortMenu().sort(data);
				// Zone gallerie et likes du photographe
				new MediaBuild().photographersMedias(data);
				return;
			}
			// Page d'accueil (photos)
			new Tagging().tags();
			new HomePage().displayPhotographers(data);
		})
		.catch(() => {
			console.error("N'a pas pu charger l'api");
		});
})();
