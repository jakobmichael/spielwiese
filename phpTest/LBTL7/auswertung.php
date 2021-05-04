<?php
   $vorname = $_GET['vorname'];
   $zuname = $_GET['zuname'];
   $alter = $_GET['alter'];
   $mailaddress = $_GET['mailaddress'];
   $birthdate = $_GET['birthdate'];
   $password = $_GET['password'];
   echo "Eingegeben wurden ".$vorname." ".$zuname." und ".$alter. " Jahre, geboren am" .$birthdate. " Als E-mail wurde " .$mailaddress. " eingegeben. Das Passwort ist " .$password."";
?>
