
async function dinning(){
    const requestData = await fetch("/api/dining");
    const data = await requestData.json();
    const dinningData = data.data;
    console.log(dinningData);
    const tableBody = document.createElement("tbody")
    dinningData.forEach(element => {
        console.log(element.hall_name);
        const row =  tableBody.insertRow();
        const name = row.insertCell(0);
        const location = row.insertCell(1);
        name.innerHTML = `${element.hall_name}`;
        location.innerHTML = `${element.hall_address}`;
    });
    console.log(tableBody);
    table.append(tableBody);
}

const table = document.querySelector(".table");
dinning();
