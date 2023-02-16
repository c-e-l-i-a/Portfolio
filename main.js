const ulList = document.getElementById('nav').querySelectorAll('a')

ulList.forEach(element => {
    element.addEventListener('click', () => {
        ulList.forEach(li => li.classList.remove('active'))
        element.classList.add('active')
    })
})

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : document.getElementById('inputEmail').value,
        Subject : "Contact Form message",
        Body : "First Name: " + document.getElementById('firstName').value +
        "<br> Last Name: " + document.getElementById('lastName').value +
        "<br> Email: " + document.getElementById('inputEmail').value +
        "<br> Message: " + document.getElementById('message').value
        
    }).then(
      message => alert('Thank you, Message sent succesfully!')
    );
}