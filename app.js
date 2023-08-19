let total = 0;

function btnHandler(data) {
  // get product name and push to display
  const productName = data.childNodes[3].childNodes[5].innerText;
  const newElement = document.createElement("li");
  newElement.innerText = productName;
  document.getElementById("newElement").appendChild(newElement);

  //   get product price name and push to display
  const productPrice = data.childNodes[3].childNodes[7].childNodes[1].innerText;
  total += parseFloat(productPrice);
  if (total > 0) {
    document.getElementById("purchaseBtn").removeAttribute("disabled");
    document.getElementById("tk").classList.remove("hidden");
  }
  if (total >= 200) {
    document.getElementById("applyBtn").removeAttribute("disabled");
  }

  document.getElementById("totalPrice").innerText = total.toFixed(2);
}

// coupon code apply
document.getElementById("applyBtn").addEventListener("click", () => {
  const inputValue = document.getElementById("couponInput");

  if (inputValue.value === "SELL200") {
    document.getElementById("discountTk").classList.remove("hidden");
    document.getElementById("totalPriceToPayTk").classList.remove("hidden");
    //   20% discount
    const discountAmount = total * 0.2;
    document.getElementById("discount").innerText = discountAmount.toFixed(2);

    //   total price to pay
    const totalPriceToPay = total - discountAmount;
    document.getElementById("totalPriceToPay").innerText =
      totalPriceToPay.toFixed(2);
  }
  inputValue.value = "";
});

// go home
function goHome() {
  window.location.href = "index.html";
}
