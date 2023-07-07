// togle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =  () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//  scroll section active link
 
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => 
 {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=  offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar while clicking navbar link(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 };

 // sscroll reveal

 ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin:'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',
 {origin:'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content',{origin:'right' });


 //typed js

 const typed = new Typed('.multiple-text',  {
    strings:
        ['Full Stack Developer', 
            'Jr Programmer', 
            'Video Editor',
            'Graphic Designer',
            'Web Store Owner',
            'Writer',
            'Dancer',
            'Film Enthusiast' 
        ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop:true

});

        // function sendEmail()
        //             {
        //                 Email.send({
        //                     // Host : "smtp.elasticemail.com",
        //                     // Username : "iamsteve803@gmail.com",
        //                     // Password : "9B271BCA3B3DCF7EAA7D79DC3B17355873E9",
        //                     SecureToken :"3e7e92b2-a9da-40a4-aad3-a4880bd61874",
        //                     To : 'derickdavis007@gmail.com',
        //                     From : document.getElementById('email').value,
        //                     Subject : "New Contact Form Enquiry",
        //                     Body : "Name: " + document.getElementById("name").value 
        //                     + "<br> Email: "+ document.getElementById("email").value
        //                     + "<br> Phone Number: "+ document.getElementById("phone").value
        //                     + "<br> Subject: "+ document.getElementById("subject").value
        //                     + "<br> Message: "+ document.getElementById("message").value
        //                 }).then(
        //                 message => alert("Message Sent Successfully")
        //                 );
        //             };


  const downloadBtn = document.querySelector (".btn");

  //google drive's file link

  const fileLink = "https://drive.google.com/file/d/1_uG-8nx6SPIQ0J4_Vkw2tcIHFkaV_x6C/view?usp=sharing";

  const initTimer = () => {
    //getting data timer
    if(downloadBtn.classList.contains("disable-timer")) {
        return(location.href= fileLink);
    }

    let timer= downloadBtn.dataset.timer;

    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `The File will download in <b>${timer}</b> seconds`;

    //creating init counter variable with setInterval function

    const initCounter = setInterval(() => {
        if(timer > 0){
            timer--;
        return  downloadBtn.innerHTML = `The File will download in <b>${timer}</b> seconds`;
        }    
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.textContent = "The file is downloading";

        setTimeout(() =>{
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML =`<a href="#" data-timer="5" class="btn" id="resume-link">Get My CV/Resume Again</a>`;
        },3000)

    }, 1000); //1000 milliseconds =1s
  };
  
  downloadBtn.addEventListener("click", initTimer); 
