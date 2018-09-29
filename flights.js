/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cors-anywhere.herokuapp.com/https://apigw.singaporeair.com/appchallenge/api/flight/passenger",
  "method": "POST",
  "headers": {
    "apikey": "aghk73f4x5haxeby7z24d2rc",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Postman-Token": "080e84c1-9730-4797-ae69-0c119dbed7ad"
  },
  "processData": false,
  "data": "{ \"flightNo\": \"SQ890\", \"flightDate\": \"2018-07-20\" }"
}

var obj = $.ajax(settings).done(function (response) {
  
  var obj = response.response;
  var flightNo = obj.flightNo;
  var flightDate = obj.flightDate;
  var loadSummary = obj.loadSummary;
  var businessClassCapacity = obj.businessClassCapacity;
  var businessClassBookedLoad = obj.businessClassBookedLoad;
  var economyClassCapacity = obj.economyClassCapacity;
  var economyClassBookedLoad = obj.economyClassBookedLoad;

  var passengerList = obj.passengerList;
  console.log(passengerList);

  var table = document.getElementsByClassName("passenger-list")[0];

  for (var i = 0; i < passengerList.length; i++){
    var bookingRef = passengerList[i].bookingReference;
    var firstName = passengerList[i].firstName;
    var lastName = passengerList[i].lastName;
    var bookingClass = passengerList[i].bookingClass;
    var checkInStatus = passengerList[i].checkInStatus;
    var travelFlexi = "Yes";
    var contact = "Contact";
    
    var tr = table.insertRow(-1);
    tr.style.border = "solid";
    var td_bookingRef = tr.insertCell(-1);
    td_bookingRef.innerHTML = bookingRef;

    var td_firstName = tr.insertCell(-1);
    td_firstName.innerHTML = firstName ;

    var td_lastName = tr.insertCell(-1);
    td_lastName.innerHTML = lastName;

    var td_bookingClass = tr.insertCell(-1);
    td_bookingClass.innerHTML = bookingClass;

    var td_checkInStatus = tr.insertCell(-1);
    td_checkInStatus.innerHTML = checkInStatus;

    var td_travelFlexi = tr.insertCell(-1);
    td_travelFlexi.innerHTML = travelFlexi;

    var td_contact = tr.insertCell(-1);
    var contact_button = document.createElement("h4");
    contact_button.className = "panel-title btn btn-primary";
    contact_button.style.marginTop = "4px";
    contact_button.style.marginBottom = "4px";

    var contact_button_link = document.createElement("a");
    contact_button_link.setAttribute("href", "chat.html");
    contact_button_link.style.color = "white";
    contact_button_link.innerHTML = contact;
    contact_button.appendChild(contact_button_link);
    td_contact.appendChild(contact_button);
    
    


  }






  
  console.log(loadSummary);

  var flight_number = document.getElementsByClassName("flight-number");
  flight_number[0].innerHTML = flightNo;

  var departure_date = document.getElementsByClassName("departure-date");
  var arrival_date = document.getElementsByClassName("arrival-date");
  departure_date[0].innerHTML = flightDate;
  arrival_date[0].innerHTML = flightDate;

  var checkin_capacity_economy = document.getElementsByClassName("checkin-capacity-economy");
  checkin_capacity_economy[0].setAttribute("aria-valuemax", economyClassCapacity);

  var checkin_bookedload_economy = document.getElementsByClassName("checkin-bookedload-economy");
  checkin_bookedload_economy[0].setAttribute("aria-valuemax", economyClassBookedLoad);






});


$(".pdocCover").css("height","500px");




//Doesnt work:
/*
var xmlhttp = new XMLHttpRequest();
var request = {
   "flightNo": "SQ890", 
   "flightDate": "2018-07-20" 
 };


xmlhttp.open("POST", "https://apigw.singaporeair.com/appchallenge/api/flight/passenger");
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.setRequestHeader("apikey", "aghk73f4x5haxeby7z24d2rc");
xmlhttp.send(JSON.stringify(request));

var data = xmlhttp.responseText;

parsed_data = JSON.parse(data);

console.log(parsed_data);*/

// Create the XHR object.

/*
var invocation = new XMLHttpRequest();
var url = 'https://apigw.singaporeair.com/appchallenge/api/flight/passenger';
var body = {"flightNo": "SQ890", "flightDate": "2018-07-20"};

    
function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('apikey', 'aghk73f4x5haxeby7z24d2rc');
      invocation.setRequestHeader('Content-Type', 'application/json');
      invocation.send(body); 
    }
}

callOtherDomain();*/