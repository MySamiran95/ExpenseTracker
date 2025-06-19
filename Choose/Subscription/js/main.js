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

monthlyData.innerHTML = formatIndianNumber(finalData.getData3[8][1]); //change here
todayData.innerHTML = formatIndianNumber(finalData.getData3[8][2]); //change here

familyData.innerHTML = formatIndianNumber(finalData.getData4[14][10]);
friendData.innerHTML = formatIndianNumber(finalData.getData4[15][10]);
samiranData.innerHTML = formatIndianNumber(finalData.getData4[16][10]);
samruddhiData.innerHTML = formatIndianNumber(finalData.getData4[17][10]);
child1Data.innerHTML = formatIndianNumber(finalData.getData4[18][10]);
child2Data.innerHTML = formatIndianNumber(finalData.getData4[19][10]);
parent1Data.innerHTML = formatIndianNumber(finalData.getData4[20][10]);
parent2Data.innerHTML = formatIndianNumber(finalData.getData4[21][10]);
//------------Inner Html Data----------------------
