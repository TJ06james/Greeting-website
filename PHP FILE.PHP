<?php
// Set header to return JSON
header('Content-Type: application/json');

// Get name from POST
$name = isset($_POST['name']) ? trim($_POST['name']) : '';

// Validate name
if (empty($name)) {
    echo json_encode([
        'success' => false,
        'message' => 'Name cannot be empty.'
    ]);
    exit;
}

// Sanitize name (basic)
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');

// Return greeting
echo json_encode([
    'success' => true,
    'message' => "Hello, $safeName!"
]);
   