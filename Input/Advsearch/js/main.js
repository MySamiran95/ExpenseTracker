let form = document.querySelector(".form-inputs");
let submitData = document.querySelector(".submit-button");

function addData() {

    submitData.textContent = "Submitting"
    let obj = {
        advinputCategory1: form[0].value,
        advinputCategory2: form[1].value,
        advinputFor: form[2].value,
        advinputFrom: form[3].value,
        advinputMOP: form[4].value,
    }
    fetch(api, {
        method: "POST",
        body: JSON.stringify(obj)
    })
        .then(res => res.text())
        .then(data => {
            console.log(data)
            submitData.textContent = "Submit"
            form.reset();
            window.location.href="../../../Choose/AdvSearch/html/advsearch.html"
        });
}

