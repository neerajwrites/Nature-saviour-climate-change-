// Add event listener to button
document.querySelector('button').addEventListener('click', () => {
    alert('Take action');
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});