const links = [
    "https://thbarkouki.limesurvey.net/724641?lang=en",
    "https://thbarkouki.limesurvey.net/236747?lang=en",
    "https://thbarkouki.limesurvey.net/898877?lang=en",
    "https://thbarkouki.limesurvey.net/317844?lang=en",
    "https://thbarkouki.limesurvey.net/448153?lang=en",
    "https://thbarkouki.limesurvey.net/178952?lang=en",
    ];

function redirectToRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * links.length);

    window.location.href = links[randomIndex];
}

window.onload = redirectToRandomWebsite;
