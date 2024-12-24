import api from "./api.js";

const urlParams = new URLSearchParams(window.location.search);

// const categoryDetailUrl =
//     "https://www.themealdb.com/api/json/v1/1/categories.php";

const categoryId = urlParams.get("id");
const categoryName = urlParams.get("name");

// if (categoryId && categoryName) {
//     fetchCategoryDetail(categoryId);
//     fetchMealsByCategory(categoryName);
// }

if (categoryId && categoryName) {
    const data = await api.getCategories();
    const category = data.categories.find(
        (cat) => cat.idCategory === categoryId
    );

    const data2 = await api.getMealsByCategory(categoryName);
    const meals = data2.meals;

    displayCategoryDetail(category);
    displayMeals(meals);
}

// async function fetchCategoryDetail(categoryId) {
//     try {
//         const response = await fetch(categoryDetailUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         const category = data.categories.find(
//             (cat) => cat.idCategory === categoryId
//         );
//         console.log(category);
//         displayCategoryDetail(category);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

function displayCategoryDetail(category) {
    const categoryDetailContainer = document.querySelector(
        "#category-description"
    );

    const categoryDetailElement = `
    <div id="${category.idCategory}">
      <h2 class="text-orange-600 font-bold text-2xl">${category.strCategory}</h2>
      <p class="text-black mt-4 opacity-50 text-[18px] font-medium leading-8">
          ${category.strCategoryDescription}
      </p>
    </div>
      `;
    categoryDetailContainer.innerHTML = categoryDetailElement;
}

// async function fetchMealsByCategory(categoryName) {
//     const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         displayMeals(data.meals);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

function displayMeals(meals) {
    const mealsContainer = document.querySelector("#meals-container");

    meals.map((meal) => {
        const mealElement = `
          <div id="meal-${meal.idMeal}"
            class="border cursor-pointer overflow-hidden max-w-80 mx-auto shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)] bg-white pb-5 flex-col rounded-lg flex items-center justify-center">
            <div class="w-full">
                <a href="./meal-detail.html?id=${meal.idMeal}">
                    <img class="w-full h-full object-cover" loading="lazy" src="${meal.strMealThumb}" alt="${meal.strMeal} meal illustration" />
                </a>
            </div>
            <div class="text-black text-lg">
                ${meal.strMeal}
            </div>
          </div>`;

        mealsContainer.insertAdjacentHTML("afterbegin", mealElement);
    });
}
