// Dom doucement object model

function init(){
const Hamburger=document.querySelector(".Hamburg");
const sidebarCloseButton=document.querySelector(".close-button");
const sidebarContainer=document.querySelector(".sidebar-container");

const opensidebar=()=>{
    sidebarContainer.classList.add("show-sidebar")
    console.log("sidebarConatainer.classList")
}

Hamburger.addEventListener("click",opensidebar);

const closesidebar=()=>{
    console.log("sidebarContainer.classList")
    sidebarContainer.classList.remove("show-sidebar")
}

sidebarCloseButton.addEventListener("click",closesidebar)
}
init()

function navRelatedcodee(){
const navbarContainer=document.querySelector(".nav-container");
window.addEventListener("scroll",function(){
       const scrolNumber=window.scrollY;
       console.log(window.innerWidth);
       const targetNumber=window.innerWidth>=992?70:50;
       if(scrolNumber>=targetNumber){
navbarContainer.classList.add("sticky-nav")
       }else{
        navbarContainer.classList.remove("sticky-nav")
       }
});
}