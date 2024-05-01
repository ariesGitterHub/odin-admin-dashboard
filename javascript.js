const hamburgerBtn = document.querySelector("#hamburger-btn");
const headerSection = document.querySelector("header");
const mainContent = document.querySelector("main-content");
const footerSection = document.querySelector("footer");

const hiddenMobileSidebar = document.querySelector(".hidden-mobile-sidebar");

const mobileSidebar = document.querySelector("mobile-sidebar");

hamburgerBtn.addEventListener("click", showSidebarMenu);
mobileSidebar.addEventListener("click", hideSidebarMenu);

function showSidebarMenu() {
    console.log("Test!!!!");
    hiddenMobileSidebar.style.display = "grid";
    headerSection.style.display = "none";
    mainContent.style.display = "none";
    footerSection.style.display = "none";
}

function hideSidebarMenu() {
    console.log("Test2!!!!");
    hiddenMobileSidebar.style.display = "none";
    headerSection.style.display = "grid";
    mainContent.style.display = "grid";
    footerSection.style.display = "flex";
}