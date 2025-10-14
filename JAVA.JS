document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submit

    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    const errorDiv = document.getElementById('error');
    const greetingDiv = document.getElementById('greeting');

    errorDiv.textContent = '';
    greetingDiv.textContent = '';

    if (name === '') {
        errorDiv.textContent = 'Please enter your name.';
        return;
    }

    // Send the name to the server using fetch
    fetch('greet.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'name=' + encodeURIComponent(name)
    })
    .then(response => response.text())
    .then(data => {
        greetingDiv.textContent = data;
    })
    .catch(error => {
        errorDiv.textContent = 'An error occurred. Please try again later.';
        console.error('Error:', error);
    });
});
