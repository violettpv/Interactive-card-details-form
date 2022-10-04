// Containers
const formContainer = document.getElementById('form-container');
const completeContainer = document.getElementById('completed-state-container');
// === Form boxes ===
const nameInput = document.getElementById('cardholder');
const cardNumberInput = document.getElementById('card-num');
const monthInput = document.getElementById('exp-month');
const yearInput = document.getElementById('exp-year');
const cvcInput = document.getElementById('cvc');
// === Card Divs ===
const cardLogo = document.getElementsByClassName('card-logo')[0];
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

nameInput.oninput = () => {
    if (nameInput.value === '') {
        fullname.innerHTML = 'Jane Appleseed';
        return;
    }

    if (nameInput.value.length < 3) {
        invalidNameSpan.innerHTML = 'Invalid input.';
        nameInput.style.border = '1.5px solid #FF5252FF';
    }
    else {
        invalidNameSpan.innerHTML = '';
        nameInput.style.border = '1.5px solid #DEDDDFFF';
    }

    let words = nameInput.value.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] !== undefined) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    nameInput.value = words.join(' ');

    fullname.innerHTML = nameInput.value;
}

$('#cardholder').keypress(function (e) {
    let charCode = (e.which) ? e.which : event.keyCode;

    if (String.fromCharCode(charCode).match(/[^a-zA-Z\s]/g))
        return false;
});

cardNumberInput.oninput = () => {
    if (cardNumberInput.value === '') {
        cardNumber.innerHTML = '0000 0000 0000 0000';
        return;
    }

    if (cardNumberInput.value.length < 19) {
        invalidCardSpan.innerHTML = 'Invalid input.';
        cardNumberInput.style.border = '1.5px solid #FF5252FF';
    }
    else {
        invalidCardSpan.innerHTML = '';
        cardNumberInput.style.border = '1.5px solid #DEDDDFFF';
    }
    cardNumber.innerHTML = cardNumberInput.value;
}

$('#card-num').on('keypress change blur', function () {
    $(this).val(function (index, value) {
        return value.replace(/[^0-9]+/g, '').replace(/(.{4})/g, '$1 ');
    });
});

$('#card-num').keypress(function (e) {
    let charCode = (e.which) ? e.which : event.keyCode;

    if (String.fromCharCode(charCode).match(/[^0-9]/g))
        return false;
});

$('#card-num').on('copy cut paste', function () {
    setTimeout(function () {
        $('#card-num').trigger("change");
    });
});

const today = new Date();
const fullYear = today.getFullYear();
const yearNow = fullYear.toString().slice(2, 4);
const monthNow = today.getMonth() + 1;

monthInput.oninput = () => {
    if (monthInput.value === '') {
        month.innerHTML = '00';
        invalidDateSpan.innerHTML = '';
        monthInput.style.border = '1.5px solid #DEDDDFFF';
        return;
    }
    if (monthInput.value > 12 || monthInput.value < 1) {
        invalidDateSpan.innerHTML = 'Invalid input.';
        monthInput.style.border = '1.5px solid #FF5252FF';
    }

    month.innerHTML = monthInput.value;
    if (monthInput.value < 10) {
        month.innerHTML = '0' + month.innerHTML;
    }
    if (monthInput.value > 12) {
        month.innerHTML = '00';
    }

    if (yearInput.value !== '') {
        if (yearInput.value === yearNow) {
            if (monthInput.value < monthNow) {
                invalidDateSpan.innerHTML = 'Invalid input.';
                monthInput.style.border = '1.5px solid #FF5252FF';
            }
            else {
                invalidDateSpan.innerHTML = '';
                monthInput.style.border = '1.5px solid #DEDDDFFF';
            }
        }
    }
}

$('#exp-month').keypress(function (e) {
    let charCode = (e.which) ? e.which : event.keyCode;

    if (String.fromCharCode(charCode).match(/[^0-9]/g))
        return false;
});

yearInput.oninput = () => {
    if (yearInput.value === '') {
        year.innerHTML = '00';
        invalidDateSpan.innerHTML = '';
        yearInput.style.border = '1.5px solid #DEDDDFFF';
        return;
    }

    if (yearInput.value < yearNow) {
        invalidDateSpan.innerHTML = 'Invalid input.';
        yearInput.style.border = '1.5px solid #FF5252FF';
    }
    else {
        invalidDateSpan.innerHTML = '';
        yearInput.style.border = '1.5px solid #DEDDDFFF';
    }

    if (yearInput.value === yearNow) {
        if (monthInput.value < monthNow) {
            invalidDateSpan.innerHTML = 'Invalid input.';
            monthInput.style.border = '1.5px solid #FF5252FF';
        }
        else {
            invalidDateSpan.innerHTML = '';
            monthInput.style.border = '1.5px solid #DEDDDFFF';
        }
    }

    year.innerHTML = yearInput.value;
}

$('#exp-year').keypress(function (e) {
    let charCode = (e.which) ? e.which : event.keyCode;

    if (String.fromCharCode(charCode).match(/[^0-9]/g))
        return false;
});

cvcInput.oninput = () => {
    if (cvcInput.value === '') {
        cvc.innerHTML = '000';
        invalidCvcSpan.innerHTML = '';
        cvcInput.style.border = '1.5px solid #DEDDDFFF';
        return;
    }

    if (cvcInput.value.length < 3) {
        invalidCvcSpan.innerHTML = 'Invalid input.';
        cvcInput.style.border = '1.5px solid #FF5252FF';
    }
    else {
        invalidCvcSpan.innerHTML = '';
        cvcInput.style.border = '1.5px solid #DEDDDFFF';
    }
    cvc.innerHTML = cvcInput.value;
}

$('#cvc').keypress(function (e) {
    let charCode = (e.which) ? e.which : event.keyCode;

    if (String.fromCharCode(charCode).match(/[^0-9]/g))
        return false;
});


function sendCardDetails() {
    let success = true;

    if (nameInput.value === '') {
        invalidNameSpan.innerHTML = "Can't be blank.";
        nameInput.style.border = '1.5px solid #FF5252FF';
    }
    if (cardNumberInput.value === '') {
        invalidCardSpan.innerHTML = "Can't be blank.";
        cardNumberInput.style.border = '1.5px solid #FF5252FF';
    }
    if (monthInput.value === '') {
        invalidDateSpan.innerHTML = "Can't be blank.";
        monthInput.style.border = '1.5px solid #FF5252FF';
    }
    if (yearInput.value === '') {
        invalidDateSpan.innerHTML = "Can't be blank.";
        yearInput.style.border = '1.5px solid #FF5252FF';
    }
    if (cvcInput.value === '') {
        invalidCvcSpan.innerHTML = "Can't be blank.";
        cvcInput.style.border = '1.5px solid #FF5252FF';
    }
    if (invalidNameSpan.innerHTML !== '' ||
        invalidCardSpan.innerHTML !== '' ||
        invalidDateSpan.innerHTML !== '' ||
        invalidCvcSpan.innerHTML !== '') {
        success = false;
    }

    if (success) {
        formContainer.style.display = "none";
        completeContainer.style.display = "flex";
    }
}

function continueBtn() {
    location.reload();
}
