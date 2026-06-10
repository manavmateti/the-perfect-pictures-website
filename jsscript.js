window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},1000);

},1500);

});


// CURSOR

const cursor=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

}

});


// TESTIMONIALS

const testimonials=document.querySelectorAll(".testimonial");

let current=0;

if(testimonials.length){

setInterval(()=>{

testimonials[current].classList.remove("active");

current++;

if(current>=testimonials.length){
current=0;
}

testimonials[current].classList.add("active");

},4000);

}


// REVEAL

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach((el)=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){

el.classList.add("active");

}

});

});


// LIGHTBOX

const gallery=document.querySelectorAll(".gallery img");

if(gallery.length){

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`
<span id="closeLightbox">&times;</span>
<img id="lightboxImg">
`;

document.body.appendChild(lightbox);

const lightboxImg=document.getElementById("lightboxImg");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

document.getElementById("closeLightbox")
.addEventListener("click",()=>{

lightbox.style.display="none";

});

}