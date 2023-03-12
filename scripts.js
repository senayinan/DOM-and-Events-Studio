// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
  let takeOffButton = document.getElementById("takeoff");
  takeOffButton.addEventListener("click", function() {

    let isReadyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(isReadyToLaunch) {
      let flightStatus = document.getElementById("flightStatus");
      flightStatus.innerText = "Shuttle in flight.";
      let shuttleLightScreen = document.getElementById("shuttleBackground");
      shuttleLightScreen.setAttribute("style", "background-color: blue");
      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      shuttleHeight.innerText = "10000";

    };
  });
  let landingButton = document.getElementById("landing");
  landingButton.addEventListener("click", function() {

    window.alert("The shuttle is landing. Landing gear engaged.");
    
      let flightStatus = document.getElementById("flightStatus");
      flightStatus.innerText = "The shuttle has landed.";
      let shuttleLightScreen = document.getElementById("shuttleBackground");
      shuttleLightScreen.setAttribute("style", "background-color: green");
      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      shuttleHeight.innerText = "0";
  

  });
  let abortMissionButton = document.getElementById("missionAbort");
  abortMissionButton.addEventListener("click", function() {

    window.alert("Confirm that you want to abort the mission.");
    
      let flightStatus = document.getElementById("flightStatus");
      flightStatus.innerText = "Mission aborted.";
      let shuttleLightScreen = document.getElementById("shuttleBackground");
      shuttleLightScreen.setAttribute("style", "background-color: green");
      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      shuttleHeight.innerText = "0";

});


});