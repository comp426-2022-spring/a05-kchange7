// Focus div based on nav button click
let currentFocus = "home";

function changeFocus(button) {
  const id = button.id;
  const divID = id.slice(0,-3);
  document.getElementById(currentFocus).className = "hidden";
  if (divID != "home") {
    document.getElementById(divID).className = "active";
  } else {
    document.getElementById("home").classList.remove("hidden");
  }
  currentFocus = divID;
}
// Flip one coin and show coin image to match result when button clicked
async function singleFlip() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch('http://localhost:5555/app/flip', requestOptions);
  let resp = await response.json();
  console.log(`Flip Result: ${resp.flip}`);
  document.getElementById("single-flip-result").src = `./assets/img/${resp.flip}.png`;
}
// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series
async function multiFlip(number) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ number: number })
  };
  const response = await fetch('http://localhost:5555/app/flip/coins', requestOptions);
  let resp = await response.json();
  console.log(resp);
}
// Guess a flip by clicking either heads or tails button
