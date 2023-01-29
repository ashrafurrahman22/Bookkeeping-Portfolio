// var btn = document.getElementById("sendBtn");


const form = document.getElementById("contactForm");

form.addEventListener('submit', function(e){
  e.preventDefault()
  console.log("clicked")

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var body = 'Name: ' +name + '<br/> Email: ' + email + "<br/> Subject:" + " " + subject + '<br/> Message: ' + " " + message; 


  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ashrafur745@gmail.com",
    Password : "9302181F96CA45F334BF9841AFDBCD294CE5",
    To : 'ashrafurrahman22@gmail.com',
    From : "ashrafur745@gmail.com",
    Subject : "Message From Portfolio Website",
    Body : body
}).then(
  message => alert("Successfully Send")
);
})