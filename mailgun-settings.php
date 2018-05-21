<?php

// Enter your Mailgun API key here
/*
|--------------------------------------------------------------------------
| Mailgun Settings
|--------------------------------------------------------------------------
|
| Register for Free on Mailgun.com for sending transactional emails.
| Mailgun is powerful API email service by rackspace.
| It is easy to use. Just signup on mailgun.com and
| follow steps to get API key & domain name.
|
*/

$mailgunKey = 'key-04085cd69fa6dba6f3d5cb18b93d8141'; //Will be like key-........
$mailgunDomain = 'minila.org'; //You can use sandbox domain provided by mailgun


// Your details to receive email from end-user
$yourEmail = 'info@minila.org'; //Chage this email id to yours where you want to receive email


// Following settings will be used to send email to end-user who submits contact us form.
// We will be sending 'Thank You' email to end-user.
$fromName = 'Min ila'; //Sender's Name
$subject = 'Thank You';
$thankYouMsg = 'Thank you for applying to the above mentioned vacancy.<br>We will carefully review all applications and get back to you no later than two weeks after the closing date.<br><br>Make sure to subscribe to our <a href="http://minila.org/#contact-anchor">newletter</a> and visit our <a href="http://facebook.com/minilango">Facebook page</a> to get updated in all our activities.<br><br>

Best Regards,<br>
The Min ila Team <br>
<img src="http://minila.org/images/signature.jpg" width="400" alt="">'; //Your thank you message
