
function numGenerator(){
    //array that will contain 10 unique numbers
    //number range will be from 1 to 46
    //implementation taken from https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
    const randomArray = [];
    while(randomArray.length < 10){
        const x = Math.floor(Math.random() * 45) + 1;
        if(randomArray.indexOf(x) === -1){
            randomArray.push(x);
        }
    }
    //sort the array increasing
    randomArray.sort(function(a,b){return a-b})
    return randomArray;
}

//function will use the random number array to pick 10 unique meals
function dataRandomizer(dataArray){
//array containing 10 random numbers from 1 to 46
const randomArray  = numGenerator();
//array to hold 10 random meals
const newArray = [];
//counter to iterate
var counter = 0;

while (counter < randomArray.length) {
    newArray[counter] = dataArray[randomArray[counter]];
    counter++;
}
return newArray;
}

async function dinning(){
    const requestData = await fetch("/api/macroMealChart");
    const data = await requestData.json();
    const randomizedData = dataRandomizer(data);
    const tableBody = document.createElement("tbody")
    randomizedData.forEach(element => {
        const row =  tableBody.insertRow();
        const mealId = row.insertCell(0);
        const name = row.insertCell(1);
        const calories = row.insertCell(2);
        const carbs = row.insertCell(3);
        const sodium = row.insertCell(4);
        const protein = row.insertCell(5);
        const fat = row.insertCell(6);
        const cholesterol = row.insertCell(7);
        mealId.innerHTML = `${element.id}`;
        name.innerHTML = `${element.name}`;
        calories.innerHTML = `${element.calories}`;
        carbs.innerHTML = `${element.carbs}`;
        sodium.innerHTML = `${element.sodium}`;
        protein.innerHTML = `${element.protein}`;
        fat.innerHTML = `${element.fat}`;
        cholesterol.innerHTML = `${element.cholesterol}`;
    });
    console.log(tableBody);
    table.append(tableBody);
    
    //stack graph creation
    console.log(randomizedData);
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
                text: "Meals and their Macros"
            },
            axisX: {
                title: "Meal Names"
            },
            axisY: {
                title: "Macros"
            },
            toolTip: {
                shared: true
            },
            legend:{
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                type: "stackedBar",
                name: "Calories",
                showInLegend: "true",
                dataPoints: [
                    { y: randomizedData[0].calories, label: randomizedData[0].name },
                    { y: randomizedData[1].calories, label: randomizedData[1].name },
                    { y: randomizedData[2].calories, label: randomizedData[2].name },
                    { y: randomizedData[3].calories, label: randomizedData[3].name },
                    { y: randomizedData[4].calories, label: randomizedData[4].name },
                    { y: randomizedData[5].calories, label: randomizedData[5].name },
                    { y: randomizedData[6].calories, label: randomizedData[6].name },
                    { y: randomizedData[7].calories, label: randomizedData[7].name },
                    { y: randomizedData[8].calories, label: randomizedData[8].name },
                    { y: randomizedData[9].calories, label: randomizedData[9].name }
                ]
            },
            {
                type: "stackedBar",
                name: "Carbs",
                showInLegend: "true",
                dataPoints: [
                    { y: randomizedData[0].carbs, label: randomizedData[0].name },
                    { y: randomizedData[1].carbs, label: randomizedData[1].name },
                    { y: randomizedData[2].carbs, label: randomizedData[2].name },
                    { y: randomizedData[3].carbs, label: randomizedData[3].name },
                    { y: randomizedData[4].carbs, label: randomizedData[4].name },
                    { y: randomizedData[5].carbs, label: randomizedData[5].name },
                    { y: randomizedData[6].carbs, label: randomizedData[6].name },
                    { y: randomizedData[7].carbs, label: randomizedData[7].name },
                    { y: randomizedData[8].carbs, label: randomizedData[8].name },
                    { y: randomizedData[9].carbs, label: randomizedData[9].name }
                ]
            },
            {
                type: "stackedBar",
                name: "Sodium",
                showInLegend: "true",
                dataPoints: [
                    { y: randomizedData[0].sodium, label: randomizedData[0].name },
                    { y: randomizedData[1].sodium, label: randomizedData[1].name },
                    { y: randomizedData[2].sodium, label: randomizedData[2].name },
                    { y: randomizedData[3].sodium, label: randomizedData[3].name },
                    { y: randomizedData[4].sodium, label: randomizedData[4].name },
                    { y: randomizedData[5].sodium, label: randomizedData[5].name },
                    { y: randomizedData[6].sodium, label: randomizedData[6].name },
                    { y: randomizedData[7].sodium, label: randomizedData[7].name },
                    { y: randomizedData[8].sodium, label: randomizedData[8].name },
                    { y: randomizedData[9].sodium, label: randomizedData[9].name }
                ]
            },
            {
                type: "stackedBar",
                name: "Protein",
                showInLegend: "true",
                dataPoints: [
                    { y: randomizedData[0].protein, label: randomizedData[0].name },
                    { y: randomizedData[1].protein, label: randomizedData[1].name },
                    { y: randomizedData[2].protein, label: randomizedData[2].name },
                    { y: randomizedData[3].protein, label: randomizedData[3].name },
                    { y: randomizedData[4].protein, label: randomizedData[4].name },
                    { y: randomizedData[5].protein, label: randomizedData[5].name },
                    { y: randomizedData[6].protein, label: randomizedData[6].name },
                    { y: randomizedData[7].protein, label: randomizedData[7].name },
                    { y: randomizedData[8].protein, label: randomizedData[8].name },
                    { y: randomizedData[9].protein, label: randomizedData[9].name }
                ]
            },
            {
                type: "stackedBar",
                name: "Fat",
                showInLegend: "true",
                dataPoints: [
                    { y: randomizedData[0].fat, label: randomizedData[0].name },
                    { y: randomizedData[1].fat, label: randomizedData[1].name },
                    { y: randomizedData[2].fat, label: randomizedData[2].name },
                    { y: randomizedData[3].fat, label: randomizedData[3].name },
                    { y: randomizedData[4].fat, label: randomizedData[4].name },
                    { y: randomizedData[5].fat, label: randomizedData[5].name },
                    { y: randomizedData[6].fat, label: randomizedData[6].name },
                    { y: randomizedData[7].fat, label: randomizedData[7].name },
                    { y: randomizedData[8].fat, label: randomizedData[8].name },
                    { y: randomizedData[9].fat, label: randomizedData[9].name }
                ]
            },
            {
                type: "stackedBar",
                name: "cholesterol",
                showInLegend: "true",
                dataPoints: [
                    { y: randomizedData[0].cholesterol, label: randomizedData[0].name },
                    { y: randomizedData[1].cholesterol, label: randomizedData[1].name },
                    { y: randomizedData[2].cholesterol, label: randomizedData[2].name },
                    { y: randomizedData[3].cholesterol, label: randomizedData[3].name },
                    { y: randomizedData[4].cholesterol, label: randomizedData[4].name },
                    { y: randomizedData[5].cholesterol, label: randomizedData[5].name },
                    { y: randomizedData[6].cholesterol, label: randomizedData[6].name },
                    { y: randomizedData[7].cholesterol, label: randomizedData[7].name },
                    { y: randomizedData[8].cholesterol, label: randomizedData[8].name },
                    { y: randomizedData[9].cholesterol, label: randomizedData[9].name }
                ]
            }]
        });
        chart.render();
        
        function toggleDataSeries(e) {
            if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
            }
}


const table = document.querySelector(".table");
dinning();