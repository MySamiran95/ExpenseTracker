let form = document.querySelector(".form-inputs");
let submitData = document.querySelector(".submit-button");

function addData() {
    if (!validateForm()) {
        return; // stop execution if validation fails
    }


    submitData.textContent = "Submitting"
    let obj = {
        inputDate: form[0].value,
        inputCategory1: form[1].value,
        inputCategory2: form[2].value,
        inputFor: form[3].value,
        inputFrom: form[4].value,
        inputMOP: form[5].value,
        inputReason: form[6].value,
        inputAmount: form[7].value,
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