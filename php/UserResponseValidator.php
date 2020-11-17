<?php

require_once('/usr/share/php/simulation-schema/vendor/autoload.php');
use JsonSchema\SchemaStorage;
use JsonSchema\Validator;
use JsonSchema\Constraints\Factory;
use JsonSchema\Constraints\Constraint;


// Accept Input and print it
$data = json_decode(file_get_contents('php://input'));
//var_dump($data);

//print blank line
//echo "\r\n";


$path = file_get_contents(__DIR__ . '/../schema/UserResponse.json');

//add correct (relative?) path for comparison Shcema
$JSONFile = json_decode($path);

//add correct (relative?) path for comparison Shcema refs (usually User)
$JSONFile-> properties->user->{'$ref'} = 'file://'.__DIR__.'/../schema/User.json';

//print File w/ ref paths included
//var_dump($JSONFile);

//echo "\r\n";

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


