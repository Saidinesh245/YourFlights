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

async function searchFlights(){
    const departureID = document.getElementById("departing-airport").value;
    const arrivalID = document.getElementById("arrival-airport").value;
    const outboundDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('arrival-date').value;
    const type = document.querySelector('input[name="trip"]:checked').value;
    const travelClass = document.querySelector('.class-status').value;

    const query = `departure_id=${departureID}&arrival_id=${arrivalID}&outbound_date=${outboundDate}&return_date=${returnDate}&type=${type}&travel_class=${travelClass}`;

    const response = await fetch(`http://127.0.0.1:3000/search?${query}`);
    var data = await response.json();
    console.log(data);
}