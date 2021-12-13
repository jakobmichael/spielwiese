<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>CloudDienst</title>
</head>

<body>

	<?php

	//A1

	$arr_files =  glob("/devel/Spielwiese/phpTest/LBTL6/CloudDienst/Dateien/*");

	for ($i = 0; $i < count($arr_files); $i++) {
		// echo(mime_content_type($arr_files[$i]));
		// echo "<br/>";
		if (mime_content_type($arr_files[$i]) === "text/plain") {
			echo $arr_files[$i];
			echo "<br/>";
		}
	}


	//A2

	echo "<hr>";
	$textFile = glob("/devel/Spielwiese/phpTest/LBTL6/CloudDienst/Dateien/Text.txt");
	$textFileContent =  file_get_contents("/devel/Spielwiese/phpTest/LBTL6/CloudDienst/Dateien/Text.txt");
	//  echo $textFileContent;




	?>

	<!--A2.1-->
	<form action="" method="POST">
		<textarea name="textFileEditor" cols="50" rows="5">
<?php
echo $textFileContent;

?>
</textarea>
		<input type="submit" value="Änderungen Speichern">
	</form>

	<?php
	if (isset($_POST["textFileEditor"])) {
		file_put_contents("/devel/Spielwiese/phpTest/LBTL6/CloudDienst/Dateien/Text.txt", $_POST["textFileEditor"]);
		header("Location: index.php");
	}

	echo filesize("/devel/Spielwiese/phpTest/LBTL6/CloudDienst/Dateien/Text.txt") . "Byte" . "<br/>";
	$totalDiskSpace = disk_total_space("C:");
	$freeDiskSpace = disk_free_space("C:");
	$usedDiskSpace = $totalDiskSpace - $freeDiskSpace;
	$usedDiskSpacePercentage = $usedDiskSpace / $totalDiskSpace * 100;
	echo "<hr>";
	echo "Used Disk Space: " . round($usedDiskSpace / pow(10, 9),3) . " GB";
	echo "<br/>";
	echo "Used Disk Space in Percent: ". round($usedDiskSpacePercentage, 3) . " %<br/>";
	echo "Total Disk Space: " . round($totalDiskSpace / pow(10, 9),3) . " GB";

	?>

</body>

</html>