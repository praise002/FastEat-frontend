const urlParams = new URLSearchParams(window.location.search);

const mealId = urlParams.get("id");
console.log(mealId);

if (mealId) {
}

async function fetchCategoryDetail(mealId) {
    const categoryDetailUrl = `https://https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try {
        const response = await fetch(categoryDetailUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const meal = data.meals.find((cat) => cat.idMeal === mealId);
        console.log(meal);
        displayMealDetail(meal);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayMealDetail(meal) {
    const mealDetailContainer = document.querySelector("#meal-container");
    console.log(meal);

    const mealDetailElement = `
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
                    <div class="max-w-2xl">
                        <img class="w-full h-full" src="/assets/images/img-6.jpg" alt="" />
                    </div>

                    <div class="px-6 py-8">
                        <div class="text-black">
                            <h3 class="text-orange-600 text-2xl py-3 border-b border-b-orange-600">
                                Beef and Oyster pie
                            </h3>
                            <div class="flex items-center uppercase tracking-widest mb-2 pt-10">
                                <span class="mr-2">Category:</span>
                                <span class="font-normal">Beef</span>
                            </div>
                            <div class="flex items-center tracking-widest mb-2">
                                <span class="mr-2 uppercase">Source:</span>
                                <a class="font-normal hover:text-orange-600 transition-colors duration-300"
                                    href="https://www.bbc.co.uk/food/recipes/beef_and_oyster_pie_65230">Beef</a>
                            </div>
                            <div class="mb-10">
                                <span class="mr-2">Tags:</span>
                                <span class="border border-orange-600 px-2 py-1 rounded-md">Pie</span>
                            </div>
                        </div>
                        <div class="bg-orange-600 p-4">
                            <h6 class="my-3">Ingredients</h6>
                            <ul class="grid grid-cols-2 sm:grid-cols-3 font-normal xs:grid-cols-1">
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">1</span>
                                    <span>Beef</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">2</span>
                                    <span>Olive Oil</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">3</span>
                                    <span>Shallots</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">4</span>
                                    <span>Garlic</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">5</span>
                                    <span>Bacon</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">6</span>
                                    <span>Thyme</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">7</span>
                                    <span>Bay Leaf</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">8</span>
                                    <span>Stout</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">9</span>
                                    <span>Beef Stock</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">10</span>
                                    <span>Corn Flour</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">11</span>
                                    <span>Oysters</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">12</span>
                                    <span>Plain Flour</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">13</span>
                                    <span>Salt</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">14</span>
                                    <span>Butter</span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <span
                                        class="mr-2 bg-custom h-5 w-5 border shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-white border-solid rounded-full inline-flex items-center justify-center">15</span>
                                    <span>Eggs</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="m-20 text-black mx-auto">
                    <h6>Measure:</h6>
                    <ul
                        class="grid grid-cols-1 sm:grid-cols-2 min-w-[280px] border bg-gray-50 border-solid my-3 p-6 space-y-2">
                        <li class="inline-flex items-center font-medium">
                            <span class="text-orange-600 mr-2">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span> goog </span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>1 tbs chopped</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>400ml</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>400g</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>250g</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>3 tbs</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>125g</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>330ml</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>2 tbs</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>pinch</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>To Glaze</span>
                        </li>
                        <li class="inline-flex items-center font-medium">
                            <span class="mr-2 text-orange-600">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z">
                                    </path>
                                </svg>
                            </span>
                            <span>To Glaze</span>
                        </li>
                    </ul>
                </div>
                <div class="text-black">
                    <h6>Instructions:</h6>
                    <ul class="space-y-2 mt-4 font-medium">
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
                                Season the beef cubes with salt and black
                                pepper. Heat a tablespoon of oil in the frying
                                pan and fry the meat over a high heat. Do this
                                in three batches so that you don’t overcrowd the
                                pan, transferring the meat to a large flameproof
                                casserole dish once it is browned all over. Add
                                extra oil if the pan seems dry.
                            </span>
                        </li>
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
                                In the same pan, add another tablespoon of oil
                                and cook the shallots for 4-5 minutes, then add
                                the garlic and fry for 30 seconds. Add the bacon
                                and fry until slightly browned. Transfer the
                                onion and bacon mixture to the casserole dish
                                and add the herbs.
                            </span>
                        </li>
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
                            <span>Preheat the oven to 180C/350F/Gas 4.</span>
                        </li>
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
                                Pour the stout into the frying pan and bring to
                                the boil, stirring to lift any stuck-on browned
                                bits from the bottom of the pan. Pour the stout
                                over the beef in the casserole dish and add the
                                stock. Cover the casserole and place it in the
                                oven for 1½-2 hours, or until the beef is tender
                                and the sauce is reduced.
                            </span>
                        </li>
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
                                Skim off any surface fat, taste and add salt and
                                pepper if necessary, then stir in the cornflour
                                paste. Put the casserole dish on the hob – don’t
                                forget that it will be hot – and simmer for 1-2
                                minutes, stirring, until thickened. Leave to
                                cool.
                            </span>
                        </li>
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
                                Increase the oven to 200C/400F/Gas 6. To make
                                the pastry, put the flour and salt in a very
                                large bowl. Grate the butter and stir it into
                                the flour in three batches. Gradually add
                                325ml/11fl oz cold water – you may not need it
                                all – and stir with a round-bladed knife until
                                the mixture just comes together. Knead the
                                pastry lightly into a ball on a lightly floured
                                surface and set aside 250g/9oz for the pie lid.
                            </span>
                        </li>
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
                                Roll the rest of the pastry out until about
                                2cm/¾in larger than the dish you’re using. Line
                                the dish with the pastry then pile in the
                                filling, tucking the oysters in as well. Brush
                                the edge of the pastry with beaten egg.
                            </span>
                        </li>
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
                                Roll the remaining pastry until slightly larger
                                than your dish and gently lift over the filling,
                                pressing the edges firmly to seal, then trim
                                with a sharp knife. Brush with beaten egg to
                                glaze. Put the dish on a baking tray and bake
                                for 25-30 minutes, or until the pastry is
                                golden-brown and the filling is bubbling.
                            </span>
                        </li>
                    </ul>
                </div>
        `;
    mealDetailContainer.innerHTML = mealDetailElement;
}
