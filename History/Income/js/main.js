let expenseList = document.querySelector(".lower")

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-IN', {
        day: "2-digit",
        month: 'numeric',
        year: "numeric"
    }).format(date);
}


let expList = finalData.getData47;
let expList1 = expList.map(each => {
    return `
            
            <div class="container">
            <div id="income-color" class="container-left">${formatDate(each[0])}
            </div>
            <div class="container-mid">
                <div class="container-mid-upper">${each[4]}</div>
                <div class="container-mid-lower">
                    <div class="container-mid-lower-left">${each[1]}</div> /
                    <div class="container-mid-lower-right">${each[3]}</div>
                </div>
            </div>
            <div id="income-amount" class="container-right">₹ ${each[5]}</div>
        </div>
            
            
            `
})
expenseList.innerHTML = expList1.join("");
