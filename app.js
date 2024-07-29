const inputAmountEl = document.getElementById("loam-amount");
const interestRateEl = document.getElementById("interestRate");
const loamMounthPayEl = document.getElementById("loam-mounthPay");
const spanEl = document.querySelector("span");

function calculetloam() {
  let inputAmount = inputAmountEl.value;
  let interestRate = interestRateEl.value;
  let loamMounthPay = loamMounthPayEl.value;
  let total = ((inputAmount + (interestRate * 0.00001)) / loamMounthPay);
let totalFloor = total.toFixed(1)
  spanEl.innerHTML = `${totalFloor} $`
}
