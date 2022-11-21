const form = document.getElementById("form")
const totalText = document.getElementById("total")
const tipText = document.getElementById("tipPerPerson")
const error = document.getElementById("error")
const customTipField2 = document.getElementById("tip")
const resetButton = document.getElementById("reset")
const toggleButton = document.getElementById("toggle")

toggleButton.addEventListener('click', () => {
    let body = document.querySelector('.body')
    body.classList.toggle('light')
})

function calculator() {
    const billAmount = document.getElementById("billAmount").value
    const numberOfPeople = document.getElementById("numberOfPeople").value
    let tip = document.querySelector("input[type = 'radio']:checked").value
    let total = (((tip * billAmount) / numberOfPeople).toFixed(2)) * 1
    let tipAmount = (((tip * billAmount) - billAmount) / numberOfPeople).toFixed(2) * 1

    if (numberOfPeople === "0") {
        error.textContent = "Can't be 0!"
    }

    if (tipAmount < 0) {
        tipText.textContent = "0.00"
    }

    if (isNaN(total) || (total === Infinity)) {
        totalText.textContent = "0.00"

    } else {
        totalText.textContent = total
        tipText.textContent = tipAmount
    }
}

function customTip() {
    const billAmount = document.getElementById("billAmount").value *1
    const numberOfPeople = document.getElementById("numberOfPeople").value
    let customTip = document.getElementById("tip").value/100
    let tipAmount = ((customTip * billAmount) / numberOfPeople).toFixed(2)*1
    let total = ((billAmount + tipAmount) / numberOfPeople).toFixed(2)*1

    if (numberOfPeople === "0") {
        error.textContent = "Can't be 0!"
    }

    if (isNaN(total) || (total === Infinity)) {
        totalText.textContent = "0.00"

    } else {
        totalText.textContent = total
        tipText.textContent = tipAmount
    }
}

customTipField2.addEventListener('input', (event) => {
});
oninput = (event) => {
    customTip()
};

form.addEventListener('change', function (event) {
    event.preventDefault()
    calculator()
})

resetButton.addEventListener("click", function (event) {
    totalText.textContent = "0.00"
    tipText.textContent = "0.00"
    form.reset()

})

