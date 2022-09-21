const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navhighlighter);

function navhighlighter(){

    let scrollY = window.pageYOffset;


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = curent.getAttribute("id");

        if(
            scrollY > sectionTop &&
            acrollY <= sectionTop + sectionHeight )
            {
                document.querySelector(".nav__menu a[href*=" + sectionId + " ]" ).classList.add("active-link");
            }
            else{
                document.querySelector(".nav__menu a[href*=" + sectionId + "]").class.classList.remove("active-link");
            }
        

    });
}

//theme 
const body = document.querySelector("body");
modeToggle = document.querySelector(".dark-light");

//js code to toggle dark and light mode

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");


    //js code to keep user selected mode even page refresh or file reopen

    if(!body.classList.contains("dark-light")){
        localStorage.setItem("mode", "light-mode");
    }
    else {
        localStorage.setItem("mode", "dark-mode");
    }
});

//animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    
})