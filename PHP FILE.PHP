<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['name'])) {
        $name = htmlspecialchars(trim($_POST['name']));
        echo "Hello, $name!";
    } else {
        echo "Name cannot be empty.";
    }
} else {
    echo "Invalid request.";
}
?>

   
