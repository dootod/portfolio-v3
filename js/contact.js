document.addEventListener('DOMContentLoaded', function() {
    // Effet glitch aléatoire sur le titre
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        setInterval(() => {
            glitchTitle.style.animation = 'none';
            void glitchTitle.offsetWidth; // Trigger reflow
            glitchTitle.style.animation = null;
        }, 8000);
    }

    // Animation des inputs
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.querySelector('.input-highlight').style.width = '100%';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.querySelector('.input-highlight').style.width = '0';
            }
        });
    });

    // Effet de scan sur le formulaire
    const form = document.querySelector('.holographic-form');
    if (form) {
        let scanPosition = 0;
        setInterval(() => {
            scanPosition = (scanPosition + 1) % 100;
            form.style.boxShadow = `0 ${scanPosition}px 30px rgba(103, 138, 188, 0.2)`;
        }, 100);
    }

    // Simulation d'envoi du formulaire
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = 'Envoi en cours...';
            submitButton.disabled = true;
            
            // Simulation d'un envoi (à remplacer par ton backend)
            setTimeout(() => {
                submitButton.innerHTML = 'Message envoyé ! <i class="fas fa-check"></i>';
                
                setTimeout(() => {
                    submitButton.innerHTML = 'Envoyer <span class="button-lights"><span class="light red"></span><span class="light yellow"></span><span class="light green"></span></span>';
                    submitButton.disabled = false;
                    contactForm.reset();
                    
                    // Reset les labels
                    document.querySelectorAll('.form-group label').forEach(label => {
                        label.style.top = '15px';
                        label.style.fontSize = '1rem';
                        label.style.color = 'var(--text-gray)';
                    });
                    
                    // Reset les highlights
                    document.querySelectorAll('.input-highlight').forEach(highlight => {
                        highlight.style.width = '0';
                    });
                }, 2000);
            }, 1500);
        });
    }
});