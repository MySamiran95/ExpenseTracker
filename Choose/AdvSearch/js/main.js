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

function readData() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let chooseDataMonthly = data.getData3; //Adding more sheets , you can keep on adding by including variables
            let chooseDataFor = data.getData4;


            console.log(chooseDataFor)


            //------------Inner Html Data----------------------

            monthlyData.innerHTML = formatIndianNumber(chooseDataMonthly[18][1]); //change here
            todayData.innerHTML = formatIndianNumber(chooseDataMonthly[18][2]); //change here

            familyData.innerHTML = formatIndianNumber(chooseDataFor[40][10]);
            friendData.innerHTML = formatIndianNumber(chooseDataFor[41][10]);
            samiranData.innerHTML = formatIndianNumber(chooseDataFor[42][10]);
            samruddhiData.innerHTML = formatIndianNumber(chooseDataFor[43][10]);
            child1Data.innerHTML = formatIndianNumber(chooseDataFor[44][10]);
            child2Data.innerHTML = formatIndianNumber(chooseDataFor[45][10]);
            parent1Data.innerHTML = formatIndianNumber(chooseDataFor[46][10]);
            parent2Data.innerHTML = formatIndianNumber(chooseDataFor[47][10]);
            //------------Inner Html Data----------------------
        })
}

readData()


///////////////////////////

function formatDecimalsOnly() {
  const elements = document.body.getElementsByTagName("*");

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    for (let j = 0; j < el.childNodes.length; j++) {
      const node = el.childNodes[j];

      if (node.nodeType === 3) { // Text node
        let text = node.nodeValue;

        // Only replace numbers that have a decimal point
        const replaced = text.replace(/-?\d*\.\d+/g, (match) => {
          let num = parseFloat(match);
          if (isNaN(num)) return match;

          // Truncate without rounding
          num = Math.round(num * 100) / 100;
          return num.toString();
        });

        if (replaced !== text) {
          node.nodeValue = replaced;
        }
      }
    }
  }
}


window.onload = function() {
  formatDecimalsOnly();
};