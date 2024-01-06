const link = "https://thbarkouki.limesurvey.net/436894?lang=en";

const linkElement = document.getElementById("link");

document.addEventListener("DOMContentLoaded", function() {

    function updateLinkAndRedirect() {
        linkElement.href = link;

        // Automatically redirect to the updated link
        window.location.href = linkElement.href;
        
        //currentIndex = (currentIndex + 1) % links.length; // Cycle through the links
    }

    updateLinkAndRedirect();
});
