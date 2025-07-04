//------------Chart Area-----------------

let amountLable = [];
let dateLable = [];

async function chartData() {
    await getChartData();

    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    // Create a red vertical gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#d90429');       // Bright red at top
    gradient.addColorStop(1, '#e0e0e0');       // Clean white at bottom

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dateLable,
            datasets: [{
                label: 'Amount',
                data: amountLable,
                fill: true,
                backgroundColor: gradient,
                borderColor: '#8b0000',       // Deep red border
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 6,
                pointBackgroundColor: 'white',
                pointBorderColor: '#d90429',
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (context) {
                            return `₹ ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                x: {
                    reverse: true,
                    grid: {
                        display: false,
                        tickLength: 4
                    }
                }
            }
        }
    });
}

chartData();


// Fetch Data from API and Filter
async function getChartData() {

    const lineChartData = finalData;

    const listData = lineChartData.getData44;                   //Change the data here

    amountLable = [];
    dateLable = [];

    listData.forEach(item => {
        const date = item[1];   // Month
        const amount = item[3]; // Amount

        if (amount && String(amount).trim() !== '') {
            dateLable.push(date);
            amountLable.push(parseFloat(amount));
        }
    });
}

//------------Chart Area-----------------


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

//------------List Area-----------------//

let monthlyList = document.querySelector(".lower-content-content")
let containerMid = document.querySelector(".container-mid")

let tenContent1 = document.querySelector("#ten1content");
let tenContent2 = document.querySelector("#ten2content");
let tenContent3 = document.querySelector("#ten3content");
let tenContent4 = document.querySelector("#ten4content");
let tenContent5 = document.querySelector("#ten5content");
let tenContent6 = document.querySelector("#ten6content");
let tenContent7 = document.querySelector("#ten7content");
let tenContent8 = document.querySelector("#ten8content");
let tenContent9 = document.querySelector("#ten9content");
let tenContent10 = document.querySelector("#ten10content");
let tenContent11 = document.querySelector("#ten11content");
let tenContent12 = document.querySelector("#ten12content");
let tenContent13 = document.querySelector("#ten13content");
let tenContent14 = document.querySelector("#ten14content");
let tenContent15 = document.querySelector("#ten15content");
let tenContent16 = document.querySelector("#ten16content");
let tenContent17 = document.querySelector("#ten17content");
let tenContent18 = document.querySelector("#ten18content");

let tenAmount1 = document.querySelector("#ten1amount");
let tenAmount2 = document.querySelector("#ten2amount");
let tenAmount3 = document.querySelector("#ten3amount");
let tenAmount4 = document.querySelector("#ten4amount");
let tenAmount5 = document.querySelector("#ten5amount");
let tenAmount6 = document.querySelector("#ten6amount");
let tenAmount7 = document.querySelector("#ten7amount");
let tenAmount8 = document.querySelector("#ten8amount");
let tenAmount9 = document.querySelector("#ten9amount");
let tenAmount10 = document.querySelector("#ten10amount");
let tenAmount11 = document.querySelector("#ten11amount");
let tenAmount12 = document.querySelector("#ten12amount");
let tenAmount13 = document.querySelector("#ten13amount");
let tenAmount14 = document.querySelector("#ten14amount");
let tenAmount15 = document.querySelector("#ten15amount");
let tenAmount16 = document.querySelector("#ten16amount");
let tenAmount17 = document.querySelector("#ten17amount");
let tenAmount18 = document.querySelector("#ten18amount");

let samiranAmount = document.querySelector("#samiran-amount");
let samruddhiAmount = document.querySelector("#samruddhi-amount");
let childAmount = document.querySelector("#child-amount");


let listData = finalData.getData44;                           //Change the Data Here

let dataList = listData.map(each => {
    const percentValue = parseFloat(each[5]?.toString().replace('%', '') || 0);
    const color = percentValue < 0.1 ? '#abff33' : '#ff6161;';
    const amount = each[3];

    // Safely check if amount is empty/blank
    if (!amount || String(amount).trim() === '') {
        return ''; // Skip this item
    }

    return `
                <div class="container">
                    <div class="container-left">
                        <div class="month-container">
                            <div class="month-container-upper">${each[1]}</div>
                        </div>
                    </div>
                    <div class="container-mid">
                        <div class="container-mid-left" style="color: ${color};" >${each[5]}</div>
                    </div>
                    <div class="container-right" style="color: ${color};">₹&nbsp;${formatIndianNumber(amount)}</div>
                </div>
            `;
});

monthlyList.innerHTML = dataList.join("");

let calculationData = finalData.getData3;


tenContent1.innerHTML = calculationData[34][0]
tenContent2.innerHTML = calculationData[35][0]
tenContent3.innerHTML = calculationData[36][0]
tenContent4.innerHTML = calculationData[37][0]
tenContent5.innerHTML = calculationData[38][0]
tenContent6.innerHTML = calculationData[39][0]
tenContent7.innerHTML = calculationData[40][0]
tenContent8.innerHTML = calculationData[41][0]
tenContent9.innerHTML = calculationData[42][0]
tenContent10.innerHTML = calculationData[43][0]
tenContent11.innerHTML = calculationData[44][0]
tenContent12.innerHTML = calculationData[45][0]
tenContent13.innerHTML = calculationData[46][0]
tenContent14.innerHTML = calculationData[47][0]
tenContent15.innerHTML = calculationData[48][0]
tenContent16.innerHTML = calculationData[49][0]
tenContent17.innerHTML = calculationData[50][0]
tenContent18.innerHTML = calculationData[51][0]

tenAmount1.innerHTML = formatIndianNumber(calculationData[34][1])
tenAmount2.innerHTML = formatIndianNumber(calculationData[35][1])
tenAmount3.innerHTML = formatIndianNumber(calculationData[36][1])
tenAmount4.innerHTML = formatIndianNumber(calculationData[37][1])
tenAmount5.innerHTML = formatIndianNumber(calculationData[38][1])
tenAmount6.innerHTML = formatIndianNumber(calculationData[39][1])
tenAmount7.innerHTML = formatIndianNumber(calculationData[40][1])
tenAmount8.innerHTML = formatIndianNumber(calculationData[41][1])
tenAmount9.innerHTML = formatIndianNumber(calculationData[42][1])
tenAmount10.innerHTML = formatIndianNumber(calculationData[43][1])
tenAmount11.innerHTML = formatIndianNumber(calculationData[44][1])
tenAmount12.innerHTML = formatIndianNumber(calculationData[45][1])
tenAmount13.innerHTML = formatIndianNumber(calculationData[46][1])
tenAmount14.innerHTML = formatIndianNumber(calculationData[47][1])
tenAmount15.innerHTML = formatIndianNumber(calculationData[48][1])
tenAmount16.innerHTML = formatIndianNumber(calculationData[49][1])
tenAmount17.innerHTML = formatIndianNumber(calculationData[50][1])
tenAmount18.innerHTML = formatIndianNumber(calculationData[51][1])

samiranAmount.innerHTML = formatIndianNumber(calculationData[56][0]);
samruddhiAmount.innerHTML = formatIndianNumber(calculationData[56][1]);
childAmount.innerHTML = formatIndianNumber(calculationData[56][2]);



//------------List Area-----------------//

const canvas = document.getElementById('myPieChart');
const ctx = canvas.getContext('2d');

const gradient1 = ctx.createLinearGradient(0, 0, 200, 200);
gradient1.addColorStop(0, '#8e24aa');
gradient1.addColorStop(1, '#f06292'); // Berry Pink

const gradient2 = ctx.createLinearGradient(0, 0, 200, 200);
gradient2.addColorStop(0, '#1e88e5');
gradient2.addColorStop(1, '#00bcd4');

const gradient3 = ctx.createLinearGradient(0, 0, 200, 200);
gradient3.addColorStop(0, '#fbc02d'); // Amber
gradient3.addColorStop(1, '#fb8c00'); // Orange



async function fetchChartData() {
    try {

        const result = finalData;

        // Manually inserting values from API response
        const samiranData = result.getData3[56][0];
        const samruddhiData = result.getData3[56][1];
        const childData = result.getData3[56][2];

        const ctx = document.getElementById('myPieChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Samiran', 'Samruddhi', 'Child'],
                datasets: [{
                    data: [samiranData, samruddhiData, childData], // 🎯 No map() used, values assigned directly
                    backgroundColor: [
                        gradient1, gradient2, gradient3
                    ],
                    borderColor: '#e0e0e0',
                    borderWidth: 4,
                    borderRadius: 12,
                    hoverOffset: 18
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'black'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching chart data:', error);
    }
}

fetchChartData();


//////////////////////////


let averageData = finalData.getData3
let averageAmount = document.querySelector(".average-amount")

averageAmount.innerHTML = formatIndianNumber(averageData[20][5])




///////////Pie Chart 2/////////////////

//Pie Graph 2

const canvas1 = document.getElementById('myPieChart1');
const ctx2 = canvas1.getContext('2d');

const gradient4 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient4.addColorStop(0, '#8e24aa'); // Deep purple
gradient4.addColorStop(1, '#f06292'); // Pink

const gradient5 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient5.addColorStop(0, '#1e88e5'); // Blue
gradient5.addColorStop(1, '#00bcd4'); // Teal

const gradient6 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient6.addColorStop(0, '#5e35b1'); // Medium Violet
gradient6.addColorStop(1, '#9575cd'); // Light Purple

const gradient7 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient7.addColorStop(0, '#43a047'); // Green
gradient7.addColorStop(1, '#aed581'); // Light Green

const gradient8 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient8.addColorStop(0, '#e53935'); // Red
gradient8.addColorStop(1, '#ff7043'); // Orange

const gradient9 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient9.addColorStop(0, '#5e35b1'); // Indigo
gradient9.addColorStop(1, '#7e57c2'); // Light Purple

const gradient10 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient10.addColorStop(0, '#00897b'); // Teal
gradient10.addColorStop(1, '#4db6ac'); // Aqua

const gradient11 = ctx2.createLinearGradient(0, 0, 200, 200);
gradient11.addColorStop(0, '#3949ab'); // Indigo Blue
gradient11.addColorStop(1, '#7986cb'); // Light Indigo

const gradient12 = ctx2.createLinearGradient(0, 0, 300, 300);
gradient12.addColorStop(0, '#a18cd1');  // Soft Violet
gradient12.addColorStop(1, '#fbc2eb');  // Light Pink


async function fetchChartData1() {
    try {

        const result = finalData;

        // Manually inserting values from API response
        const familyData = result.getData3[123][0];
        const friendData = result.getData3[123][1];
        const samiranData1 = result.getData3[123][2];
        const samruddhiData1 = result.getData3[123][3];
        const child1Data = result.getData3[123][4];
        const child2Data = result.getData3[123][5];
        const parent1Data = result.getData3[123][6];
        const parent2Data = result.getData3[123][7];
        const othersData = result.getData3[123][8];

        const ctx2 = document.getElementById('myPieChart1').getContext('2d');
        new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: ['Family', 'Friend', 'Samiran', 'Samruddhi', 'Child 1', 'Child 2', 'Parent 1', 'Parent 2', 'Others'],
                datasets: [{
                    data: [familyData, friendData, samiranData1, samruddhiData1, child1Data, child2Data, parent1Data, parent2Data, othersData], // 🎯 No map() used, values assigned directly
                    backgroundColor: [
                        gradient4, gradient5, gradient6, gradient7, gradient8, gradient9, gradient10, gradient11 , gradient12
                    ],
                    borderColor: '#e0e0e0',
                    borderWidth: 4,
                    borderRadius: 12,
                    hoverOffset: 18
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'black'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching chart data:', error);
    }
}

fetchChartData1();

//Pie Graph 2



///////////Pie Chart 3/////////////////

//Pie Graph 3

const canvas2 = document.getElementById('myPieChart2');
const ctx3 = canvas2.getContext('2d');

const gradient13 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient13.addColorStop(0, '#8e24aa'); // Deep purple
gradient13.addColorStop(1, '#f06292'); // Pink

const gradient14 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient14.addColorStop(0, '#1e88e5'); // Blue
gradient14.addColorStop(1, '#00bcd4'); // Teal

const gradient15 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient15.addColorStop(0, '#5e35b1'); // Medium Violet
gradient15.addColorStop(1, '#9575cd'); // Light Purple

const gradient16 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient16.addColorStop(0, '#43a047'); // Green
gradient16.addColorStop(1, '#aed581'); // Light Green

const gradient17 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient17.addColorStop(0, '#e53935'); // Red
gradient17.addColorStop(1, '#ff7043'); // Orange

const gradient18 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient18.addColorStop(0, '#5e35b1'); // Indigo
gradient18.addColorStop(1, '#7e57c2'); // Light Purple

const gradient19 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient19.addColorStop(0, '#00897b'); // Teal
gradient19.addColorStop(1, '#4db6ac'); // Aqua

const gradient20 = ctx3.createLinearGradient(0, 0, 200, 200);
gradient20.addColorStop(0, '#3949ab'); // Indigo Blue
gradient20.addColorStop(1, '#7986cb'); // Light Indigo

const gradient21 = ctx3.createLinearGradient(0, 0, 300, 300);
gradient21.addColorStop(0, '#a18cd1');  // Soft Violet
gradient21.addColorStop(1, '#fbc2eb');  // Light Pink


async function fetchChartData2() {
    try {

        const result = finalData;

        // Manually inserting values from API response
        const upiData = result.getData3[132][0];
        const cashData = result.getData3[132][1];
        const debitData = result.getData3[132][2];
        const creditData = result.getData3[132][3];
        const online1Data = result.getData3[132][4];
        const chequeData = result.getData3[132][5];
        const emiData = result.getData3[132][6];
        const pointsData = result.getData3[132][7];
        const others1Data = result.getData3[132][8];

        const ctx3 = document.getElementById('myPieChart2').getContext('2d');
        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ['UPI', 'Cash', 'Debit Card', 'Credit Card', 'Online', 'Cheque', 'EMI', 'Points/Rewards', 'Others'],
                datasets: [{
                    data: [upiData, cashData, debitData, creditData, online1Data, chequeData, emiData, pointsData, others1Data], // 🎯 No map() used, values assigned directly
                    backgroundColor: [
                        gradient13, gradient14, gradient15, gradient16, gradient17, gradient18, gradient19, gradient20 , gradient21
                    ],
                    borderColor: '#e0e0e0',
                    borderWidth: 4,
                    borderRadius: 12,
                    hoverOffset: 18
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'black'
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching chart data:', error);
    }
}

fetchChartData2();

//Pie Graph 3