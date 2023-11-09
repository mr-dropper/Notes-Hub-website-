const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", performSearch);

function performSearch() {
    const query = searchInput.value.toLowerCase();
    let redirectToPage = "";

    // You can create a mapping of search queries to page URLs
    const searchMappings = {
        "book 1": "book1.html",
        "book 2": "book2.html",
        "subject 1": "subject1.html",
        "subject 2": "subject2.html",
        // Add more mappings as needed
    };

    // Check if the query exists in the mapping
    if (searchMappings.hasOwnProperty(query)) {
        redirectToPage = searchMappings[query];
    } else {
        // If the query doesn't match, redirect to the 404 page
        redirectToPage = "404.html"; // A page for "404 Page Not Found"
    }

    // Redirect the user to the appropriate page
    window.location.href = redirectToPage;
}