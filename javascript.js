const hamburgerBtn = document.querySelector(".hamburger-btn");
const headerSection = document.querySelector("header");
const mainContent = document.querySelector("main-content");
const footerSection = document.querySelector("footer");

const hiddenMobileSidebar = document.querySelector(".hidden-mobile-sidebar");

const mobileSidebarBtn = document.querySelector(".mobile-sidebar-btn");

hamburgerBtn.addEventListener("click", showSidebarMenu);
mobileSidebarBtn.addEventListener("click", hideSidebarMenu);


function showSidebarMenu(event) {
    console.log("Test1: mobile-sidebar is shown.");
    event.preventDefault(); 
    hiddenMobileSidebar.style.display = "grid";
    headerSection.style.display = "none";
    mainContent.style.display = "none";
    footerSection.style.display = "none";
}

function hideSidebarMenu() {
    console.log("Test2: mobile-sidebar is hidden.");
    hiddenMobileSidebar.style.display = "none";
    headerSection.style.display = "flex";
    mainContent.style.display = "grid";
    footerSection.style.display = "flex";

}