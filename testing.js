


function setTime() {
    var vegasTime = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', timeStyle: 'full', dateStyle: 'short' }).format(new Date());
    document.getElementById('vegas-time').innerHTML = "Current Time/Date : " + vegasTime;

}

function checkEmail() {
    email = document.getElementById('emailInput').value;
    var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email) return false;

    var valid = tester.test(email);
    if(!valid){
        console.log(false);
        document.getElementById('checkedEmail').innerHTML = "Please enter email - Invalid Email Address";
        return false;
    }
  
    var emailParts = email.split('@');

    if(emailParts[0].length >64){
        console.log("false");
        document.getElementById('checkedEmail').innerHTML = "Please enter email - Invalid Email Address";
    }
    var domainParts = emailParts[1].split(".");
    if(domainParts.some(function(part) { return part.length > 63})){
        console.log("false");
        document.getElementById('checkedEmail').innerHTML = "Please enter email - Invalid Email Address";
    }
  
    console.log('sucess');
    document.getElementById('checkedEmail').innerHTML = "Please enter email - Succesfully Added you to the Newsletter!";
    return true;
  };