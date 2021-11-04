"use strict";

export default class Form {
	fields() {
		// Elements DOM des champs du formulaire de validation
		let form = document.getElementById("contact-form");
		let firstName = document.getElementById("first-name");
		let lastName = document.getElementById("last-name");
		let email = document.getElementById("email");
		let message = document.getElementById("message");
		const regexFL = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

		// Envoyer le formulaire
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			let isValid =
				this.checkNames(firstName, regexFL) &&
				this.checkNames(lastName, regexFL) &&
				this.checkEmail(email) &&
				this.checkMessage(message);

			if (isValid) {
				firstName.style.border = "none";
				lastName.style.border = "none";
				email.style.border = "none";
				message.style.border = "none";
				document.getElementById("contact-form").reset();
			} else {
				this.errorVerification(firstName, lastName, email, message, regexFL);
			}
		});
	}

	errorVerification(firstName, lastName, email, message, regexFL) {
		this.checkNames(firstName, regexFL);
		this.checkNames(lastName, regexFL);
		this.checkEmail(email);
		this.checkMessage(message);
	}

	// Vérifier le firstname et lastname

	checkNames(elt, regexFL) {
		if (elt.value.trim().length < 2 || elt.value.trim() === "" || !elt.value.match(regexFL)) {
			elt.parentElement.setAttribute("data-error-visible", "true");
			elt.style.border = "2px solid #e54858";
			return false;
		} else {
			elt.parentElement.setAttribute("data-error-visible", "false");
			elt.style.border = "solid #279e7a 0.19rem";
			return true;
		}
	}

	checkEmail(elt) {
		const regexE = /(?=^.{5,255}$)^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3})$/;

		if (elt.value.trim().match(regexE)) {
			elt.parentElement.setAttribute("data-error-visible", "false");
			elt.style.border = "solid #279e7a 0.19rem";
			return true;
		}
		elt.parentElement.setAttribute("data-error-visible", "true");
		elt.style.border = "2px solid #e54858";
		return false;
	}

	checkMessage(elt) {
		if (elt.value.trim() === "" || elt.value.trim() == null) {
			elt.parentElement.setAttribute("data-error-visible", "true");
			elt.style.border = "2px solid #e54858";
			return false;
		}
		elt.parentElement.setAttribute("data-error-visible", "false");
		elt.style.border = "solid #279e7a 0.19rem";
		return true;
	}
}
