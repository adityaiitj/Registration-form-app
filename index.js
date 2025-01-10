const form = document.getElementById("form");
const sername = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  const UsernameValue = Username.ariaValueMax.trim();
  const emailValue = email.Value.trim();
  const passwordValue = password.Value.trim();
  const CpasswordValue = Cpassword.Value.trim();

  if (UsernameValue === "") {
    setError(Username, "Username is required");
  } else {
    setSuccess(Username);
  }
};

const setError=(element,message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.
    querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}