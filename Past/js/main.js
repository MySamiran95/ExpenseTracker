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


//Comparison List
let tenContents1 = document.querySelector("#ten1contents");
let tenContents2 = document.querySelector("#ten2contents");
let tenContents3 = document.querySelector("#ten3contents");
let tenContents4 = document.querySelector("#ten4contents");
let tenContents5 = document.querySelector("#ten5contents");
let tenContents6 = document.querySelector("#ten6contents");
let tenContents7 = document.querySelector("#ten7contents");
let tenContents8 = document.querySelector("#ten8contents");
let tenContents9 = document.querySelector("#ten9contents");
let tenContents10 = document.querySelector("#ten10contents");
let tenContents11 = document.querySelector("#ten11contents");
let tenContents12 = document.querySelector("#ten12contents");
let tenContents13 = document.querySelector("#ten13contents");
let tenContents14 = document.querySelector("#ten14contents");
let tenContents15 = document.querySelector("#ten15contents");
let tenContents16 = document.querySelector("#ten16contents");
let tenContents17 = document.querySelector("#ten17contents");
let tenContents18 = document.querySelector("#ten18contents");
//Comparsion List




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


//comparison Amount List
let ten1Amount1 = document.querySelector("#ten1amounts1");
let ten2Amount1 = document.querySelector("#ten2amounts1");
let ten3Amount1 = document.querySelector("#ten3amounts1");
let ten4Amount1 = document.querySelector("#ten4amounts1");
let ten5Amount1 = document.querySelector("#ten5amounts1");
let ten6Amount1 = document.querySelector("#ten6amounts1");
let ten7Amount1 = document.querySelector("#ten7amounts1");
let ten8Amount1 = document.querySelector("#ten8amounts1");
let ten9Amount1 = document.querySelector("#ten9amounts1");
let ten10Amount1 = document.querySelector("#ten10amounts1");
let ten11Amount1 = document.querySelector("#ten11amounts1");
let ten12Amount1 = document.querySelector("#ten12amounts1");
let ten13Amount1 = document.querySelector("#ten13amounts1");
let ten14Amount1 = document.querySelector("#ten14amounts1");
let ten15Amount1 = document.querySelector("#ten15amounts1");
let ten16Amount1 = document.querySelector("#ten16amounts1");
let ten17Amount1 = document.querySelector("#ten17amounts1");
let ten18Amount1 = document.querySelector("#ten18amounts1");

let ten1Amount2 = document.querySelector("#ten1amounts2");
let ten2Amount2 = document.querySelector("#ten2amounts2");
let ten3Amount2 = document.querySelector("#ten3amounts2");
let ten4Amount2 = document.querySelector("#ten4amounts2");
let ten5Amount2 = document.querySelector("#ten5amounts2");
let ten6Amount2 = document.querySelector("#ten6amounts2");
let ten7Amount2 = document.querySelector("#ten7amounts2");
let ten8Amount2 = document.querySelector("#ten8amounts2");
let ten9Amount2 = document.querySelector("#ten9amounts2");
let ten10Amount2 = document.querySelector("#ten10amounts2");
let ten11Amount2 = document.querySelector("#ten11amounts2");
let ten12Amount2 = document.querySelector("#ten12amounts2");
let ten13Amount2 = document.querySelector("#ten13amounts2");
let ten14Amount2 = document.querySelector("#ten14amounts2");
let ten15Amount2 = document.querySelector("#ten15amounts2");
let ten16Amount2 = document.querySelector("#ten16amounts2");
let ten17Amount2 = document.querySelector("#ten17amounts2");
let ten18Amount2 = document.querySelector("#ten18amounts2");
//Comparision List

let samiranAmount = document.querySelector("#samiran-amount");
let samruddhiAmount = document.querySelector("#samruddhi-amount");
let childAmount = document.querySelector("#child-amount");




let calculationData = finalData.getData3;

