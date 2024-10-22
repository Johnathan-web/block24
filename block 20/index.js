document.getElementById('addNumberBtn').addEventListener('click', addNumber);
document.getElementById('sortOneBtn').addEventListener('click', sortOneNumber);
document.getElementById('sortAllBtn').addEventListener('click', sortAllNumbers);

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    addNumber();  // Add number to the number bank
});

let numberBank = [];

function addNumber() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input, 10);

    // Check if the input is a valid number
    if (!isNaN(number)) {
        numberBank.push(number);
        updateNumberBank();
    }
    document.getElementById('numberInput').value = ''; // Clear input field
}

function updateNumberBank() {
    const numberBankDiv = document.getElementById('numberBank');
    numberBankDiv.innerHTML = numberBank.join(', ');
}

function sortOneNumber() {
    if (numberBank.length > 0) {
        const number = numberBank.shift(); // Remove the first number from the bank
        sortNumber(number);
        updateNumberBank();
    }
}

function sortAllNumbers() {
    while (numberBank.length > 0) {
        const number = numberBank.shift(); // Remove all numbers from the bank
        sortNumber(number);
    }
    updateNumberBank();
}

function sortNumber(number) {
    const oddNumbersDiv = document.getElementById('oddNumbers');
    const evenNumbersDiv = document.getElementById('evenNumbers');

    if (number % 2 === 0) {
        evenNumbersDiv.innerHTML += (evenNumbersDiv.innerHTML ? ', ' : '') + number;
    } else {
        oddNumbersDiv.innerHTML += (oddNumbersDiv.innerHTML ? ', ' : '') + number;
    }
}