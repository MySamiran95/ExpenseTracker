//All the Elements/////////
let monthlyData = document.querySelector("#data-monthly");
let todayData = document.querySelector("#data-today");

let familyData = document.querySelector("#family-data");
let friendData = document.querySelector("#friend-data");
let samiranData = document.querySelector("#samiran-data");
let samruddhiData = document.querySelector("#samruddhi-data");
let child1Data = document.querySelector("#child1-data");
let child2Data = document.querySelector("#child2-data");
let parent1Data = document.querySelector("#parent1-data");
let parent2Data = document.querySelector("#parent2-data");


//All the Elements/////////

//Date Function
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-IN', {
        month: 'long',
    }).format(date);
}
//Date Function

//Number Decimal Function
function formatIndianNumber(x) {
    x = x.toString().split('.');
    let intPart = x[0];
    let decPart = x[1] ? '.' + x[1] : '';

    let lastThree = intPart.slice(-3);
    let otherNumbers = intPart.slice(0, -3);

    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }

    let formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + decPart;
    return formatted;
}

//Number Decimal Function

//------------Inner Html Data----------------------

monthlyData.innerHTML = formatIndianNumber(finalData.getData3[20][1]); //change here
todayData.innerHTML = formatIndianNumber(finalData.getData3[20][2]); //change here

familyData.innerHTML = formatIndianNumber(finalData.getData4[40][7]);
friendData.innerHTML = formatIndianNumber(finalData.getData4[41][7]);
samiranData.innerHTML = formatIndianNumber(finalData.getData4[42][7]);
samruddhiData.innerHTML = formatIndianNumber(finalData.getData4[43][7]);
child1Data.innerHTML = formatIndianNumber(finalData.getData4[44][7]);
child2Data.innerHTML = formatIndianNumber(finalData.getData4[45][7]);
parent1Data.innerHTML = formatIndianNumber(finalData.getData4[46][7]);
parent2Data.innerHTML = formatIndianNumber(finalData.getData4[47][7]);
//------------Inner Html Data----------------------
