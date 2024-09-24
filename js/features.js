// Toggle Donation Page
document.getElementById('donate-page')
    .addEventListener('click', function () {
        showSectionById('donation__section');
        setActiveButton('donate-page', 'history-page');
    });

// Toggle History Page
document.getElementById('history-page')
    .addEventListener('click', function () {
        showSectionById('history__section');
        setActiveButton('history-page', 'donate-page');
    });
