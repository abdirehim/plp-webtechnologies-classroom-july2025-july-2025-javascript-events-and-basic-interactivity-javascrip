
// Part 1: Event Handling
const toggleBtn = document.getElementById('toggleMessageBtn');
const message = document.getElementById('message');

toggleBtn.addEventListener('click', () => {
  message.classList.toggle('hidden');
});

// Part 2: Interactive Elements
// Light/Dark Mode
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Game
const incrementBtn = document.getElementById('incrementBtn');
const countDisplay = document.getElementById('count');
let count = 0;
incrementBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Error fields
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formSuccess = document.getElementById('formSuccess');

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.classList.add('hidden');

  // Validate name
  if (name.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters';
    return;
  }

  // Validate email (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address';
    return;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    return;
  }

  // Success
  formSuccess.classList.remove('hidden');
  form.reset();
});
