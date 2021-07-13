function inputCalculateTip() {
    var input = document.getElementById("custom_button");

    if (input) {

        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                calculateTip(input.value);
            }
        });
    }
};

function calculateTip(tip) {

    if (tip >= 1) {
        tip = tip / 100;
    }

    var numPeople = document.getElementById("people_value").value;
    var bill = document.getElementById("bill_value").value;

    if (numPeople == 0 || bill == 0) {
        document.getElementById("zero_exception").setAttribute("id", "zero_exception_visible");
    } else {

        if (document.getElementById("zero_exception_visible")) {
            document.getElementById("zero_exception_visible").setAttribute("id", "zero_exception");
        }

        var tipTotal = (bill * tip) / numPeople;
        tipTotal = Math.floor(tipTotal * 100) / 100;

        var billTotal = 0;
        billTotal = (Number(bill) + tipTotal * Number(numPeople)) / Number(numPeople);
        billTotal = Math.floor(billTotal * 100) / 100;

        document.getElementById("tip_amount").innerHTML = "$" + tipTotal;

        document.getElementById("people_amount").innerHTML = "$" + billTotal;
    }
};

function changetoInput() {

    document.getElementById("custom_button").setAttribute("type", "number");

    inputCalculateTip();
};

function resetAll() {

    if (document.getElementById("zero_exception_visible")) {
        document.getElementById("zero_exception_visible").setAttribute("id", "zero_exception");
    }

    document.getElementById("people_value").value = 0;

    document.getElementById("bill_value").value = 0;

    document.getElementById("tip_amount").innerHTML = "$0.00";

    document.getElementById("people_amount").innerHTML = "$0.00";

    document.getElementById("custom_button").setAttribute("type", "button");

    document.getElementById("custom_button").setAttribute("value", "Custom");

};