//Comparision Data
tenContents1.innerHTML = calculationData[60][0];
tenContents2.innerHTML = calculationData[61][0];
tenContents3.innerHTML = calculationData[62][0];
tenContents4.innerHTML = calculationData[63][0];
tenContents5.innerHTML = calculationData[64][0];
tenContents6.innerHTML = calculationData[65][0];
tenContents7.innerHTML = calculationData[66][0];
tenContents8.innerHTML = calculationData[67][0];
tenContents9.innerHTML = calculationData[68][0];
tenContents10.innerHTML = calculationData[69][0];
tenContents11.innerHTML = calculationData[70][0];
tenContents12.innerHTML = calculationData[71][0];
tenContents13.innerHTML = calculationData[72][0];
tenContents14.innerHTML = calculationData[73][0];
tenContents15.innerHTML = calculationData[74][0];
tenContents16.innerHTML = calculationData[75][0];
tenContents17.innerHTML = calculationData[76][0];
tenContents18.innerHTML = calculationData[77][0]


ten1Amount1.innerHTML = formatIndianNumber(calculationData[60][1]);
ten2Amount1.innerHTML = formatIndianNumber(calculationData[61][1]);
ten3Amount1.innerHTML = formatIndianNumber(calculationData[62][1]);
ten4Amount1.innerHTML = formatIndianNumber(calculationData[63][1]);
ten5Amount1.innerHTML = formatIndianNumber(calculationData[64][1]);
ten6Amount1.innerHTML = formatIndianNumber(calculationData[65][1]);
ten7Amount1.innerHTML = formatIndianNumber(calculationData[66][1]);
ten8Amount1.innerHTML = formatIndianNumber(calculationData[67][1]);
ten9Amount1.innerHTML = formatIndianNumber(calculationData[68][1]);
ten10Amount1.innerHTML = formatIndianNumber(calculationData[69][1]);
ten11Amount1.innerHTML = formatIndianNumber(calculationData[70][1]);
ten12Amount1.innerHTML = formatIndianNumber(calculationData[71][1]);
ten13Amount1.innerHTML = formatIndianNumber(calculationData[72][1]);
ten14Amount1.innerHTML = formatIndianNumber(calculationData[73][1]);
ten15Amount1.innerHTML = formatIndianNumber(calculationData[74][1]);
ten16Amount1.innerHTML = formatIndianNumber(calculationData[75][1]);
ten17Amount1.innerHTML = formatIndianNumber(calculationData[76][1]);
ten18Amount1.innerHTML = formatIndianNumber(calculationData[77][1]);


ten1Amount2.innerHTML = formatIndianNumber(calculationData[60][2]);
ten2Amount2.innerHTML = formatIndianNumber(calculationData[61][2]);
ten3Amount2.innerHTML = formatIndianNumber(calculationData[62][2]);
ten4Amount2.innerHTML = formatIndianNumber(calculationData[63][2]);
ten5Amount2.innerHTML = formatIndianNumber(calculationData[64][2]);
ten6Amount2.innerHTML = formatIndianNumber(calculationData[65][2]);
ten7Amount2.innerHTML = formatIndianNumber(calculationData[66][2]);
ten8Amount2.innerHTML = formatIndianNumber(calculationData[67][2]);
ten9Amount2.innerHTML = formatIndianNumber(calculationData[68][2]);
ten10Amount2.innerHTML = formatIndianNumber(calculationData[69][2]);
ten11Amount2.innerHTML = formatIndianNumber(calculationData[70][2]);
ten12Amount2.innerHTML = formatIndianNumber(calculationData[71][2]);
ten13Amount2.innerHTML = formatIndianNumber(calculationData[72][2]);
ten14Amount2.innerHTML = formatIndianNumber(calculationData[73][2]);
ten15Amount2.innerHTML = formatIndianNumber(calculationData[74][2]);
ten16Amount2.innerHTML = formatIndianNumber(calculationData[75][2]);
ten17Amount2.innerHTML = formatIndianNumber(calculationData[76][2]);
ten18Amount2.innerHTML = formatIndianNumber(calculationData[77][2]);




//Comparision Data


//List Data
tenContent1.innerHTML = calculationData[82][0]
tenContent2.innerHTML = calculationData[83][0]
tenContent3.innerHTML = calculationData[84][0]
tenContent4.innerHTML = calculationData[85][0]
tenContent5.innerHTML = calculationData[86][0]
tenContent6.innerHTML = calculationData[87][0]
tenContent7.innerHTML = calculationData[88][0]
tenContent8.innerHTML = calculationData[89][0]
tenContent9.innerHTML = calculationData[90][0]
tenContent10.innerHTML = calculationData[91][0]
tenContent11.innerHTML = calculationData[92][0]
tenContent12.innerHTML = calculationData[93][0]
tenContent13.innerHTML = calculationData[94][0]
tenContent14.innerHTML = calculationData[95][0]
tenContent15.innerHTML = calculationData[96][0]
tenContent16.innerHTML = calculationData[97][0]
tenContent17.innerHTML = calculationData[98][0]
tenContent18.innerHTML = calculationData[99][0]

