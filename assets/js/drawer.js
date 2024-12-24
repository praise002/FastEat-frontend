import api from "./api.js";

const drawer = document.getElementById("drawer-navigation");
const backdrop = document.getElementById("drawer-backdrop");
const toggleBtn = document.getElementById("drawer-toggle");
const closeBtn = document.getElementById("drawer-close");

function openDrawer() {
    drawer.classList.remove("translate-x-full");
    backdrop.classList.remove("hidden");
    fetchCategoriesOpen();
}

function closeDrawer() {
    drawer.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
}

toggleBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);

async function fetchCategoriesOpen() {
    const data = await api.getCategories();
    const categories = data.categories;
    displayCategories(categories);
}

function displayCategories(categories) {
    const categoryContainer = document.querySelector("#category-list");

    categories.map((category) => {
        const categoryElement = `
          <li class="border-b border-zinc-200">
            <a href="./category-detail.html?name=${category.strCategory}&id=${category.idCategory}" class="block py-2 text-gray-900 hover:text-orange-600 transition-colors duration-200">
                ${category.strCategory}
            </a>
          </li>
          `;
        categoryContainer.insertAdjacentHTML("afterbegin", categoryElement);
    });
}
