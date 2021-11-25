"use strict";

export default class LikesSub {
	// ajoute ou supprime un like sur le bouton
	constructor() {
		let media = document.getElementById("photo-works");

		media.addEventListener("click", (e) => {
			let classListTarget =
				// typeof pour indiquer le type d'opérande
				typeof e.target.classList === "undefined"
					? []
					: e.target.classList.value.split(" ");
			let hasClassBtn = -1 != classListTarget.indexOf("heart-btn");

			if (hasClassBtn) {
				let totalLikes = parseInt(document.getElementById("total-likes").innerHTML);
				let counterLike = e.target.parentNode.firstElementChild.firstElementChild;
				let likeValue = parseInt(counterLike.innerHTML);
				let isLiked = -1 != classListTarget.indexOf("isLiked");
				// Décrémente ou incrémente le total des likes de la box
				document.getElementById("total-likes").innerHTML = isLiked
					? --totalLikes
					: ++totalLikes;
				// Décrémente ou incrément le compteur des likes
				counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;
				// si liké, supprime le coeur plein par un coeur vide
				if (isLiked) {
					e.target.classList.remove("isLiked");
					e.target.classList.replace("fas", "far");
				} else {
					// sinon rempli un coeur video par un coeur plein
					e.target.classList.add("isLiked");
					e.target.classList.replace("far", "fas");
				}
			}
		});
	}
}
