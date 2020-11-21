<?php

require_once('/usr/share/php/simulation-schema/vendor/autoload.php');
use JsonSchema\SchemaStorage;
use JsonSchema\Validator;
use JsonSchema\Constraints\Factory;
use JsonSchema\Constraints\Constraint;


// Accept Input and print it
$data = json_decode(file_get_contents('php://input'));

// Add correct path for comparison Schema
$path = file_get_contents(__DIR__ . '/../schema/Effect.json');
$JSONFile = json_decode($path);

// Create new Validator obj and validate $data against the schema ($JSONFile)
$validator = new Validator();
$validator-> validate($data, $JSONFile); // validates!

if ($validator->isValid()) {
    echo "The supplied JSON validates against the schema.\n";
} else {
    echo "JSON does not validate. Violations:\n";
    foreach ($validator->getErrors() as $error) {
        printf("[%s] %s\n", $error['property'], $error['message']);
    }
}
?>
