// keydown, length, search button

import api from "./api.js";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (searchTerm.length >= 3) {
        // Check if we're already on index.html
        if (
            window.location.pathname.includes("index.html") ||
            window.location.pathname === "/"
        ) {
            const data = await api.searchMeals(searchTerm);
            handleSearchResults(data.meals);
        } else {
            // Redirect to index.html with search term as query parameter
            window.location.href = `/src/pages/index.html?search=${encodeURIComponent(
                searchTerm
            )}`;
        }
    }
});

// Handle search results display
function handleSearchResults(meals) {
    const mealsSection = document.querySelector('[aria-label="Meals section"]');

    if (meals) {
        mealsSection.classList.remove("hidden");
        displaySearchResults(meals);
    } else {
        mealsSection.classList.remove("hidden");
        mealsSection.innerHTML = `'<p class="text-center text-gray-500">No meals found</p>';`;
    }
}

function displaySearchResults(meals) {
    const mealsContainer = document.querySelector("#meals-container");

    const mealsHTML = meals
        .map(
            (meal) =>
                `<div id="meal-${meal.idMeal}"
            class="border cursor-pointer overflow-hidden max-w-80 mx-auto shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)] bg-white pb-5 flex-col rounded-lg flex items-center justify-center">
            <div class="w-full">
                <a href="./meal-detail.html?id=${meal.idMeal}">
                    <img class="w-full h-full object-cover" loading="lazy" src="${meal.strMealThumb}" alt="${meal.strMeal} meal illustration" />
                </a>
            </div>
            <div class="text-black text-lg">
                ${meal.strMeal}
            </div>
          </div>`
        )
        .join("");
    mealsContainer.innerHTML = mealsHTML;
}

// Check for search parameter on page load
window.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("search");

    if (searchTerm) {
        searchInput.value = searchTerm;
        const data = await api.searchMeals(searchTerm);
        handleSearchResults(data.meals);

        // Remove search parameter from URL
        const newUrl = window.location.pathname; // returns: /src/pages/index.html
        window.history.pushState({}, "", newUrl); // Update URL without reload, Changes URL to: http://localhost:5500/src/pages/index.html
    }
});

