function Detail(a){
  if (a==1){
    alert("HTML is a Markup Language used for web development")
  }else if (a==2){
    alert("CSS is used to create styles in a web page")
  }else if (a==3){
    alert("JavaScript is used to create interactive web pages")
  }else if (a==4){
    alert("PHP is a server-side scripting language used to create dynamic web pages")
  }else if (a==5){
    alert("XML is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable")
  }
}
function hire(){
    var txt;
    if (confirm("please contact me for hires using the contact details below!")) {
      scr3();
    }
}

function myFunction() {
   
  }
function scr1() {
    // Get the target section by its ID
    const targetSection = document.getElementById('qf');
    // Scroll to the top of the target section
    targetSection.scrollIntoView({ behavior: 'smooth', block:"center" });
}

function scr2() {
    // Get the target section by its ID
    const targetSection = document.getElementById('services');

    // Scroll to the top of the target section
    targetSection.scrollIntoView({ behavior: 'smooth', block:"center"});
}

function scr3(){
    const target = document.getElementById('contact');
    target.scrollIntoView({behavior: 'smooth', block:"center"});
}

function scr4(){
    const target = document.getElementById('about');
    target.scrollIntoView({behavior: 'smooth', block:"center"});
}



    (() => {
      const slogans = [
    "Your Vision, Our Craftsmanship",
    "Turning Ideas into Reality",
    "Innovation at Your Fingertips",
    "Where Creativity Meets Excellence",
    "Freelance Brilliance, Delivered",
    "Tailored Solutions for Your Success",
    "Crafting Digital Dreams",
    "Expertise You Can Rely On",
    "Your Partner in Progress",
    "Transforming Concepts into Success"
      ];
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>.,;:";
      const sloganElement = document.querySelector(".slogan");
      const toggleClass = (element, className, add) => element.classList[add ? "add" : "remove"](className);
      const getRandomIndex = length => Math.random() * length | 0;

      let currentIndex = 0;

      const glitchEffect = () => {
        toggleClass(sloganElement, "glitch", false);
        const currentSlogan = slogans[currentIndex];
        const sloganLength = currentSlogan.length;
        let progress = 0;
        const interval = setInterval(() => {
          sloganElement.textContent = [...currentSlogan].map((char, index) => index < progress ? char : chars[getRandomIndex(chars.length)]).join("");
          if (++progress > sloganLength) {
            clearInterval(interval);
            toggleClass(sloganElement, "glitch", true);
            sloganElement.dataset.text = sloganElement.textContent;
            currentIndex = (currentIndex + 1) % slogans.length;
          }
        }, 40);
      };

      const startGlitchCycle = () => {
        glitchEffect();
        setInterval(glitchEffect, 4000);
      };

      /complete|interactive/.test(document.readyState) ? setTimeout(startGlitchCycle, 1) : document.addEventListener("DOMContentLoaded", startGlitchCycle);
    })();
