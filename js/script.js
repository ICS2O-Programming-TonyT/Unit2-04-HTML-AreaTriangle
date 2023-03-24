// Get the form and result elements
const form = document.getElementById('triangle-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the base and height values from the form
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  
  // Calculate the area of the triangle
  const area = 0.5 * base * height;
  
  // Display the result
  resultDiv.innerHTML = `The area of the triangle is ${area.toFixed(2)} cm<sup>2</sup>.`;
});
