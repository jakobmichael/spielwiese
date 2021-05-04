<?php

function getRandomPassword()
{
    $randomPassword = rand(100000, 999999);
    return $randomPassword;
}

function divideBySeven($password)
{
    if ($password % 7  == 0) {
        return true;
    } else {
        return false;
    }
}

function checkLastInt($password)
{
    switch ($password % 10) {
        case 5:
            return true;
            break;
        case 3:
            return true;
            break;
        default:
            return false;
    };
}

function fillArrayWithPasswords()
{
    $passwordArray = [];
    while (sizeof($passwordArray) < 20) {
        $password = getRandomPassword();
        if (divideBySeven($password) && checkLastInt($password)) {
            array_push($passwordArray, $password);
        } else {
            continue;
        }
    }
    return $passwordArray;
}

$passwordArray = fillArrayWithPasswords();




for($i = 0; $i < sizeof($passwordArray); $i ++) {
    echo "<p>Passwort " . ($i + 1) . ":  " . $passwordArray[$i] . "</p>";
}

//weitere Anforderungen: 
// mind. 1 Sonderzeichen, mind. 8 Stellen, mind. 1 Großbuchstabe
// Regeln, die ein eingegebenes Passwort auf Gültigkeit prüfen:


function checkPassword($password)
{   
    if(checkForPasswordLength($password) && checkForUpperCase($password) && checkForSpecialCharacter($password) && checkForNumber($password)) {
        echo("valid");
    } else {
        echo("ivnvalid");
    };
}

function checkForPasswordLength($password)
{
    if(strlen($password) >= 8) {
        return true;
    } else {
        return false;
    }
}

function checkForSpecialCharacter($password)
{
    if(preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $password)) {
        return true;
    } else {
        return false;
    };
  
}

function checkForUpperCase($password) {
    if(preg_match('/[A-Z]/', $password)) {
        return true;
    }else {
        return false;
    };
       
}

function checkForNumber($password) {
    if(preg_match('/[0-9]/', $password)) {
        return true;
    }else {
        return false;
    };
}

// Funktion, um Array in Datei zu speichern

function saveArrayToTextFile($fileName, $array) {
 $serialzedArray  = serialize($array);
 file_put_contents($fileName, $serialzedArray);

}


saveArrayToTextFile("passwörter.txt", $passwordArray);

