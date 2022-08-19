// step-1:add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function () {

    // step-2:get the email address inside the email input field ;
    // always remember to use .value to get form an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    // step-3:get password 
    // 3.1:set id on the html element 
    // 3.2:get the element 
    // 3.3:get the value form the element 

    const passwordlField = document.getElementById('user-password');
    const password = passwordlField.value;

    // danger :do not varify email password on the client side ,
    // step-4: verify email and password 

    if ((email === 'aminul@gmail.com' || email === 'moni22@gmail.com' || email === 'rejaul3@gmail.com' || email === 'soiful@gmail.com') && password === 'nihad') {
        window.location.href = 'bank.html'
    }
    else {
        alert('not match your email address or your password')
    }
})