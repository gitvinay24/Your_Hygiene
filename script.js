// Hero CTA Button
const btn = document.querySelectorAll('.btn');
btn.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you! Our team will contact you.');
    });
});
