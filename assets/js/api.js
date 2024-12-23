const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const api = {
    // Reusable fetch function
    async fetchData(endpoint) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    },

    // Specific API methods
    async getCategories() {
        return this.fetchData("/categories.php");
    },

    async getMealDetails(mealId) {
        return this.fetchData(`/lookup.php?i=${mealId}`);
    },

    async getMealsByCategory(categoryName) {
        return this.fetchData(`/filter.php?c=${categoryName}`);
    },
};

export default api;