//alert("This is a beta verstion!this page is currently in development!");
function hire(){
    alert("If you want to hire please contact me by the contact details below this page!");
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
