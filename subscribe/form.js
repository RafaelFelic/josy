// Function to validate email address format
function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Add event listener to form submit event
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    // event.preventDefault();

    var email = document.getElementById("email").value;

    // Check if email is valid
    if (!validateEmail(email)) {
      alert("Invalid email address!");
    } else {
      // Form is valid, send the email
      fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message); // Log the message from the server to the console
          alert("Successfully subscribed to the newsletter!"); // Give feedback to the user
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error. Please try again later."); // Give feedback to the user
        });
    }
  });
