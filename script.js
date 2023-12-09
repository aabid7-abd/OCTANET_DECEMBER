function selectLanguage(language) {
    var dropdownOptions = document.querySelectorAll('.dropdown-content a');
    for (var i = 0; i < dropdownOptions.length; i++) {
        dropdownOptions[i].classList.remove('selected');
    }

    document.getElementById('selected-language').innerText = language;
    document.querySelector('.button-container').classList.remove('open');
    var selectedOption = document.querySelector('.dropdown-content a[href="#"][onclick="selectLanguage(\'' + language + '\')"]');
    selectedOption.classList.add('selected');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language-button').addEventListener('click', function () {
        document.querySelector('.button-container').classList.toggle('open');
    });
});