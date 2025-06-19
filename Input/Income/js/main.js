let form = document.querySelector(".form-inputs");
let submitData = document.querySelector(".submit-button");

function addData() {
    if (!validateForm()) {
        return; // stop execution if validation fails
    }


    submitData.textContent = "Submitting"
    let obj = {
        inputIncomeDate: form[0].value,
        inputIncomeCategory: form[1].value,
        inputIncomeFrom: form[2].value,
        inputIncomeMOP: form[3].value,
        inputIncomeReason: form[4].value,
        inputIncomeAmount: form[5].value,
    }
    fetch(api, {
        method: "POST",
        body: JSON.stringify(obj)
    })
        .then(res => res.text())
        .then(data => {
            alert(data)
            submitData.textContent = "Submit"
            form.reset()
        });
}





//Form Validation -- Empty Field
function validateForm() {
    const form = document.querySelector(".form-inputs");
    const inputs = form.querySelectorAll("input");
    const selects = form.querySelectorAll("select");

    for (const input of inputs) {
        if (input.value.trim() === "") {
            alert("Please fill all input fields.");
            return false;
        }
    }

    for (const select of selects) {
        if (select.value === "") {
            alert("Please select all dropdown options.");
            return false;
        }
    }

    return true; // validation passed
}

//Form Validation -- Empty Field