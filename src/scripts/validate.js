export default function formValidate(options) {
  const inputs = options.inputs;
  const regexp = {
    email : '^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$',
    phone : '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'
  };
  const isFieldCorrect = {
    name : false,
    email : false,
    phone : false,
    comment : false,
  };
  const errorClass = 'error';
  const errorMessageEmpty = 'Поле не может быть пустым';
  const errorShortMessage = 'Текст в поле не может быть менее 2 символов';
  const errorLongNameMessage = 'Имя не может быть более 40 символов';
  const errorLongTextMessage = 'Текст в поле не может превышать 1000 символов';
  const errorIncorrectEmailMessage = 'Адрес почты введен некорректно';
  const errorIncorrectPhoneMessage = 'Номер телефона введен некорректно';

  inputs.forEach((input) => {
    setMode(input);
  });

  function setMode(input) {
    switch (input.name) {
      case 'name': 
        validateName(input);
        break;
      case 'email': 
        validateEmail(input);
        break;
      case 'phone': 
        validatePhone(input);
        break;
      case 'comment': 
        validateComment(input);
        break;
      default:
        break;
    }
  }

  function validateName(input) {
    if (input.value.length < 2) {
      showErrorMessage(input, errorShortMessage);
    } else if (input.value.length > 40) {
      showErrorMessage(input, errorLongNameMessage);
    } else {
      removeErrorMessage(input);
    }
  }
  
  function validateEmail(input) {
    const isValidEmail = input.checkValidity();
    const regEmail = new RegExp(regexp.email, 'u');

    if (!input.value.length) {
      showErrorMessage(input, errorMessageEmpty);
    } else if (!(isValidEmail && regEmail.test(input.value))) {
      showErrorMessage(input, errorIncorrectEmailMessage)
    } else {
      removeErrorMessage(input);
    }

  }
  
  function validatePhone(input) {
    const regPhone = new RegExp(regexp.phone, 'u');

    if (!input.value.length) {
      showErrorMessage(input, errorMessageEmpty);
    } else if (!regPhone.test(input.value)) {
      showErrorMessage(input, errorIncorrectPhoneMessage)
    } else {
      removeErrorMessage(input);
    }

  }
  
  function validateComment(input) {
    if (input.value.length < 2) {
      showErrorMessage(input, errorShortMessage);
    } else if (input.value.length > 1000) {
      showErrorMessage(input, errorLongTextMessage);
    } else {
      removeErrorMessage(input);
    }
  }

  function showErrorMessage(input, message) {
    const parent = input.parentElement;
    const errorField = parent.querySelector('.order-form__error');

    parent.classList.add(errorClass);
    errorField.textContent = message;

    isFieldCorrect[input.name] = false;

  }

  function removeErrorMessage(input) {
    const parent = input.parentElement;
    const errorField = parent.querySelector('.order-form__error');

    parent.classList.remove(errorClass);
    errorField.textContent = '';

    isFieldCorrect[input.name] = true;
  }

  return isFieldCorrect;
}