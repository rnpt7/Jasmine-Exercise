window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function setupIntialValues() {
  const loanAmount = document.querySelector("#loan-amount");
  const loanYears = document.querySelector("#loan-years");
  const loanRate = document.querySelector("#loan-rate");
  const values = { amount: 15000, years: 10, rate: 8 };
  loanAmount.value = values.amount;
  loanYears.value = values.years;
  loanRate.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);
  return (
    (values.amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.querySelector("#monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
