
// Get the translate icon and options
const translateIcon = document.getElementById('translate-icon');
const translateOptions = document.getElementById('translate-options');

// Add event listener to translate icon
translateIcon.addEventListener('click', () => {
    translateOptions.classList.toggle('show');
});

// Add event listener to translation options
translateOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const lang = e.target.getAttribute('data-lang');
        translatePage(lang);
    }
});

// Translate page function
function translatePage(lang) {
    // Use translate.js to translate the page
    translate(lang, (translatedText) => {
        // Replace original text with translated text
        document.body.innerHTML = translatedText;
    });
}

// Translate function using translate.js
function translate(lang, callback) {
    const translate = new Translate();
    translate.lang(lang);
    translate.text(document.body.textContent, (translatedText) => {
        callback(translatedText);
    });
}
translateOptions.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
      const lang = e.target.getAttribute('data-lang');
      translatePage(lang);
  }
});