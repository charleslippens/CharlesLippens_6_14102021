"use strict";

import Image from "./ImagesFactory.js";
import Video from "./VideosFactory.js";

export default class Media {
	// Vérifie si l'item sélectionné est une image ou une vidéo et les éxécute
	// Utilisation de factory method
	renderMedia(element) {
		let factory = null;
		// eslint-disable-next-line no-prototype-builtins
		if (element.hasOwnProperty("image")) {
			factory = new Image();
			// eslint-disable-next-line no-prototype-builtins
		} else if (element.hasOwnProperty("video")) {
			factory = new Video();
		}
		return factory.createHTML(element);
	}
}
