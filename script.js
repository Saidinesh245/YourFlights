document.addEventListener('DOMContentLoaded', function () {
    var oneWayRadioButton = document.getElementById("one-way");
    var roundRadioButton = document.getElementById("round-trip");
    var arriveBox = document.getElementById("arrive-input-box");

    oneWayRadioButton.addEventListener("click", function () {
        arriveBox.style.display = "none";
    });

    roundRadioButton.addEventListener("click", function() {
        arriveBox.style.display = "";
    })

});

function swapAirports(){
    var departingAirport = document.getElementById("departing-airport");
    var arrivalAirport = document.getElementById("arrival-airport");

    var tempValue = departingAirport.value;
    departingAirport.value = arrivalAirport.value;
    arrivalAirport.value = tempValue; 
}

function searchFlights(){
    
}