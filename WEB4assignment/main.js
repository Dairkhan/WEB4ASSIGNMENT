// Form Validation
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('form-message');
  
    if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match!';
    } else {
      message.textContent = 'Form submitted successfully!';
    }
  });
  

// To-Do List
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add Task Function
document.getElementById('add-task').addEventListener('click', function() {
  const task = taskInput.value;
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Add delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field after adding task
  } else {
    alert('Please enter a task');
  }
});



  
  // Number Sorting Tool
  document.getElementById('sort-asc').addEventListener('click', function() {
    const numbers = document.getElementById('number-input').value.split(',').map(Number);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    document.getElementById('sorted-numbers').textContent = sortedNumbers.join(', ');
  });
  
  document.getElementById('sort-desc').addEventListener('click', function() {
    const numbers = document.getElementById('number-input').value.split(',').map(Number);
    const sortedNumbers = numbers.sort((a, b) => b - a);
    document.getElementById('sorted-numbers').textContent = sortedNumbers.join(', ');
  });
  
  // Background Color Change
  const colors = ['#f39c12', '#e74c3c', '#8e44ad', '#3498db'];
  let colorIndex = 0;
  
  document.getElementById('change-color').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });
  
  // Display Current Date and Time
  function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    document.getElementById('current-date-time').textContent = formattedDate;
  }
  setInterval(updateDateTime, 1000);
  
  // Random Number Guessing Game
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
let attempts = 0;

document.getElementById('submit-guess').addEventListener('click', function() {
  const userGuess = Number(document.getElementById('guess-input').value);
  attempts++;
  const feedback = document.getElementById('guess-feedback');
  const attemptCount = document.getElementById('attempts');

  if (userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100!';
  } else if (userGuess > randomNumber) {
    feedback.textContent = 'Too high! Try again.';
  } else if (userGuess < randomNumber) {
    feedback.textContent = 'Too low! Try again.';
  } else {
    feedback.textContent = `Congratulations! You guessed the correct number (${randomNumber})!`;
    feedback.style.color = 'green'; // Changing the text color for success
    resetGame(); // Reset the game after a correct guess
  }

  attemptCount.textContent = `Attempts: ${attempts}`;
});

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Reset the random number
  attempts = 0; // Reset the attempt counter
  document.getElementById('guess-input').value = ''; // Clear the input field
  document.getElementById('guess-feedback').textContent = ''; // Clear the feedback message
  document.getElementById('attempts').textContent = ''; // Clear the attempts display
}
