
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
