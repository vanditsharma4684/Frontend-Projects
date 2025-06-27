// ====== Header Section Start ======

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const cart = document.querySelector(".cart");
const loginForm = document.querySelector(".login-form");
const cartIcon = document.querySelector("#cart-icon");
const userIcon = document.querySelector("#user-icon");
const header = document.querySelector("header");

menuIcon.onclick = () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("move");

    cart.classList.remove("active");

    loginForm.classList.remove("active");
};

cartIcon.onclick = () =>{

    cart.classList.toggle("active");

    navbar.classList.remove("active");

    menuIcon.classList.remove("move");

    loginForm.classList.remove("active");
};

userIcon.onclick = () => {

    loginForm.classList.toggle("active");

    cart.classList.remove("active");

    navbar.classList.remove("active");

    menuIcon.classList.remove("move");
};



window.addEventListener("scroll" ,() =>{
    header.classList.toggle("shadow", window.scrollY> 0);
});

// ====== Header Section End ======


// ====== Scroll Top Button Functionality Start ======

const scrollTopButton = document.querySelector(".scroll-top");

window.addEventListener("scroll", ()=> {

    scrollTopButton.classList.toggle("active",window.scrollY>0);
    
})
// ====== Scroll Top Button Functionality End ======


// ====== Email JS Start ======

const 
contactForm = document.querySelector("#contact-form"),
contactName = document.querySelector("#user-name"),
contactEmail = document.querySelector("#user-email"),
contactMessage = document.querySelector("#user-message"),
successMessage = document.querySelector("#success-message");

const sendEmail = (e) =>{
    e.preventDefault();

if(contactName.value === "" || contactEmail.value === "" || contactMessage.value ===""){
     
    successMessage.classList.remove("color-green");
    successMessage.classList.add("color-red");
    successMessage.textContent = "Please fill in all the input fields";    
    } else {
       emailjs.sendForm(
        "service_qhnutx5", //emailjs service id
        "template_y7o49j5", //emailjs template id
        contactForm, //the form id is passed as an element refrence
        "Xi8zDwCTFLgUXSvhZ", //emailjs public key
       ) 

       .then(
        () => {
            successMessage.classList.remove("color-red");
            successMessage.classList.add("color-green");
            successMessage.textContent = "Message send successfully.";

            setTimeout(()=>{
                successMessage.textContent = "";
            },5000);
        },
        (error) => {
            alert("Oops!Something Went Wrong. Please try again.",error);
        }
       );
       contactName.value = "";
       contactEmail.value = "";
       contactMessage.value = "";

    }
};


contactForm.addEventListener("Submit",sendEmail);
// ====== Email JS End ======