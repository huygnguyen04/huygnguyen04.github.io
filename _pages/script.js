// script.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');

    // Check for saved user preference, if any, on load of the website
    const currentMode = localStorage.getItem('darkMode') || 'light';
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('.timeline-block').forEach(block => block.classList.add('dark-mode'));
        document.querySelectorAll('.details').forEach(detail => detail.classList.add('dark-mode'));
        document.querySelectorAll('.award').forEach(award => award.classList.add('dark-mode'));
        toggleButton.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('.timeline-block').forEach(block => block.classList.toggle('dark-mode'));
        document.querySelectorAll('.details').forEach(detail => detail.classList.toggle('dark-mode'));
        document.querySelectorAll('.award').forEach(award => award.classList.toggle('dark-mode'));
        toggleButton.classList.toggle('dark-mode');

        let mode = 'light';
        if (document.body.classList.contains('dark-mode')) {
            mode = 'dark';
        }
        // Save user preference
        localStorage.setItem('darkMode', mode);
    });
});
