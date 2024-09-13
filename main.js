const links = [
    "https://thbarkouki.limesurvey.net/954158?lang=en",
    "https://thbarkouki.limesurvey.net/215748?lang=en"
    ];

function redirectToRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * links.length);

    window.location.href = links[randomIndex];
}

window.onload = redirectToRandomWebsite;
