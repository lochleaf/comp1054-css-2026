// Select all tab that point to #tabpanel IDs
const tabs = document.querySelectorAll('a[href^="#tabpanel"]');

// Select all elements that have role= tabpanel text box
const panels = document.querySelectorAll('[role="tabpanel"]');

// Loop through each tab
tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Hide all panels
        panels.forEach(panel => panel.style.display = 'none');

        // Remove class
        tabs.forEach(t => t.classList.remove('active'));

        // Show panel
        const target = document.querySelector(this.getAttribute('href'));
        target.style.display = 'block';

        // Add class
        this.classList.add('active');
    });
});

// used class info for java and ref

// also used this site to re-explain code and examples  https://www.w3schools.com/js/default.asp 