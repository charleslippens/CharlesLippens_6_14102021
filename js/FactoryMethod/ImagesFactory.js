"use strict";

export default class Image {
	// création de l'élement image
	createHTML(element) {
		const eltImage = document.createElement("img");
		eltImage.setAttribute("alt", element.alt);
		eltImage.setAttribute("role", "button");
		eltImage.setAttribute("src", element.image);
		eltImage.className = "photo-media";
		return eltImage;
	}
}
