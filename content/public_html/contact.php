<?php
	$name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

	$email_from = 'hub@e8make.co.uk';
	$email_subject = "E8 Make Enquiry";
	$email_body = "You have received a new message from $name ($visitor_email).\n Here is the message:\n $message";

	$to = "hub@e8make.co.uk";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
?>	