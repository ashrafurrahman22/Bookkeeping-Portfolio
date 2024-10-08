const form = document.getElementById("contactForm");

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Retrieve form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var body = "Name: " + name + "\n" + 
           "Subject: " + subject + "\n" + 
           "Message: " + message;

  // Check if any field is empty
  if (!name || !email || !subject || !message) {
    alert("All fields are required.");
    return; // Stop the submission
  }

  // Prepare email parameters
  var params = {
    form_name: name,
    email_id: email,
    // subject: subject,
    message: body,
  };

 

  // Send the email using EmailJS
  emailjs.send("service_bbo56ft", "template_0qfn6lg", params)
    .then(function(res) {
      alert("Email successfully sent! Status: " + res.status);
      // Optionally reset the form
      form.reset();
    })
    .catch(function(error) {
      alert("Error sending email: " + JSON.stringify(error));
    });
});


