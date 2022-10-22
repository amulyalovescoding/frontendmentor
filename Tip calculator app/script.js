const billAmount = document.getElementById('bill-amount');
const tipSelected = document.querySelectorAll('.tip-button');
const customTip = document.getElementById('custom-tip');
const noOfPersons = document.getElementById('noOfPeople');
const tipAmountPerPerson = document.querySelector('.tipValuePerPerson');
const totalAmountPerPerson = document.querySelector('.totalValuePerPerson');
const resetButton = document.querySelector('.reset-btn');

let bill = 0.0;
let tip = 15;
let persons = 1;

billAmount.addEventListener('input', calBill);

function calBill() {
  bill = parseFloat(billAmount.value);
  calculate();
}


function calculate() {
  let totalTip = (bill * tip) / 100;

  let tipPerPerson = totalTip / persons;

  let totalPerPerson = (bill + totalTip) / persons;

  tipAmountPerPerson.innerText = tipPerPerson.toFixed(2);

  totalAmountPerPerson.innerText = totalPerPerson.toFixed(2);
}

noOfPersons.addEventListener('input', calPerson);

function calPerson() {
  persons = noOfPersons.value;
  calculate();
}

tipSelected.forEach((btn) => {
  btn.addEventListener("click", () => {
    tip = parseFloat(btn.innerHTML);
    calculate();
  });
});

customTip.addEventListener('input', calTip);

function calTip() {
  tip = customTip.value;
  calculate();
}

resetButton.addEventListener('click', () => {
  billAmount.value = "0.0";
  bill = 0;
  tip = 0;
  persons = 1;
  tipSelected[2].click();
  tipAmountPerPerson.innerText = "0.00";
  totalAmountPerPerson.innerText = "0.00";
  noOfPersons.value = "1";
  calculate();
});
