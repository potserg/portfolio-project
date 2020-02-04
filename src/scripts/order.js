const inputForm = document.querySelectorAll('.order-form__input');
const inputBlock = document.querySelectorAll('.order-form__block');

for (let i = 0; i < inputForm.length; i++) {
  inputForm[i].addEventListener('focus', () => {
    inputBlock[i].classList.add('active');
  });

  inputForm[i].addEventListener('blur', () => {
    inputBlock[i].classList.remove('active');
  });
};