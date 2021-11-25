"use strict";

import Media from "./MediaFactory.js";
import Lightbox from "../photographes/Lightbox.js";

export default class Gallery {
	constructor() {
		this.totalLike = 0;
	}
	// construit l'HTML galerie avec les différents médias
	// section galerie pour chaque page des photographes
	builder(dataMedia) {
		const id = window.location.search.split("id=")[1]; // On sépare la chaine des paramètres en fonction de "id="
		//	console.log(id);
		let media = new Media();
		let currentMedia = [];
		let currentMediaName = [];

		dataMedia.forEach((element) => {
			if (id == element.photographerId) {
				let sectionPhWorks = document.getElementById("photo-works");
				let articlePhWork = document.createElement("article");
				let mediaHTML = media.renderMedia(element);
				let workTemplate = `
                <a href='#' title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="photo-work-elt-text">
                    <h2 class="photo-work-title">${element.photoName}</h2>
                    <div class='photo-elt-like'>
                    <span class="photo-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" role="button" data-value="${element.likes}"></i>
                    </div>
                </div>
                `;
				articlePhWork.innerHTML = workTemplate;
				sectionPhWorks.appendChild(articlePhWork);
				articlePhWork.classList.add("photo-work-elt");
				// calcul la somme et attribue le résultat a this.totallike
				this.totalLike += parseInt(element.likes);
				currentMedia.push(mediaHTML.outerHTML);
				currentMediaName.push(element.photoName);
				new Lightbox().init(currentMedia, currentMediaName);
			}
		});
		return this;
	}
}
