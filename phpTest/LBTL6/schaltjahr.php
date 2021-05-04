<?php

$jahre = [1804, 1808, 1812];
$ergebnis = "";

function checkYear($jahr) {
    if($jahr % 400 == 0) {
       return "ein Schaltjahr";
    } else if($jahr % 4 == 0) {
        if($jahr % 100 != 0) {
            return "ein Schaltjahr";
        } else {
            return "kein Schaltjahr";
        }
    } else {
        return "kein Schaltjahr";
    }
}

foreach($jahre as $jahr) {
    $ergebnis = checkYear($jahr);
    echo "Das Jahr " . $jahr . " war/ist " . $ergebnis . "</br>";
}