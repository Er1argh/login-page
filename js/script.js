const emailInput = document.getElementById('emailInput')
const emailErrorBox = document.getElementById('email-error-message')
const passwordInput = document.getElementById('passwordInput')
const passwordErrorBox = document.getElementById('password-error-message')
const loginForm = document.getElementById('login-form')

const validateEmail = emailValue => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  if (!emailValue.match(emailPattern)) {
    emailInput.classList.add('error-border')
    emailErrorBox.textContent = 'Please enter the valid email.'
    return false
  } else {
    emailInput.classList.remove('error-border')
    emailErrorBox.textContent = ''
    return true
  }
}

const validatePassword = passwordValue => {
  if (passwordValue.length < 6) {
    passwordInput.classList.add('error-border')
    passwordErrorBox.textContent = 'Password must be at least 6 characters.'
    return false
  } else {
    passwordInput.classList.remove('error-border')
    passwordErrorBox.textContent = ''
    return true
  }
}

emailInput.addEventListener('input', element => {
  validateEmail(element.target.value)
})

passwordInput.addEventListener('input', element => {
  validatePassword(element.target.value)
})

loginForm.addEventListener('submit', form => {
  form.preventDefault()

  const isValidEmail = validateEmail(emailInput.value)
  const isValidPassword = validatePassword(passwordInput.value)

  if (isValidEmail && isValidPassword) {
    alert('Form Submitted')
  } else {
    console.log('Invalid Inputs')
  }
})
