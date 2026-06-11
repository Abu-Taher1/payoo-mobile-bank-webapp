// login button functionality
document.getElementById('loginButton').addEventListener('click', function(){
    
    const mobileNumber = 1234567890;
    const pinNumber = 12345;

    const mobileNumberInput = document.getElementById('mobile-number').value;
    const mobileNumberInputConverted = parseInt(mobileNumberInput);

    const pinNumberInput = document.getElementById('pin-number').value;
    const pinNumberInputConverted = parseInt(pinNumberInput);

    if(mobileNumberInputConverted === mobileNumber && pinNumberInputConverted === pinNumber){

        window.location.href ="./home.html";

    }
    else {
        alert('Invalid mobile number or pin. Please try again.');
    }

})