let expenseList = document.querySelector(".lower")

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-IN', {
        day: "2-digit",
        month: 'numeric',
        year: "numeric"
    }).format(date);
}

function formatIndianNumber(x) {
  x = x.toString().split('.');
  let intPart = x[0];
  let decPart = x[1] ? '.' + x[1] : '';
  let lastThree = intPart.slice(-3);
  let otherNumbers = intPart.slice(0, -3);
  if (otherNumbers !== '') lastThree = ',' + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + decPart;
}


let expList = finalData.getData22;
let expList1 = expList.map(each => {
    return `
            
            <div class="container">
            <div class="container-left">${formatDate(each[0])}
            </div>
            <div class="container-mid">
                <div class="container-mid-upper">${each[6]}</div>
                <div class="container-mid-lower">
                    <div class="container-mid-lower-left">${each[5]}</div> /
                    <div class="container-mid-lower-right">${each[4]}</div>
                </div>
            </div>
            <div class="container-right">₹ ${formatIndianNumber(each[7])}</div>
        </div>
            
            
            `
})
expenseList.innerHTML = expList1.join("");
