const toggle = document.getElementById('theme-toggle');
const label = document.getElementById('toggle-label');

toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');

});