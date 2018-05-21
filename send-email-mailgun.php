<?php

# Include the Autoloader (see "Libraries" for install instructions)
require 'Mailgun/vendor/autoload.php';
use Mailgun\Mailgun;

include 'mailgun-settings.php';

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];




// Update in version 1.1 - added validation to stop blank emails
if ($email){
    # Instantiate the client.
    $mgClient = new Mailgun($mailgunKey);
    $domain = $mailgunDomain;

    # Make the call to the client.
    $result = $mgClient->sendMessage("$domain",
                      array('from'    => "Website <postmaster@$mailgunDomain>",
                            'to'      => $yourEmail,
                            'subject' => $subject." from ".$name,
                            'html'    => 'Hello Min ila,<br><br>'.$name.' -'.$email.' sent you following message from the website:<br>'.$message),
                    array(
    'attachment' => array(array(
                            'filePath'   =>   '@'.$_FILES['uploaded_cv']['tmp_name'], 
                            'remoteName' => $_FILES['uploaded_cv']['name']),
                          array(
                            'filePath'   =>   '@'.$_FILES['uploaded_cover']['tmp_name'], 
                            'remoteName' => $_FILES['uploaded_cover']['name'])
                      
                      )
                    ));
    
file_put_contents("sentornot.txt", $result);

    $result = $mgClient->sendMessage("$domain",
                      array('from'    => "$fromName <info@$mailgunDomain>",
                            'to'      => $email,
                            'subject' => $subject,
                            'html'    => "Dear $name,<br><br>".$thankYouMsg));
}
