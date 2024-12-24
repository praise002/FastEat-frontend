import api from "./api.js";

const urlParams = new URLSearchParams(window.location.search);

const mealId = urlParams.get("id");

// if (mealId) {
//     fetchMealDetail(mealId);
// }

if (mealId) {
    const data = await api.getMealDetails(mealId);
    const meal = data.meals.find((cat) => cat.idMeal === mealId);

    const data2 = await api.getCategories();
    const categories = data2.categories;

    displayMealDetail(meal);
    displayCategories(categories);
}

// async function fetchMealDetail(mealId) {
//     const mealDetailUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     console.log(mealDetailUrl);
//     try {
//         const response = await fetch(mealDetailUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         const meal = data.meals.find((cat) => cat.idMeal === mealId);
//         const category = meal.strCategory;
//         console.log(category);
//         console.log(meal);
//         displayMealDetail(meal);

//         // Fetch categories after displaying meal
//         if (meal.strCategory) {
//             await fetchCategories(meal.strCategory);
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

function displayMealDetail(meal) {
    const mealDetailContainer = document.querySelector("#meal-container");

    // Create array of ingredients
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(meal[`strIngredient${i}`]);
        }
    }

    // Create array of measures
    const measures = [];
    for (let i = 1; i <= 20; i++) {
        const measure = meal[`strMeasure${i}`];
        if (measure && measure.trim() !== "") {
            measures.push(measure);
        }
    }

    const instructions = meal.strInstructions
        .split("\r\n")
        .filter((instruction) => instruction.trim() !== "")
        .map((instruction) => instruction.replace(/^\d+\.\s*/, ""));

    document.querySelector("#meal-paragraph").textContent = meal.strMeal;
    
    const mealDetailElement = `
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
                    <div class="max-w-2xl">
                        <img class="w-full h-full" src="${
                            meal.strMealThumb
                        }" alt="${meal.strMeal} meal illustration" />
                    </div>

                    <div class="px-6 py-8">
                        <div class="text-black">
                            <h3 class="text-orange-600 text-2xl py-3 border-b border-b-orange-600">
                                ${meal.strMeal}
                            </h3>
                            <div class="flex items-center uppercase tracking-widest mb-2 pt-10">
                                <span class="mr-2">Category:</span>
                                <span class="font-normal">${
                                    meal.strCategory
                                }</span>                                  </span>
                            </div>
                            ${
                                meal.strTags
                                    ? `<div class="mb-10">
                                  <span class="mr-2">Tags:</span>
                                  ${meal.strTags
                                      .split(",")
                                      .map(
                                          (tag) =>
                                              `<span class="border border-orange-600 px-2 py-1 rounded-md mr-2">${tag.trim()}</span>`
                                      )
                                      .join("")}
                              </div>`
                                    : ""
                            }
                        </div>
                        <div class="bg-orange-600 p-4">
                            <h6 class="my-3">Ingredients</h6>
                            <ul class="grid grid-cols-2 sm:grid-cols-3 font-normal xs:grid-cols-1">
                            ${ingredients
                                .map(
                                    (ingredient, index) => `
                              <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">${
                                            index + 1
                                        }</span>
                                    <span>${ingredient}</span>
                                </li>
                              `
                                )
                                .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="m-20 text-black mx-auto">
                    <h6>Measure:</h6>
                    <ul
                        class="grid grid-cols-1 sm:grid-cols-2 min-w-[280px] border bg-gray-50 border-solid my-3 p-6 space-y-2">
                        ${measures
                            .map(
                                (measure) => `
                          <li class="inline-flex items-center font-medium">
                            <span class="text-orange-600 mr-2">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>${measure}</span>
                        </li>
                          `
                            )
                            .join("")}   
                    </ul>
                </div>
                <div class="text-black">
                    <h6>Instructions:</h6>
                    <ul class="space-y-2 mt-4 font-medium">
                    ${instructions
                        .map(
                            (instruction) => `
                      <li class="inline-flex">
                            <span class="text-orange-600 mr-2">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                    class="text-orange li-icon" height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z">
                                    </path>
                                    <path
                                        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z">
                                    </path>
                                </svg>
                            </span>
                            <span>
                                ${instruction}
                            </span>
                        </li>
                      
                      `
                        )
                        .join("")}   
                    </ul>
                </div>
        `;
    mealDetailContainer.innerHTML = mealDetailElement;
}

// async function fetchCategories() {
//     const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         displayCategories(data.categories);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

function displayCategories(categories) {
    const categoryContainer = document.querySelector("#category-container");

    categories.map((category) => {
        const categoryElement = `
        <div id="category-${category.idCategory}" class="relative bg-white h-full w-full flex items-center justify-center">
          <a href="./category-detail.html?name=${category.strCategory}&id=${category.idCategory}"><img loading="lazy"
            class="p-3 hover:scale-90 transition-all ease-in-out duration-300"
            src="${category.strCategoryThumb}" alt="${category.strCategory} category illustration" /></a>
          <div>
            <h3 class="absolute top-1 right-1 rounded bg-orange-600 py-1 px-2 text-sm uppercase">
                ${category.strCategory}
            </h3>
          </div>
      </div>
          `;
        categoryContainer.insertAdjacentHTML("afterbegin", categoryElement);
    });
}
