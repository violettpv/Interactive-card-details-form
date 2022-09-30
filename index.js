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

// === Card Divs ===
const fullname = document.getElementById('cardholder-name');
const cardNumber = document.getElementById('card-number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('card-cvc');


// === Form error span ===
const invalidNameSpan = document.getElementById('fullname-error');
const invalidCardSpan = document.getElementById('card-number-error');
const invalidDateSpan = document.getElementById('date-error');
const invalidCvcSpan = document.getElementById('cvc-error');

// === regex validation ===
let checkName = /^[A-Z][a-z]+\s[A-Z][a-z]+$/gm;
let checkCard = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/gm;
let checkMonth = /^[0-9]{2}$/gm; // need extra validation for month
let checkYear = /^[0-9]{2}$/gm;
let checkCvc = /^[0-9]{3}$/gm;

nameInput.oninput = () => {
    if (nameInput.value === '') {
        fullname.innerHTML = 'Jane Appleseed';
        return;
    }

    fullname.innerHTML = nameInput.value;

    let words = nameInput.value.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    nameInput.value = words.join(' ');
}

cardNumberInput.oninput = () => {
    if (cardNumberInput.value === '') {
        cardNumber.innerHTML = '0000 0000 0000 0000';
        return;
    }
    // cardNumberInput.value = cardNumberInput.value.replace(/[^0-9]/g, '');

    $('#card-num').on('keypress change blur', function () {
        $(this).val(function (index, value) {
            return value.replace(/[^a-z0-9]+/g, '').replace(/(.{4})/g, '$1 ');
        });
    });

    $('#card-num').on('copy cut paste', function () {
        setTimeout(function () {
            $('#card-num').trigger("change");
        });
    });

    cardNumber.innerHTML = cardNumberInput.value;
}



monthInput.oninput = () => {
    month.innerHTML = monthInput.value;

    if (monthInput.value === '') {
        month.innerHTML = '00';
    }
}

yearInput.oninput = () => {
    year.innerHTML = yearInput.value;

    if (yearInput.value === '') {
        year.innerHTML = '00';
    }
}

cvcInput.oninput = () => {
    cvc.innerHTML = cvcInput.value;

    if (cvcInput.value === '') {
        cvc.innerHTML = '000';
    }
}


// function sendCardDetails() {
//     let name = nameInput.value;
//     let cardNumber = cardNumberInput.value;
//     let month = monthInput.value;
//     let year = yearInput.value;
//     let cvc = cvcInput.value;
//
//
//     if (!name.match(checkName) || name === "") {
//         nameInput.style.border = "1px solid #FF5252FF";
//         invalidNameSpan.innerHTML = "Invalid input.";
//     }
//     if (!cardNumber.match(checkCard) || cardNumber === "") {
//         cardNumberInput.style.border = "1px solid #FF5252FF";
//         invalidCardSpan.innerHTML = "Invalid input.";
//     }
//     if (!month.match(checkMonth) || month === "" || month > 12 || month < 1) {
//         monthInput.style.border = "1px solid #FF5252FF";
//         invalidDateSpan.innerHTML = "Can't be blank.";
//     }
//     if (!year.match(checkYear) || year === "") {
//         yearInput.style.border = "1px solid #FF5252FF";
//         invalidDateSpan.innerHTML = "Can't be blank.";
//     }
//     if (!cvc.match(checkCvc) || cvc === "") {
//         cvcInput.style.border = "1px solid #FF5252FF";
//         invalidCvcSpan.innerHTML = "Can't be blank.";
//     }
//
//
//     // formContainer.style.display = "none";
//     // completeContainer.style.display = "flex";
// }

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