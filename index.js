var chapters = document.getElementsByClassName('chapter-title');

for (let i = 0; i < chapters.length; i++) {
    chapters[i].addEventListener('click', function () {
        toggleVisibility(this.nextElementSibling);
    });
}

function toggleVisibility(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
    else {
        element.classList.add('hidden');
    }
}