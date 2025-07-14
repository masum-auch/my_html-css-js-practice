// Selectors
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Variables
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Event Listeners
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (button.id === 'clear') {
      clear();
    } else if (button.id === 'equals') {
      compute();
    } else if (button.classList.contains('operator')) {
      chooseOperation(value);
    } else {
      appendNumber(value);
    }
    updateDisplay();
  });
});

// Functions
function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + number.toString();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation;
  operation = undefined;
  previousOperand = '';
}

function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
}

function updateDisplay() {
  display.innerText = currentOperand || '0';
}
