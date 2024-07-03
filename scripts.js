document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header-placeholder", "header.html");
    loadHTML("footer-placeholder", "footer.html");
});

function loadHTML(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML:', error));
}
