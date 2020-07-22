function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function formValidate()
{
    let password = document.registration.password.value,
    username = document.registration.username.value,
    email = document.registration.email.value,
    age = document.registration.age.value;


    if(usernameValidation(username))
        {
        if(passwordValidation(password,7,12))
            {
            if(emailValidation(email))
                {
                if(ageValidation(age))
                {}
                } 
            }
        } 

return false;
}

function usernameValidation(username)
{ 
    var username = document.registration.username.value;
    var letters = /^[A-Za-z]+$/;
    if(username.match(letters))
    {
        printError("nameErr", "");
    }
    else
    {
        var hintMsg =  "Please enter a valid name";
        document.getElementById(username).innerHTML = hintMsg;
        username.focus();
        return false;
    }
}

function passwordValidation(password,min,max)
{
    var password_len = password.length;
    if (password_len == 0 ||password_len >= max || password_len < min)
    {
        alert("Password should not be empty / length be between "+min+" to "+max);
        password.focus();
        return false;
    }
        return true;
}



function ageValidation(age)
{ 
var numbers = /^[0-9]+$/;
if(age.match(numbers))
{
return true;
}
else
{
alert('Age must have numeric values only');
age.focus();
return false;
}
}

function emailValidation(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}