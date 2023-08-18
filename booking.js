function AddRow() {
    //Get form values
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").options[document.getElementById("time").selectedIndex].text;
    let sla = parseInt(document.getElementById("members1").value) || 0;
    let slc = parseInt(document.getElementById("members2").value) || 0;
    let fa = parseInt(document.getElementById("members3").value) || 0;
    let fc = parseInt(document.getElementById("members4").value) || 0;

    //calculate amount
    let isPeakHour = time.includes("(peak hours)");

    let slaCost = isPeakHour ? 6 : 4;
    let slcCost = isPeakHour ? 3 : 2;
    let faCost = isPeakHour ? 13 : 10;
    let fcCost = isPeakHour ? 8 : 5;

    let totalAmount = sla * slaCost + slc * slcCost + fa * faCost + fc * fcCost;

    //Create an object from the data
    let formData ={
        "Date": date,
        "Time": time,
        "SL Adult": sla +" (" + (sla * slaCost) + " USD)",
        "SL Child": slc +" (" + (slc * slcCost) + " USD)",
        "Foreign Adult": fa +" (" + (fa + faCost) + " USD)",
        "Foreign Child": fc +" (" + (fc + fcCost) + " USD)",
        "Total Amount (USD)": totalAmount
    };
    


    //storedata in localstorage
    localStorage.setItem("formData", JSON.stringify(formData));

    //Redirect to detailpage.html
    window.location.href = "Detailpage.html";

};

