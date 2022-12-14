const submitForm = (evt) => {
  evt.preventDefault();

  const { validity: { valid, valueMissing, typeMismatch } } = email;
  if (!valid) {
    message.classList.add('request-form__helper-text--visible');

    let errorMessage = '';
    if (valueMissing) {
      errorMessage = 'Oops! Please add your email';
    } else if (typeMismatch) {
      errorMessage = 'Oops! Please check your email';
    }

    message.innerText = errorMessage;
  } else {
    message.classList.remove('request-form__helper-text--visible');
    message.innerText = '';
  }
}

const form = document.querySelector('.request-form');
const email = document.querySelector('#email');
const message = document.querySelector('.request-form__helper-text');
form.addEventListener('submit', submitForm);
