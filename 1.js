
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


//<![CDATA[
(()=>{const e=["Crafting Dreams, One Project at a Time",
"Your Vision, My Mission",
"Innovative Solutions for Modern Problems",
"Turning Ideas into Reality",
"Expertise You Can Trust,
"Designing Success Together",
"Where Creativity Meets Professionalism",
"Freelance Excellence, Tailored to You""],
t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>.,;:",
n=document.querySelector(".name"),o=(e,t,n)=>e.classList[n?"add":"remove"](t),
a=e=>Math.random()*e|0;let c=0;const r=()=>{o(n,"glitch",0);const r=e[c],
    s=r.length;let d=0;const l=setInterval(()=>{n.textContent=[...r].map((e,n)=>n<d?e:t[a(t.length)]).join(""),
    ++d>s&&(clearInterval(l),o(n,"glitch",1),n.dataset.text=n.textContent,c=(c+1)%e.length)},15)},s=()=>{r(),setInterval(r,4e3)};
/complete|interactive/.test(document.readyState)?setTimeout(s,1):document.addEventListener("DOMContentLoaded",s)})();
//]]>
