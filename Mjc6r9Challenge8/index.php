<?php
    $dir = './images/';
    $pics = "";
    if (is_dir($dir)){
        if ($dh = opendir($dir)){
            while (($file = readdir($dh)) !== false){
                if(fnmatch("*.jpg", $file) || fnmatch("*.jpeg", $file) || fnmatch("*.png", $file) || fnmatch("*.gif", $file)){
                    $pics .= "<div><img src='./images/{$file}' height='500' width='800' alt='' /></div><br>";
                }
            }
            closedir($dh);
        }
        else{
            $pics = "<h1>Couldn't open directory</h1>";
        }
    }
    else{
        $pics = "<h1>Couldn't locate directory</h1>";
    }


    $html = <<<EOT1
<!DOCTYPE html>
<html lang='en'>
<!--
    name: Matthew Carroll
    pawprint: MJC6R9
    Date: March 23, 2018
-->
<head>
<meta charset="UTF-8">
<title>Challenge 8</title>
</head>
<body>
{$pics}
</body>
</html>
EOT1;
        
    echo $html;
        
?>