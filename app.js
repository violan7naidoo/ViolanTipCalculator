const btn = document.getElementById("calculate");

const bill = document.getElementById("bill");

const tip = document.getElementById("tip");

const totalsoan = document.getElementById("total");

function calculateTotal() {
  const billv = bill.value;
  const tipv = tip.value;
  const total = billv * (1 + tipv / 100);

  totalsoan.innerText = total.toFixed(2);
}
btn.addEventListener("click", calculateTotal);
