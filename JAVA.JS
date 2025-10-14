document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("greetingForm");
  const nameInput = document.getElementById("name");
  const greetingDiv = document.getElementById("greeting");
  const errorDiv = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const name = nameInput.value.trim();

    // Clear previous messages
    greetingDiv.textContent = "";
    errorDiv.textContent = "";

    if (!name) {
      errorDiv.textContent = "Please enter your name.";
      return;
    }

    // Send name to PHP backend via fetch POST
    fetch("greet.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(name)}`
    })
      .then(response => response.text())
      .then(data => {
        greetingDiv.textContent = data;
      })
      .catch(error => {
        errorDiv.textContent = "Something went wrong. Please try again.";
        console.error("Error:", error);
      });
  });
});