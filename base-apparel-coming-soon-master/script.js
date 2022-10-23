const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (obj) => {
  obj.preventDefault();

  let email = document.querySelector('.email-input');
  let result = validateEmail(email);
  console.log(result);
  if (result) {
    document.querySelector("email-form").submit;
  }
});

submitBtn.addEventListener('keydown', (obj) => {
  if (obj.name == "Enter") {
    obj.preventDefault();
    console.log(result);

    let email = document.querySelector('.email-input');
    let result = validateEmail(email);

    if (result) {
      document.querySelector('.email-form').submit;
    }
  }
});

function validateEmail (obj) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (obj.value.match(mailFormat)) {
    document.querySelector('.email-form').classList.remove("invalid");
    return true;
  } else {
    document.querySelector('.email-form').classList.add("invalid");
    return false;
  }
}
