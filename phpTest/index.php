<?php
/* @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package IE Pop up Darstellung 
 * @since 1.0.0
 */

/**
 * Define Constants
 */
// define('CHILD_THEME_IE_POP_UP_DARSTELLUNG_VERSION', '1.0.0');

/**
 * Enqueue styles
 */
// function child_enqueue_styles()
// {

//     wp_enqueue_style('ie-pop-up-darstellung-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_IE_POP_UP_DARSTELLUNG_VERSION, 'all');
// }

// add_action('wp_enqueue_scripts', 'child_enqueue_styles', 15);


$msgDe = "Vielen Dank für Ihren Besuch auf unserer Website. Der von Ihnen verwendete Browser ist veraltet. Dadurch kann es zu Fehlern bei der Darstellung und zu Einschränkungen bei den Funktionalitäten kommen. Bitte verwenden Sie einen anderen Browser, um unsere Webseite im vollen Umfang nutzen zu können. Ihr SIVIS Team";

$msgEn = "Thank you for visiting our website. The browser you are using is outdated. This may cause errors in the design and restrictions in the website's functionalities. Please use another browser to be able to use our website to the full extent. Your SIVIS Team";

$popularBrowsers = ["Opera", "OPR/", "Edg", "Chrome", "Safari", "Firefox", "MSIE", "Trident"];


function getCurrentBrowser($popularBrowsers)
{
    $userBrowser = '';
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
        default:
            $userBrowser = "Chrome";
    }
    return $userBrowser;
}

function getCurrentLanguage()
{
    $currentLang = '';
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $supportedLanguages = ['en', 'de'];



    foreach ($supportedLanguages as $language) {
        if ($language == $lang) {
            $currentLang = $language;
        }
    }

    return $currentLang;
}

function getAlertMessage($currentLang, $msgDe, $msgEn)
{
    $msg = '';
    switch ($currentLang) {
        case 'de':
            $msg = $msgDe;
            break;
        case 'en':
            $msg = $msgEn;
            break;
        default:
            $msg = $msgDe;
    }
    return $msg;
}



function alert($msg)
{
    echo "<script type='text/javascript'>alert('$msg');</script>";
}

$userBrowser = getCurrentBrowser($popularBrowsers);

if ($userBrowser == 'Internet Explorer') {
    $currentLang = getCurrentLanguage();
    $msg = getAlertMessage($currentLang, $msgDe, $msgEn);
    alert($msg);
}

?>