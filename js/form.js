const form = document.querySelector("form");
// Hent værdier fra form

// Sæt værdier ind i output-elementer
const outputFirst = document.querySelector("#first_output");
const outputEmail = document.querySelector("#email_output");
const outputBirth = document.querySelector("#birth_output");
const outputNumber = document.querySelector("#number_output");

// noter til thank you note men forstår ikke endu:
// Handler for form submission: validate, show thank-you, reset
// function handleSubmit(event) {
//   event.preventDefault();

//   // If invalid, show browser validation UI
//   if (!form.checkValidity()) {
//     form.reportValidity();
//     return;
//   }

//   // Show thank-you message
//   const thank = document.getElementById("thankyou");
//   if (thank) {
//     thank.textContent = "Tak for tilmeldingen — du er nu tilmeldt nyhedsbrevet.";
//     thank.classList.add("visible");
//     thank.hidden = false;
//     thank.scrollIntoView({ behavior: "smooth", block: "center" });
//   }

//   // Optionally process form data here (e.g., send to server)
//   form.reset();
// }

// form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
