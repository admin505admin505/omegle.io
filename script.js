// script.js
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("ip-banner");
    const acceptButton = document.getElementById("accept");
    const rejectButton = document.getElementById("reject");

    // Check if user has already accepted/rejected
    const hasAccepted = localStorage.getItem("cookieConsentAccepted");

    if (!hasAccepted) {
        banner.style.display = "block";
    }

    acceptButton.addEventListener("click", function () {
        banner.style.display = "none";
        localStorage.setItem("cookieConsentAccepted", true);
    });

    rejectButton.addEventListener("click", function () {
        // Handle rejection (e.g., disable tracking)
        banner.style.display = "none";
    });
});
