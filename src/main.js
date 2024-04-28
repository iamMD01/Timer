const button = document.getElementById("r");
let interval; // Declare interval variable

function showtime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("t").innerText = time;
}

showtime(); // Call showtime() initially to display the current time

// Start the timer immediately when the page loads
interval = setInterval(showtime, 1000);

button.addEventListener("click", () => {
  // If interval is defined, it means the timer is running
  if (interval) {
    clearInterval(interval); // Stop the timer
    interval = undefined; // Set interval to undefined to indicate the timer is stopped
    button.querySelector("h3").innerText = "Start Timer"; // Update button text to "Start Timer"
    // button.style.backgroundColor = "green";
  } else {
    // If interval is undefined, it means the timer is stopped
    interval = setInterval(showtime, 1000); // Start the timer
    button.querySelector("h3").innerText = "Stop Timer"; // Update button text to "Stop Timer"
    // button.style.backgroundColor = 'red'
  }
});
