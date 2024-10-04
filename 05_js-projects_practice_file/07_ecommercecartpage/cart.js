// Sample cart data (this would be dynamic in a real app)
const cartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 50,
    quantity: 1,
    image: "2-before.webp",
  },
  {
    id: 2,
    name: "Product 2",
    price: 30,
    quantity: 1,
    image: "1x1.avif",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    quantity: 1,
    image: "pexels-madebymath-90946.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    quantity: 1,
    image: "photo-1505740420928-5e560c06d30e.jpeg",
  },
];

// Function to render cart items
function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "<h2>Shopping Cart</h2>"; // Clear existing items

  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="product-image" />
      <div class="item-details">
        <p class="product-name">${item.name}</p>
        <p class="product-price">$${item.price}</p>
        <div class="quantity-control">
          <button class="decrease-quantity" onclick="changeQuantity(${index}, 'decrease')">-</button>
          <input type="number" class="quantity" value="${
            item.quantity
          }" min="1" />
          <button class="increase-quantity" onclick="changeQuantity(${index}, 'increase')">+</button>
        </div>
        <p class="item-total">$${item.price * item.quantity}</p>
        <button class="remove-item" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  updateCartSummary();
}

// Function to change quantity
function changeQuantity(index, action) {
  if (action === "increase") {
    cartItems[index].quantity++;
  } else if (action === "decrease" && cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
  }
  renderCartItems();
}

// Function to remove item
function removeItem(index) {
  cartItems.splice(index, 1); // Remove item from cart
  renderCartItems();
}

// Function to update cart summary
function updateCartSummary() {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal; // You can add taxes or other charges if necessary

  document.querySelector(".total-items").innerText = totalItems;
  document.querySelector(".subtotal").innerText = `$${subtotal.toFixed(2)}`;
  document.querySelector(".total").innerText = `$${total.toFixed(2)}`;
}

// Initialize the cart on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
});
