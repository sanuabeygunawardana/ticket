document.addEventListener("DOMContentLoaded", function(){

    const cardNumberInput = document.getElementById("cardNumber");
    const expiryInput = document.getElementById("expiry");
    const paymentForm = document.getElementById("paymentForm");

    cardNumberInput.addEventListener("input", function(){
        //Remove any non-digits and then format with spaces
        let formattedValue = this.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
        this.value = formattedValue;
    });

    expiryInput.addEventListener("input", function(){
        if(this.value.length === 2 && this.value.indexOf('/') === -1){
            this.value += '/';
        } else if (this.value.length === 1 && this.value.indexOf('/') !== -1) {
            this.value = this.value.slice(0, -1);
        }

    });

    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (cardNumberInput.value.length !== 19 || expiryInput.value.length !== 5) {
            alert("Please enter the correct details.");
            return;
        }

        window.location.href = "confirmationpage.html";
    });

    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();
    
        // Basic validation (for demonstration; in a real-world scenario, you'd have more rigorous checks)
        if (cardNumberInput.value.length !== 19 || expiryInput.value.length !== 5) {
            alert("Please ensure you've filled out the card details correctly.");
            return;
        }
    
        // Your original logic to handle the submission can go here
        // ... 
    
        // Redirect to the final (confirmation) page
        window.location.href = "confirm.html"; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Fetch details from sessionStorage
    const storedDetails = JSON.parse(sessionStorage.getItem('userDetails'));

    if (storedDetails) {
        const table = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        
        newRow.insertCell(0).innerText = storedDetails.name;
        newRow.insertCell(1).innerText = storedDetails.phone;
        newRow.insertCell(2).innerText = storedDetails.email;
        newRow.insertCell(3).innerText = storedDetails.emailConfirmation;
        newRow.insertCell(4).innerText = storedDetails.gender;
    }
});


window.onload =function() {
    let formData = JSON.parse(localStorage.getItem("formData"));

    if(formData) {
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");

        for(let key in formData) {
            let tr = document.createElement("tr");

            let th = document.createElement("th");
            th.textContent = key;
            tr.appendChild(th);

            let td = document.createElement("td");
            td.textContent = formData[key];
            tr.appendChild(td);

            tbody.appendChild(tr);

        }

        table.appendChild(tbody);
        document.body.appendChild(table);
    }

}