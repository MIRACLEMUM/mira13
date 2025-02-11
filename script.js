// Get elements
const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTipInput = document.getElementById("custom-tip");
const peopleInput = document.getElementById("people");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");
const resetButton = document.getElementById("reset-btn");

let billValue = 0;
let tipPercentage = 0;
let peopleCount = 1;

// Update values on input change
billInput.addEventListener("input", updateValues);
customTipInput.addEventListener("input", () => {
    tipPercentage = parseFloat(customTipInput.value) || 0;
    updateValues();
});
peopleInput.addEventListener("input", updateValues);

// Tip button click event
tipButtons.forEach(button => {
    button.addEventListener("click", function () {
        tipButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        tipPercentage = parseFloat(this.dataset.tip);
        customTipInput.value = ""; // Clear custom tip when a preset is selected
        updateValues();
    });
});

// Update values function
function updateValues() {
    billValue = parseFloat(billInput.value) || 0;
    peopleCount = parseInt(peopleInput.value) || 1;

    if (peopleCount <= 0) peopleCount = 1; // Prevent division by zero

    let tipAmount = (billValue * (tipPercentage / 100)) / peopleCount;
    let totalAmount = (billValue / peopleCount) + tipAmount;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

// Reset button
resetButton.addEventListener("click", () => {
    billInput.value = "";
    peopleInput.value = "";
    customTipInput.value = "";// Get elements
    const billInput = document.getElementById("bill");
    const tipButtons = document.querySelectorAll(".tip-btn");
    const customTipInput = document.getElementById("custom-tip");
    const peopleInput = document.getElementById("people");
    const tipAmountDisplay = document.getElementById("tip-amount");
    const totalAmountDisplay = document.getElementById("total-amount");
    const resetButton = document.getElementById("reset-btn");
    
    let billValue = 0;
    let tipPercentage = 0;
    let peopleCount = 1;
    
    // Update values on input change
    billInput.addEventListener("input", updateValues);
    customTipInput.addEventListener("input", () => {
        tipPercentage = parseFloat(customTipInput.value) || 0;
        updateValues();
    });
    peopleInput.addEventListener("input", updateValues);
    
    // Tip button click event
    tipButtons.forEach(button => {
        button.addEventListener("click", function () {
            tipButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            tipPercentage = parseFloat(this.dataset.tip);
            customTipInput.value = ""; // Clear custom tip when a preset is selected
            updateValues();
        });
    });
    
    // Update values function
    function updateValues() {
        billValue = parseFloat(billInput.value) || 0;
        peopleCount = parseInt(peopleInput.value) || 1;
    
        if (peopleCount <= 0) peopleCount = 1; // Prevent division by zero
    
        let tipAmount = (billValue * (tipPercentage / 100)) / peopleCount;
        let totalAmount = (billValue / peopleCount) + tipAmount;
    
        tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    }
    
    // Reset button
    resetButton.addEventListener("click", () => {
        billInput.value = "";
        peopleInput.value = "";
        customTipInput.value = "";
        tipButtons.forEach(btn => btn.classList.remove("active"));
        tipPercentage = 0;
        tipAmountDisplay.textContent = "$0.00";
        totalAmountDisplay.textContent = "$0.00";
    });
    
    tipButtons.forEach(btn => btn.classList.remove("active"));
    tipPercentage = 0;
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
});


