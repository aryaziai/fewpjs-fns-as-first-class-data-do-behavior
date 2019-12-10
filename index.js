function handleClick(hjbjhbhj) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}



function greet(timeStr) {
  let hour = parseInt(timeStr, 10);
  debugger;
  if ( hour <= 12) return "Good Morning"
  if ( hour >= 17) return "Good Evening"
  if ( hour < 17 && hour > 12) return "Good Afternoon"
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
