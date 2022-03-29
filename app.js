



//  let text = document.getElementsByClassName('thankyou')

// function func(e) {
//     event.preventDefault()
//     function sendEmail() {
//         Email.send({
//             Host: "smtp.gmail.com",
//             Username: "ethgon19@gmail.com",
//             Password: "",
//             To: 'ethgon19@gmail.com',
//             From: document.getElementById("email").value,
//             Subject: "Form Enquiry",
//             Body: "Name: " + document.getElementById("name").value
//                 + "<br> Email: " + document.getElementById("email").value
//                 + "<br> Phone: " + document.getElementById("phone").value
//                 + "<br> Message: " + document.getElementById("message").value
//         })
      

//     }
// }

function func(e){

event.preventDefault()
Email.send({
    Host : "smtp.gmail.com",
    Username : "ethgon19@gmail.com",
    Password : "password",
    To : 'ethgon19@gmail.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => {
      let text = document.querySelector('.thankyou')
      if(text.style.display = "none"){
          text.style.display = "block"
      }else{
          text.stlye.display = "none"
      }
    
  }
  
);

}

function clearThis(){
    let clear = document.getElementById('name')
    let clearr = document.getElementById('phone')
    let clearrr = document.getElementById('email')
    let clearrrr = document.getElementById('message')
    clear.value = ''
    clearr.value = ''
    clearrrr.value = ''
    clearrr.value = ''

        
};

function menuClick() {
    window.location.href = "menu.html"
    
}

function contactClick() {
    window.location.href = "contact.html"
    
}
function aboutClick() {
    window.location.href = "about.html"
    
}

