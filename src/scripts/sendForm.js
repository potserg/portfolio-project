import Inputmask from 'inputmask';
import formValidate from './validate';

export default function sendForm(selector) {
  const phoneMask = '+7 999 999-99-99';
  const form = document.querySelector(selector);
  const inputs = form.querySelectorAll('.js-input');
  const action = form.action;
  const method = form.method;
  const activeClass = 'active';
  const orderPopup = document.querySelector('.order-popup');
  const closePopup = document.querySelector('.order-form__btn--close');

  const toggleOrder = function() {
    orderPopup.classList.toggle('active');
  }

  inputs.forEach((input) => {
    input.addEventListener('focus', addFocusToInput);
    input.addEventListener('blur', removeFocusToInput);

    if (input.name === 'phone') putPhoneMask(input);

  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let result = true;

    const valResult = formValidate({
      inputs: inputs      
    });

    for (const field in valResult) {
      if (valResult[field] === false) result = false;
    }

    if (result === true) submitForm();
  });

  function putPhoneMask(input) {
    const inputmask = new Inputmask({
      'mask': phoneMask,
      showMaskOnHover: false
    })

    inputmask.mask(input);
  }
  
  function addFocusToInput() {
    const parent = this.parentElement;
    
    parent.classList.add(activeClass);
  }
  
  function removeFocusToInput() {
    const parent = this.parentElement;
    
    parent.classList.remove(activeClass);
    
    this.value.length === 0
    ? parent.classList.remove('full')
    : parent.classList.add('full');
  }

  function submitForm() {
    const formData = new FormData(form);

    formData.append('name', form.elements.name.value);
    formData.append('phone', form.elements.phone.value);
    formData.append('comment', form.elements.comment.value);
    formData.append('to', form.elements.email.value);

    fetch(action, {
      method: method,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      body: formData
    })
      .then(response => {
        if (response.ok) response.json();
      })
      .then(() => clearForm())
      .catch(error => console.log(error));
  }

  function clearForm() {
    inputs.forEach((input) => {
      input.value = '';
      input.parentElement.classList.remove('full');
    });
    toggleOrder();
  }

  closePopup.addEventListener('click', () => {
    toggleOrder();
  });

  orderPopup.addEventListener('click', (e) => {
    if (e.target === orderPopup) {
      toggleOrder();
    }
  });
}