export function showLoadingSpinner() {
    document.querySelectorAll("#loading-spinner").forEach(spinner => {
        spinner.classList.remove("hidden");
        spinner.classList.add("inline");
    });
}

export function hideLoadingSpinner() {
    document.querySelectorAll("#loading-spinner").forEach(spinner => {
        spinner.classList.add("hidden");
        spinner.classList.remove("inline");
    });
}