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

