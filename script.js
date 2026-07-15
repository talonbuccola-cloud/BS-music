const menuButton=document.querySelector(".menu-toggle");
const primaryNav=document.querySelector(".primary-nav");
if(menuButton&&primaryNav){
  menuButton.addEventListener("click",()=>{
    const open=primaryNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded",String(open));
    menuButton.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");
  });
  primaryNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    primaryNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded","false");
  }));
}
document.querySelectorAll("[data-placeholder]").forEach(link=>link.addEventListener("click",event=>{
  if(link.getAttribute("href")?.startsWith("http"))return;
  event.preventDefault();
  document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"});
}));
const merchButton=document.querySelector("[data-coming-soon]");
const merchStatus=document.querySelector(".coming-soon");
merchButton?.addEventListener("click",()=>{if(merchStatus)merchStatus.textContent="Coming soon";});
const signupForm=document.querySelector("#signup-form");
const formStatus=document.querySelector(".form-status");
signupForm?.addEventListener("submit",event=>{
  event.preventDefault();
  const email=signupForm.querySelector("input[type='email']");
  if(!email?.checkValidity()){
    if(formStatus)formStatus.textContent="Enter a valid email address.";
    email?.focus();
    return;
  }
  if(formStatus)formStatus.textContent="Thanks — signup is opening soon.";
  signupForm.reset();
});
const year=document.querySelector("#year");
if(year)year.textContent=String(new Date().getFullYear());