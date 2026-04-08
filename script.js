document.addEventListener('DOMContentLoaded', () => {
    const hireMeBtn = document.getElementById('hireMeBtn');
    const contactForm = document.getElementById('portfolioForm');

    // Smooth Scroll for Hire Me Button
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form Submission Handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values (optional, for logic)
            const name = contactForm.querySelector('input[type="text"]').value;
            
            // Visual feedback
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thanks for reaching out, ${name}! Your message has been sent.`);
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // Simple Intersection Observer for Fade-in effects
    const cards = document.querySelectorAll('.about-card, .project-card');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});