//All the Elements/////////
let monthlyData = document.querySelector("#data-monthly");
let todayData = document.querySelector("#data-today");


let samiranData = document.querySelector("#samiran-data");
let samruddhiData = document.querySelector("#samruddhi-data");
let child1Data = document.querySelector("#child1-data");



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

            monthlyData.innerHTML = formatIndianNumber(finalData.getData3[22][1]); //change here
            todayData.innerHTML = formatIndianNumber(finalData.getData3[22][2]); //change here

            samiranData.innerHTML = formatIndianNumber(finalData.getData4[53][1]);
            samruddhiData.innerHTML = formatIndianNumber(finalData.getData4[54][1]);
            child1Data.innerHTML = formatIndianNumber(finalData.getData4[55][1]);
            //------------Inner Html Data----------------------
