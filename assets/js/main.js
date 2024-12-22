const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

async function fetchCategories() {
    try {
        const response = await fetch(apiUrl);
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.categories);
        displayCategories(data.categories);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayCategories(categories) {
    const categoryContainer = document.querySelector("#category-container");

    categories.forEach((category) => {
        console.log(category);
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

fetchCategories();

