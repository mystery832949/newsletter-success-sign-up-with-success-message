const form1 = document.getElementById("form"); 
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const pa = document.querySelector(".validemail"); 

const email = document.getElementById('email'); 


 


email.addEventListener('input', validate);

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();  
}); 

const buttons = document.querySelectorAll('.button');
//i know i can easily do this with hover on the button but i would like to practice my javascript  ( :
buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.background = "linear-gradient(to right,  red, hsl(4,100%,67%) )";
    }); 

    btn.addEventListener('mouseout', () => {
        btn.style.background = ""; // Reset to original style
    });
});

function validate() {
    const emailValue = email.value.trim(); 

    if (emailValue === '') {
        setErrorFor(); // Turn red for empty
        return false; // Return false if empty
    } else if (!isEmail(emailValue)) {        
        setErrorFor(); // Turn red for invalid format
        return false; // Return false if invalid
    } else {
        submitEmail(); // Turn green for valid format
        return true; // Return true if valid
    }
}

function setErrorFor() {
    email.classList.add("error");   
    pa.classList.remove("none"); 
    
     // Ensure white class is removed
}

function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function submitEmail() {
    container.classList.add('hide'); 
    container2.classList.remove('hide'); 
    // Optionally reset the form
}