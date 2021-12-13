<?php
$vorname = $_GET["vorname"];
$nachname = $_GET["nachname"];
$mail = $_GET["mail"];
$preisgruppe = $_GET["preisgruppe"];
$anzahl = $_GET["anzahl"];
$programm = 0;
$parken = 0;
$preisEinzel;
$preisGesamt;

$preisNormal = [43, 43, 26.5, 16.5, 11.5];
$preisRabatt = [21.5, 17, 13.25, 9.75, 5.75];

if (isset($_GET["rabatt"])) {
    $preisEinzel = $preisRabatt[$preisgruppe];
} else {
    $preisEinzel = $preisNormal[$preisgruppe];
}
$preisGesamt = $preisEinzel * $anzahl;



echo ("Rechnung für:");
echo ("<br>");
echo ("<br>");
echo ("Vorname: " . $vorname);
echo ("<br>");
echo ("Nachname: " . $nachname);
echo ("<br>");
echo ("email: " . $mail);
echo ("<br>");
echo ("preisgruppe: " . $preisgruppe);
echo ("<br>");
echo ("Preis einer einzelnen Karte: " . $preisEinzel . " Euro");
echo ("<br>");
echo ("Anzahl der Karten: " . $anzahl);
echo ("<br>");
echo ("Preis f&uuml;r alle Karten: " . $preisGesamt . " Euro");
echo ("<br>");
if (isset($_GET["programm"])) {
    echo ("zuz&uuml;glich 3,- Euro f&uuml;r das Programmheft");
    echo ("<br>");
    $programm = 3;
}

if (isset($_GET["parken"])) {
    echo ("zuz&uuml;glich 4,- Euro f&uuml;r ddie Parkgeb&uuml;hr");
    echo ("<br>");
    $parken = 4;
}
$preisGesamt += $parken;
$preisGesamt += $programm;
echo ("<br>");
echo ("Gesamtpreis: " . $preisGesamt. " Euro");
