document.addEventListener('DOMContentLoaded', function() {
    // Navbar (existant)
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                mobileMenu.classList.remove('active');
                navbarMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            document.querySelectorAll('.navbar-link').forEach(el => el.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });
    
    // Effet parallax
    const parallaxBg = document.getElementById('parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            parallaxBg.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            
            // Effet navbar au scroll
            const navbar = document.querySelector('.navbar');
            if (scrollPosition > 20) {
                navbar.style.backgroundColor = 'rgba(32, 33, 36, 0.98)';
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.backgroundColor = 'rgba(32, 33, 36, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
    
    const typedTextSpan = document.querySelector('.typed-text');
    if (typedTextSpan) {
        const textArray = ["Développeur", "Étudiant", "Créatif"]; 
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if(textArrayIndex>=textArray.length) textArrayIndex=0;
                setTimeout(type, typingDelay + 1100);
            }
        }
        
        setTimeout(type, 1000);
    }
    
    // Animation bordure image
    const imgBorder = document.querySelector('.img-border-effect');
    if (imgBorder) {
        setInterval(() => {
            imgBorder.style.borderImage = `linear-gradient(${Math.random()*360}deg, var(--primary-color), var(--light-color)) 1`;
        }, 3000);
    }
});