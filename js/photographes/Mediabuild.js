import LikesSub from "./Likes.js";
import GalleryFactory from "../FactoryMethod/GalleryFactory.js";

export default class MediaBuild {
	// Appel de Gallerie pour créer une section media
	photographersMedias(data) {
		const media = data.media;
		const gallery = new GalleryFactory().builder(media);
		this.AreaAndLikes(gallery.totalLike, data.photographers);
		new LikesSub();
	}

	// créer une zone pour contenir le nombre total de likes et le prix du photographe
	AreaAndLikes(totalLike, photographers) {
		// On sépare la chaine des paramètres en fonction de "id="
		const id = window.location.search.split("id=")[1];

		photographers.forEach((element) => {
			if (id == element.id) {
				let box = document.getElementById("area");
				let boxTemplate = `
			<span id="total-likes">${totalLike}</span>
			<i class="fas fa-heart"></i>
			<span>${element.price} €/ jour</span>
			`;
				box.innerHTML = boxTemplate;
			}
		});
	}
}
