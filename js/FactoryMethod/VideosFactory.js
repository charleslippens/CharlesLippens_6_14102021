"use strict";

export default class Video {
	// création de l'élement vidéo
	createHTML(element) {
		const eltVideo = document.createElement("video");
		eltVideo.setAttribute("role", "button");
		eltVideo.setAttribute("controls", "controls");
		eltVideo.setAttribute("src", element.video);
		eltVideo.className = "photo-media";
		return eltVideo;
	}
}
