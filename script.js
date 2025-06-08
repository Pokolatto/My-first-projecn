// Smooth scroll and active nav link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Modal logic for movie details
document.querySelectorAll('.movie-card .read-more').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const infoId = this.getAttribute('onclick') 
            ? this.getAttribute('onclick').match(/openModal\('([^']+)'\)/)?.[1]
            : null;
        const infoDiv = infoId ? document.getElementById(infoId) : null;
        if (infoDiv) {
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = infoDiv.innerHTML;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal on X, overlay click, or Esc
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
window.closeModal = closeModal;

document.getElementById('modal')?.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// Contact form submit (demo)
document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы скоро свяжемся с вами.');
    this.reset();
});