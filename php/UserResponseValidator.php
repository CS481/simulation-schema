<?php

require_once('/usr/share/php/simulation-schema/vendor/autoload.php');
use JsonSchema\SchemaStorage;
use JsonSchema\Validator;
use JsonSchema\Constraints\Factory;
use JsonSchema\Constraints\Constraint;


// Accept Input and print it
$data = json_decode(file_get_contents('php://input'));

$path = file_get_contents(__DIR__ . '/../schema/UserResponse.json');

//add correct (relative?) path for comparison Shcema
$JSONFile = json_decode($path);

//add correct (relative?) path for comparison Shcema refs (usually User)
$JSONFile-> properties->user->{'$ref'} = 'file://'.__DIR__.'/../schema/User.json';


// Create new Validator obj and validate $data against the schema ($JSONFile)
$validator = new Validator();
$validator-> validate($data, $JSONFile); // validates!

if ($validator->isValid()) {
	//cannot include the echop as the PHP sees this as a return type
	//echo "The supplied JSON validates against the schema.\n";
} else {
	throw new Exception("JSON does not validate.\n");
}
?>


