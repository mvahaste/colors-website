// Autor: Mikk Vahaste
//
// Kõik nupud leheküljel
buttons = document.getElementsByTagName("button");

//
// FUNKTSIOONID
//

function animateButtonClick(target) {
    // Võta ära animatsiooni class, vajalik kui kasutaja vajutab nuppu enne 250ms täis saamist
    target.classList.remove("animate-button-press");

    // Lisa nupule animatsiooni class
    target.classList.add("animate-button-press");

    // Võta 250ms pärast animatsiooni class ära, et animatsioon saaks uuesti mängida
    setTimeout(function () {
        target.classList.remove("animate-button-press");
    }, 300);
}

//
// EVENTLISTENERID
//

// Käi üle kõikide nuppude
for (var i = 0, button; (button = buttons[i]); i++) {
    // Lisa igale nupule EventListener, kuula vajutust
    button.addEventListener("click", (e) => {
        animateButtonClick(e.target);
    });
}
