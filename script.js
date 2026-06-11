let total = 0;

function addToCart(item, price) {
    total += price;
    document.getElementById("total").textContent = total;
}

function goToPayment() {
    console.log("Saving total:", total);
    localStorage.setItem("cartTotal", total);
    window.location.href = "paynow.html";
}


function clearCart() {
    if (confirm("Clear all items from cart?")) {
    cart = [];
    total = 0;

    document.getElementById("total").textContent = "0"
    }
}

function checkout() {
    const selected = document.querySelector(
        'input[name="payment"]:checked'
    );

    if (!selected) {
        alert("Please selected a payment method.");
        return;
    }


    if (selected.value === "bank") {
       document.getElementById("bankDetails").style.display = "block";
    }

    if (selected.value === "whatsapp") {
        let cartTotal = localStorage.getItem("cartTotal") || 0;
        let message = 
        "hello, I would like to pay. Cart Total: N" + Number(cartTotal).toLocaleString();

        window.open(
            "https://wa.me/2348066423863?text=" + 
            encodeURIComponent(message),
            "_blank"
        );
    }

}

function copyAccount() {
    navigator.clipboard.writeText("8066423863");
    alert("Acount number copied!");
}

let cartTotal = localStorage.getItem("cartTotal") || 0;
document.getElementById("paymentTotal").textContent = cartTotal;

console.log("Retrieved total:", cartTotal);