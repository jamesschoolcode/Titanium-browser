document.getElementById("load-btn").addEventListener("click", function() {
    let urlInput = document.getElementById("url-input").value.trim();

    // Ensure the input starts with 'http:// or 'https://'
    if (urlInput && !urlInput.startsWith('http://') && !urlInput.startsWith('https://')) {
        urlInput = 'http://' + urlInput;
    }

    // Set the iframe source to the input URL
    let iframe = document.getElementById("browser-frame");
    iframe.src = urlInput;
});

// Allow pressing 'Enter' to trigger the Go button click
document.getElementById("url-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("load-btn").click();
    }
});
