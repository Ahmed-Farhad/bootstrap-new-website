const form = document.querySelector('form');

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "Ahmed Farhad",
        Password : "01715871803",
        To : 'farhadhossain636418@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New User Data",
        Body : "And this is the body"
    }).then(
      message => alert("message send succesfully")
    );
}