// Get references to the text area and character count display
const textArea = document.getElementById("inputText");
const charCount = document.getElementById("charCount");

// Add an input event listener to the text area
textArea.addEventListener("input", () => {
  // Get the current value of the text area and calculate the length
  const textLength = textArea.value.length;

  // Update the character count display
  charCount.textContent = textLength;
});

// Explanation:
// HTML: We created a basic layout with a <textarea> where the user can type and a <div> with a span to display the character count. The ID inputText is used to access the textarea in JavaScript, and charCount is the span where we will show the character count.

// JavaScript:

// We select the <textarea> and <span> elements using document.getElementById().
// We use the addEventListener method to listen for the input event on the text area. The input event fires every time the user types or deletes characters.
// Inside the event listener function, we get the length of the text in the text area using value.length. Then, we update the content of the charCount span to show the current character count.
// Real-time updates: Every time a user types or deletes a character, the character count is updated in real-time, giving immediate feedback.