const drawer = document.getElementById("drawer-navigation");
const backdrop = document.getElementById("drawer-backdrop");
const toggleBtn = document.getElementById("drawer-toggle");
const closeBtn = document.getElementById("drawer-close");

function openDrawer() {
    drawer.classList.remove("translate-x-full");
    backdrop.classList.remove("hidden");
}

function closeDrawer() {
    drawer.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
}

toggleBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);
