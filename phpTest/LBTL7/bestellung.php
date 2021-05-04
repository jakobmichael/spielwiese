<?php

echo "<h4>Die bestelten Pizzen</h4>";
echo "Pizza Margherita : " . $_GET["marg"] . "</br>";
echo "Pizza Funghi : " . $_GET["fung"]  . "</br>";
echo "Pizza Hawaii : " . $_GET["hawa"]  . "</br>";
echo "Pizza Quattro Formaggi : " . $_GET["form"] . "</br>";
echo "Pizza Vegetaria : " . $_GET["vege"]  . "</br>";

$bestelltePizzen = $_GET["marg"]+ $_GET["fung"] + $_GET["hawa"] + $_GET["form"] + $_GET["vege"];
$preise = [7, 8, 8.5, 8, 9];
$bestellwert =  $_GET["marg"] * $preise[0] +  $_GET["fung"] * $preise[1] +  $_GET["hawa"] * $preise[2] + $_GET["form"] * $preise[3] +  $_GET["vege"] * $preise[4];

if($bestellwert < 10) {
    echo "<p>Der Bestellwert ist zu niedrig für eine Lieferung. </p>";
    echo "<p>Die Bestellung muss abgeholt werden. </p>";
}

if($_GET["lieferung"]) {
    $bestellwert += 4;
} else  {
    "Die Bestellung wird abgeholt";
}

$zeit = 10 + 5*$bestelltePizzen;
echo "Die gesch&auml;tzte Lieferzeit beträgt " . $zeit . " Minuten";

if($_GET["bonuskarte"]) {
    $bestellwert -= 2;
}

echo "<h4>Der Gesamtpreis für die Bestellung beträgt ". $bestellwert . " €";