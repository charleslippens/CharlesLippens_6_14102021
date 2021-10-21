"use strict";

// récupérer les données photographes et medias
export default class ApiFish {
	async getDataFish() {
		let url = "api/photographers.json";
		let response = await fetch(url);
		let data = await response.json();

		const dataPhotographers = [...data.photographers];
		const dataMedias = [...data.media];

		return {
			photographers: dataPhotographers,
			media: dataMedias,
		};
	}
}
