"use strict";

class Video {
	// création de l'élement vidéo
	createHTML(element) {
		const eltVideo = document.createElement("video");
		eltVideo.setAttribute("controls", "controls");
		eltVideo.setAttribute("src", element.video);
		eltVideo.className = "ph-media";

		return eltVideo;
	}
}

class Image {
	// création de l'élement image
	createHTML(element) {
		const eltImage = document.createElement("img");
		eltImage.setAttribute("src", element.image);
		eltImage.className = "ph-media";

		return eltImage;
	}
}

export default class Media {
	// Vérifie si l'item sélectionné est une image ou une vidéo et les éxécute
	renderMedia(element) {
		let factory = null;
		if (element.hasOwnProperty("image")) {
			factory = new Image();
		} else if (element.hasOwnProperty("video")) {
			factory = new Video();
		}
		return factory.createHTML(element);
	}
}
