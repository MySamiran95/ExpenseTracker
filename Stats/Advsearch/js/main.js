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
                        label: function(context) {
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
    const response = await fetch(api);
    const lineChartData = await response.json();

    const listData = lineChartData.getData45;                   //Change the data here

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

function readData() {
    fetch(api)
    .then(res => res.json())
    .then(data => {
        let listData = data.getData45;                           //Change the Data Here

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

        let averageData = data.getData3

        let averageAmount = document.querySelector(".average-amount")
        averageAmount.innerHTML = formatIndianNumber(averageData[18][5])
    });
}

readData();


//------------List Area-----------------//


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