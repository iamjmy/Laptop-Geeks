document.addEventListener('DOMContentLoaded', function () {
    // Reset the cart on page load
    resetCart();

    // Add event listener for the "Add to Cart" button click
    var addToCartButton = document.getElementById('plus');
    addToCartButton.addEventListener('click', function () {
        // Increment the cart count
        addToCart();
        
        // Update the cart count on the page
        updateCartCount();
        
    });
});


// This function adds a product to the shopping cart
function addToCart() {
    // Get the current cart items from the browser's local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // For the sake of this example, let's assume details about the product being added
    var productInfo = {
        name: 'MacBook Pro 13-inch M2',
        price: 1299,
        quantity: 1,
    };

    // Add the product details to the shopping cart
    cartItems.push(productInfo);

    // Save the updated cart items back to the local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


// This function updates and displays the cart count on the page
function updateCartCount() {
    // Get the current cart items from the browser's local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    var cartCountElement = document.getElementById('num');

    // Update and display the new cart count on the page
    cartCountElement.innerText = cartItems.length;
}


// Function to reset the cart
function resetCart() {
    // Remove the cart items from local storage
    localStorage.removeItem('cartItems');

    // Update and display the cart count (set to 0 in this case)
    updateCartCount();
}

