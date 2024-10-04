// DOM elements
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

// Array to store expenses, initialize from local storage if present
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Add expense function
function addExpense(event) {
  event.preventDefault();

  // Capture input values
  const name = document.getElementById("expense-name").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);
  const date = document.getElementById("expense-date").value;
  const category = document.getElementById("expense-category").value; // Added category input

  // Create expense object
  const expense = { name, amount, date, category };

  // Add expense to array
  expenses.push(expense);

  // Save to local storage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Update the expense list and total
  displayExpenses();
  updateTotal();

  // Clear form inputs after adding the expense
  expenseForm.reset();
}

// Display expenses in the list
function displayExpenses() {
  // Clear the list first
  expenseList.innerHTML = "";

  // Loop through the expenses array and create list items
  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.name} - ${expense.amount.toFixed(2)} MYR <span>${
      expense.category
    } | ${expense.date}</span>
      <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(li);
  });
}

// Update total amount
function updateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalAmount.textContent = total.toFixed(2);
}

// Delete expense function
function deleteExpense(index) {
  expenses.splice(index, 1); // Remove the expense at the given index
  localStorage.setItem("expenses", JSON.stringify(expenses)); // Update local storage
  displayExpenses();
  updateTotal();
}

// Load expenses from local storage and display them on page load
window.addEventListener("load", () => {
  displayExpenses();
  updateTotal();
});

// Event listener for form submission
expenseForm.addEventListener("submit", addExpense);
