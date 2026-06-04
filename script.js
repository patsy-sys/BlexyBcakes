let total = 0;

function addToCart(item, price) {
    total += price;
    document.getElementById("total").textContent = 
    total;
}

function clearCart() {
    total = 0;
    document.getElementById("total").textContent = "0"
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
    }

    if (selected.value === "opay") {
        window.open("https://www.opayweb.com/", "_blank");
    }

    if (selected.value === "bank") {
        alert(
            "Bank: OPay\nAccount Name: Ugochukwu Adaugo Blessing\nAccount Number: 8066423863"
        );
    }

    if (selected.value === "whatsapp") {
        let message = 
        "hello, I would like to pay. Cart Total: N" + total.toLocaleString();

        window.open(
            "https://wa.me/2348066423863?text=" + 
            encodeURIComponent(message),
            "_blank"
        );
    }

}
