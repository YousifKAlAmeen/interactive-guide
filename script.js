document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");
    const backButton = document.getElementById("backButton");
    const homeButton = document.getElementById("homeButton");
    const options = document.querySelectorAll(".option");

    // Function to hide all pages
    function hideAllPages() {
        pages.forEach(function(page) {
            page.style.display = "none";
        });
    }

    // Function to show selected page
    function showPage(pageId) {
        hideAllPages();
        document.getElementById(pageId).style.display = "block";
    }

    // Add click event listeners to options
    options.forEach(function(option) {
        option.addEventListener("click", function() {
            showPage(option.dataset.pageId);
        });
    });

    // Add click event listener to back button
    backButton.addEventListener("click", function() {
        hideAllPages();
        document.getElementById("unitTypes").style.display = "block";
    });

    // Add click event listener to home button
    homeButton.addEventListener("click", function() {
        hideAllPages();
        document.getElementById("unitTypes").style.display = "block";
    });
});
