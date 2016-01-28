<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Hjemmeside'; 
    $to = 'jakob@kahlogbilstrup.dk'; 
    $subject = 'Hello';
    $human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] && $human == '4') {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Din besked er afsendt!</p>';
	} else { 
	    echo '<p>Noget gik galt, prøv venligst igen</p>'; 
	} 
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p>Du har besvaret spørgsmålet anti-spam forkert!</p>';
    }
?>