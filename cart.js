document.addEventListener('DOMContentLoaded', function () {
    updateCartTotal(); // Initialize total on page load
});

var removeCartItemButtons = document.querySelectorAll('.remove-btn');
var quantityInputs = document.querySelectorAll('.cart-quantity-input');

// This function remove the cart-row when clicked
removeCartItemButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        var cartRow = buttonClicked.closest('.cart-row');
        cartRow.remove(); // Remove the cart row
        updateCartTotal(); // Update the total price
    });
});


quantityInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        updateCartTotal();
    });
});


// Function to update the total price of items in the cart
function updateCartTotal() {
    var cartItemContainer = document.querySelector('.cart');
    var cartRows = cartItemContainer.querySelectorAll('.cart-row');

    var remainingPrices = [];
    var totalUnremovedPrice = 0;

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.querySelector('.cart-price');
        var quantityElement = cartRow.querySelector('.cart-quantity-input');
        var subtotalElement = cartRow.querySelector('.subtotal');

        // Check if both priceElement and quantityElement exist before accessing their values
        if (priceElement && quantityElement && subtotalElement) {
            var price = parseFloat(priceElement.innerText.replace('$', ''));
            var quantity = parseInt(quantityElement.value);
            var totalItemPrice = price * quantity;

            remainingPrices.push(totalItemPrice); // Add the total price to the array
            totalUnremovedPrice += totalItemPrice; // Update the total price

            // Update the subtotal for each product
            subtotalElement.innerText = '$' + totalItemPrice.toFixed(2);
        }
    }

    console.log("Remaining prices:", remainingPrices);
    console.log("Total of unremoved prices:", totalUnremovedPrice);

    // Update the total price display on the page
    document.querySelector('.cart-total-price').innerText = '$' + totalUnremovedPrice.toFixed(2);
}






