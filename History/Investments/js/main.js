let expenseList = document.querySelector(".lower")

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-IN', {
        day: "2-digit",
        month: 'numeric',
        year: "numeric"
    }).format(date);
}


let expList = finalData.getData24;
let expList1 = expList.map(each => {
    return `
            
            <div class="container">
            <div id="income-color" class="container-left">${formatDate(each[0])}
            </div>
            <div class="container-mid">
                <div class="container-mid-upper">${each[6]}</div>
                <div class="container-mid-lower">
                    <div class="container-mid-lower-left">${each[5]}</div> /
                    <div class="container-mid-lower-right">${each[4]}</div>
                </div>
            </div>
            <div id="income-amount" class="container-right">₹ ${each[7]}</div>
        </div>
            
            
            `
})
expenseList.innerHTML = expList1.join("");
