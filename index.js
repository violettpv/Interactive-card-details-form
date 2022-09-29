// Containers
const formContainer = document.getElementById('form-container');
const completeContainer = document.getElementById('completed-state-container');
// === Form boxes ===
const nameInput = document.getElementById('cardholder');
const cardNumberInput = document.getElementById('card-num');
const monthInput = document.getElementById('exp-month');
const yearInput = document.getElementById('exp-year');
const cvcInput = document.getElementById('cvc');
const confirmButton = document.getElementById('confirm-btn');
const continueButton = document.getElementById('continue-btn');

// === Form error span ===
const invalidNameSpan = document.getElementById('fullname-error');
const invalidCardSpan = document.getElementById('card-number-error');
const invalidDateSpan = document.getElementById('date-error');
const invalidCvcSpan = document.getElementById('cvc-error');

// === Form validation ===
// document.getElementById("content").getElementsByTagName("span")[0].innerHTML="";
let checkName = /^[A-Z][a-z]+\s[A-Z][a-z]+$/gm;
let checkCard = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/gm;
let checkMonth = /^[0-9]{2}$/gm; // need extra validation for month
let checkYear = /^[0-9]{2}$/gm; // need extra validation for year
let checkCvc = /^[0-9]{3}$/gm;


function sendCardDetails() {
    // document.getElementById("content").getElementsByTagName("span")[0].innerHTML="";


}

// confirmButton.addEventListener('click', () => {
//     // if (checkName.test(nameInput.value) && checkCard.test(cardNumberInput.value)) {
//     //     formContainer.style.display = 'none';
//     //     completeContainer.style.display = 'block';
//     // } else {
//     //     invalidNameSpan.style.display = 'block';
//     //     invalidCardSpan.style.display = 'block';
//     // }
//
//     formContainer.style.display = 'none';
//     completeContainer.style.display = 'flex';
// });
//
// continueButton.addEventListener("click", () => {
//     // reload page?
//     // get back form?
//
//     completeContainer.style.display = "none"; // hide completed state
//     formContainer.style.display = "flex";
// });