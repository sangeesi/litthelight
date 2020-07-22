const name = document.validationForm.name;
const password = document.validationForm.password;
const email = document.validationForm.email;
const age = document.validationForm.age;
const emailRegX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegX = /^[a-zA-Z\s]+$/;
const ageRegX = /^([1-9]?\d|100)$/;
const valid = "valid";
const invalid = "invalid";
// actions
document.validationForm.addEventListener("keyup", () => {
  validator();
});
// functions
function validator() {
  //name Verify
  if (name.value.length <= 2 && name.value.length != 0 ) {
    name.classList.add(invalid);
    name.classList.remove(valid);
  } else if (name.value.length >= 2) {
    name.classList.add(valid);
    name.classList.remove(invalid);
  } else {
    name.classList.remove(valid);
    name.classList.remove(invalid);
  }
  //password validator
  if (password.value.length <= 5 && password.value.length != 0) {
    password.classList.add(invalid);
    password.classList.remove(valid);
  } else if (password.value.length >= 5){
    password.classList.add(valid);
    password.classList.remove(invalid);
  } else {
    password.classList.remove(valid);
    password.classList.remove(invalid);
  }
  // email Verify
  if (emailRegX.test(email.value) != true && email.value.length != 0) {
    email.classList.add(invalid);
    email.classList.remove(valid);
  } else if (emailRegX.test(email.value) == true) {
    email.classList.add(valid);
    email.classList.remove(invalid);
  } else {
    email.classList.remove(valid);
    email.classList.remove(invalid);
  }
// age Validator
  if (ageRegX.test(age.value) != true && age.value.length != 0) {
    age.classList.add(invalid);
    age.classList.remove(valid);
  } else if (ageRegX.test(age.value) == true) {
    age.classList.add(valid);
    age.classList.remove(invalid);
  } else {
    age.classList.remove(valid);
    age.classList.remove(invalid);
  }

}

function submitUser(){
if (name.value || password.value || email.value || age.value != "")
  {
        // Creating a string from input data for preview
var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name.value + "\n" +
                          "Email Address: " + email.value + "\n" +
                          "Age: " + age.value + "\n";

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
  }
else{
var dataPreview = "Please enter valid values";
alert(dataPreview);
}
};

document.getElementById("submit").addEventListener("click", function() {
  submitUser();
});

