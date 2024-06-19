function formsubmit() {
    var name = document.forms.contact.Name.value;
    var phn = document.forms.contact.phn.value;
    var dob = document.forms.contact.dob.value;
    var nationality = document.forms.contact.nationality.value;
    var zipcode = document.forms.contact.zip.value;
    var email = document.forms.contact.email.value;
    var pass = document.forms.contact.pass.value;
    var repass = document.forms.contact.repass.value;
    var occ = document.forms.contact.occupation.value;
    var updates = document.querySelector('input[name="updates"]:checked');

    var nameRegex = /^[a-zA-Z]+$/;
    var phoneRegex = /^\d{10}$/;
    var emailRegex = /^\w+@([a-zA-Z_]+\.)+[a-zA-Z]{2,3}$/;
    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    var zipRegex = /^\d{6}$/;
   

    if (name === "" || phn === "" || dob === "" || nationality === "" || zipcode === "" ||
        email === "" || pass === "" || repass === "" || !updates || occ ==="") {
        alert("All fields must be filled out");
        return false;
    }
    if (!name.match(nameRegex)) {
      alert("Name should not contain any Digits");
        document.forms.contact.Name.focus(); // Focus on the input field
        document.forms.contact.Name.select();
        return false;
    }

    if (!phn.match(phoneRegex)) {
        alert("Phone number must be a valid 10-digit number");
        document.forms.contact.phn.focus(); // Focus on the input field
        document.forms.contact.phn.select();
        return false;
    }
    if (!zipcode.match(zipRegex)) {
        alert("Zip code must be a valid 5-digit number");
        document.forms.contact.zip.focus(); // Focus on the input field
        document.forms.contact.zip.select();
        return false;
    }


    if (!email.match(emailRegex)) {
        alert("Invalid email address");
        document.forms.contact.email.focus(); // Focus on the input field
        document.forms.contact.email.select();
        return false;
    }

    if (!pass.match(passRegex)) {
        alert("Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one digit");
        document.forms.contact.repass.select(); // Focus on the input field
        document.forms.contact.pass.select();
        return false;
    }

    if (pass !== repass) {
        alert("Passwords do not match");
        document.forms.contact.repass.select(); // Focus on the input field
        document.forms.contact.pass.select();
        return false;
    }
    if(!updates){
      alert("Kindly Choose an Option");
    }
  
    window.alert(`Hey ${name} ! Your message is delivered.\nSudharson will get back to you soon !`);
    return true;
}