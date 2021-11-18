"use strict";

export default class Image {
	// création de l'élement image
	createHTML(element) {
		const eltImage = document.createElement("img");
		eltImage.setAttribute("src", element.image);
		eltImage.className = "ph-media";
		return eltImage;
	}
}
