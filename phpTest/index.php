<!Doctype html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="./index.css">
    </head>
<body>
    <h1>

        THIS IS A TEST
    </h1>
<?php
$modalTitle = "Your Browser is outdated";
$browserAlert ="Please use another browser, to display all contents correctly";

$popularBrowsers = ["Opera","OPR/", "Edg", "Chrome", "Safari", "Firefox", "MSIE", "Trident"];

$userAgent = $_SERVER['HTTP_USER_AGENT'];
$userBrowser = 'Other less popular browsers';
foreach ($popularBrowsers as $browser) {
    if (strpos($userAgent, $browser) !== false) {
        $userBrowser = $browser;
        break;
    }
}

switch ($userBrowser) {
    case 'OPR/':
        $userBrowser = 'Opera';
        break;
    case 'MSIE':
        $userBrowser = 'Internet Explorer';
        break;

    case 'Trident':
        $userBrowser = 'Internet Explorer';
        break;

    case 'Edg':
        $userBrowser = 'Microsoft Edge';
        break;
}

echo "Your browser: " . $userBrowser;

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}
?>

<?php
if($userBrowser == "Internet Explorer") 
{
    
?>



<div id="popup1" class="overlay">
	<div class="popup">
		<h2><?=$modalTitle?></h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		<?=$browserAlert?>
		</div>
	</div>
</div>
<?php 
} 
?>





</body>
</html>