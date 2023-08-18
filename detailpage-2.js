document.getElementById('dataForm2').addEventListener('submit', function(event) {
    event.preventDefault(); //prevent from submitting

    //get values from form
    const details = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('mail').value,
        emailConfirmation: document.getElementById('mail2').value,
        gender: document.getElementById('Gender').options[document.getElementById('Gender').selectedIndex].text

    };

    //store in localstorage
    localStorage.setItem('userDetails', JSON.stringify(details));

    //forwards to the payment.html page
    window.location.href ='payment.html';
});

