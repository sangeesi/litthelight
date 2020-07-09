// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() 
{
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var password = document.contactForm.password.value;
    var email = document.contactForm.email.value;
    var age = document.contactForm.age.value;
    
	// Defining error variables with a default value
    var nameErr = passErr = emailErr = ageErr  = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
        } 
    else 
        {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } 
        else 
        {
            printError("nameErr", "");
            nameErr = false;
        }
        }
    // Validate password
    if(password == "")
        {
        printError("passErr", "Please enter a valid password")
        }
        else{
        var password_len = password.length;
        if (password_len == 0 || password_len < 5)
        {
            printError("passErr", "Password length should be atleast 5 chars");
        }    
        else 
        {
            printError("passErr", "");
            passErr = false;
        }
        }

    // Validate email address
    if(email == "") 
        {
        printError("emailErr", "Please enter your email address");
        } 
        else 
        {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(!email.match(regex)) 
            {
            printError("emailErr", "Please enter a valid email address");
            } 
        else
            {
            printError("emailErr", "");
            emailErr = false;
            }
        }
    
    // Validate Age
    if (age == ""){
        printError("ageErr", "Please enter your Age");
    }
    else {
        var numbers = /^[0-9]+$/;
        if (!age.match(numbers)){
            printError("ageErr", "Age must have numeric values only");
        }
        else{
            printError("ageErr", "");
            ageErr = false;
        }

    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || passErr || emailErr || ageErr) == true) {
       return false;
    } 
    else 
    {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Age: " + age + "\n";

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
   
};