tenAmount1.innerHTML = formatIndianNumber(calculationData[82][1])
tenAmount2.innerHTML = formatIndianNumber(calculationData[83][1])
tenAmount3.innerHTML = formatIndianNumber(calculationData[84][1])
tenAmount4.innerHTML = formatIndianNumber(calculationData[85][1])
tenAmount5.innerHTML = formatIndianNumber(calculationData[86][1])
tenAmount6.innerHTML = formatIndianNumber(calculationData[87][1])
tenAmount7.innerHTML = formatIndianNumber(calculationData[88][1])
tenAmount8.innerHTML = formatIndianNumber(calculationData[89][1])
tenAmount9.innerHTML = formatIndianNumber(calculationData[90][1])
tenAmount10.innerHTML = formatIndianNumber(calculationData[91][1])
tenAmount11.innerHTML = formatIndianNumber(calculationData[92][1])
tenAmount12.innerHTML = formatIndianNumber(calculationData[93][1])
tenAmount13.innerHTML = formatIndianNumber(calculationData[94][1])
tenAmount14.innerHTML = formatIndianNumber(calculationData[95][1])
tenAmount15.innerHTML = formatIndianNumber(calculationData[96][1])
tenAmount16.innerHTML = formatIndianNumber(calculationData[97][1])
tenAmount17.innerHTML = formatIndianNumber(calculationData[98][1])
tenAmount18.innerHTML = formatIndianNumber(calculationData[99][1])

//------------List Area-----------------//

//Pie Graph 1

const canvas = document.getElementById('myPieChart1');
const ctx = canvas.getContext('2d');

const gradient1 = ctx.createLinearGradient(0, 0, 200, 200);
gradient1.addColorStop(0, '#8e24aa');
gradient1.addColorStop(1, '#f06292');

const gradient2 = ctx.createLinearGradient(0, 0, 200, 200);
gradient2.addColorStop(0, '#1e88e5');
gradient2.addColorStop(1, '#00bcd4');

const gradient3 = ctx.createLinearGradient(0, 0, 200, 200);
gradient3.addColorStop(0, '#fbc02d');
gradient3.addColorStop(1, '#fb8c00'); 


async function fetchChartData() {
    try {

        const result = finalData;

        // Manually inserting values from API response
        const samiranData = result.getData3[104][0];
        const samruddhiData = result.getData3[104][1];
        const childData = result.getData3[104][2];

        const ctx = document.getElementById('myPieChart1').getContext('2d');
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

//Pie Graph 1


//Pie Graph 2

const canvas1 = document.getElementById('myPieChart2');
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
        const familyData = result.getData3[109][0];
        const friendData = result.getData3[109][1];
        const samiranData1 = result.getData3[109][2];
        const samruddhiData1 = result.getData3[109][3];
        const child1Data = result.getData3[109][4];
        const child2Data = result.getData3[109][5];
        const parent1Data = result.getData3[109][6];
        const parent2Data = result.getData3[109][7];
        const othersData = result.getData3[109][8];

        const ctx2 = document.getElementById('myPieChart2').getContext('2d');
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


let pastMonth = document.querySelector(".past-month");
let pastAmount = document.querySelector(".main-board-amount")

pastMonth.innerHTML = formatDate(calculationData[30][1]);
pastAmount.innerHTML = formatIndianNumber(calculationData[113][0])


let month1 = document.querySelector(".month1")
let month2 = document.querySelector(".month2")

month1.innerHTML = calculationData[59][1]
month2.innerHTML = calculationData[59][2]





//Pie Graph 3

const canvas2 = document.getElementById('myPieChart3');
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
        const upiData = result.getData3[128][0];
        const cashData = result.getData3[128][1];
        const debitData = result.getData3[128][2];
        const creditData = result.getData3[128][3];
        const online1Data = result.getData3[128][4];
        const chequeData = result.getData3[128][5];
        const emiData = result.getData3[128][6];
        const pointsData = result.getData3[128][7];
        const others1Data = result.getData3[128][8];

        const ctx3 = document.getElementById('myPieChart3').getContext('2d');
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