<?php

$n = 10;
$f1 = 1;
$f2 = 1;
$f3;

echo("Die 1. Fibonacci Zahl ist ". $f1. "<br>");
echo("Die 2. Fibonacci Zahl ist ". $f2."<br>");

for ($i = 3; $i <= $n; $i++) {
    $f3 = $f1 + $f2;
    $f1 = $f2;
    $f2 = $f3;

    echo ("Die " . $i . ". Fibonacci Zahl ist ". $f3 . "<br>");
}

