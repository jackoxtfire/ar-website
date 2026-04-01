// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Intersection Observer for Scroll Animations --- //
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));


    // --- 2. Impressum Modal Logic --- //
    const impressumBtn = document.getElementById('open-impressum');
    const modal = document.getElementById('impressum-modal');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    const openModal = () => {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    if (impressumBtn && modal && closeBtn && overlay) {
        impressumBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                closeModal();
            }
        });
    }


    // --- 3. Datenschutz Modal --- //
    const datenschutzBtn = document.getElementById('open-datenschutz');
    const datenschutzModal = document.getElementById('datenschutz-modal');
    const datenschutzClose = datenschutzModal?.querySelector('.modal-close');
    const datenschutzOverlay = datenschutzModal?.querySelector('.modal-overlay');

    const openDatenschutz = () => {
        datenschutzModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };
    const closeDatenschutz = () => {
        datenschutzModal.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    if (datenschutzBtn && datenschutzModal) {
        datenschutzBtn.addEventListener('click', openDatenschutz);
        datenschutzClose.addEventListener('click', closeDatenschutz);
        datenschutzOverlay.addEventListener('click', closeDatenschutz);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && datenschutzModal.classList.contains('is-open')) {
                closeDatenschutz();
            }
        });
    }

    // --- 4. Mobile Nav Drawer --- //
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavOverlay = mobileNav?.querySelector('.mobile-nav-overlay');
    const mobileNavClose = mobileNav?.querySelector('.mobile-nav-close');
    const mobileNavLinks = mobileNav?.querySelectorAll('a.mobile-nav-link');
    const mobileImpressumBtn = mobileNav?.querySelector('.mobile-nav-impressum-btn');

    const openMobileNav = () => {
        mobileNav.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };
    const closeMobileNav = () => {
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', openMobileNav);
        mobileNavOverlay.addEventListener('click', closeMobileNav);
        mobileNavClose.addEventListener('click', closeMobileNav);

        // Close on nav link click (smooth scroll handled by CSS)
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        // Open impressum from mobile menu
        if (mobileImpressumBtn && modal) {
            mobileImpressumBtn.addEventListener('click', () => {
                closeMobileNav();
                setTimeout(openModal, 300);
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
                closeMobileNav();
            }
        });
    }


    // --- 4. Contact Form AJAX Submit --- //
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);

            fetch('/', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                console.log('Netlify form response status:', response.status);
                if (response.ok) {
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'flex';
                } else {
                    alert(currentLang === 'de'
                        ? 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
                        : 'Something went wrong. Please try again.');
                }
            })
            .catch((err) => {
                console.error('Netlify form error (falling back to native submit):', err);
                contactForm.submit();
            });
        });
    }

    // --- 5. Email Obfuscation --- //
    const emailLink = document.getElementById('contact-email-link');
    if (emailLink) {
        const parts = ['office', 'ar-personal-training', 'at'];
        const address = parts[0] + '@' + parts[1] + '.' + parts[2];
        emailLink.href = 'mailto:' + address;
        emailLink.textContent = address;
    }

    // --- 5. Language Switch --- //
    const translations = {
        de: {
            // Navigation
            'nav-philosophie': 'Philosophie',
            'nav-ablauf': 'Ablauf',
            'nav-kontakt': 'Kontakt',

            // Hero
            'hero-eyebrow': 'Exklusives Personal Training',
            'hero-h1': 'Fitter im Alltag, ohne Stress.',
            'hero-p': 'Stabilität und Vitalität für vielbeschäftigte Menschen. Entdecken Sie ein Fitness-Konzept, das sich Ihrem Leben anpasst – nicht umgekehrt.',
            'hero-cta': 'Kennenlernen vereinbaren',

            // Philosophie
            'phil-h2': 'Meine Philosophie',
            'phil-p1': 'Fitness ist kein Ziel an sich, sondern das Fundament für ein erfülltes Leben. In meiner Arbeit mit Klienten verzichte ich auf laute Motivation und kurzfristige Trends.',
            'phil-p2': 'Stattdessen fokussieren wir uns auf Langlebigkeit, kontrollierte Bewegungsabläufe und funktionale Stärke, die Sie im Büro, auf Reisen und im Familienalltag spüren.',
            'phil-p3': 'Als Ihr Coach biete ich Ihnen die nötige Ruhe und Professionalität, um Ihre gesundheitlichen Ziele nachhaltig und ohne zusätzlichen Stress in Ihren Alltag zu integrieren.',

            // Prozess
            'process-h2': 'Der Weg zur Balance',
            'phase1-h3': 'Status Quo',
            'phase1-p': 'Eine detaillierte Analyse Ihrer aktuellen Lebenssituation und körperlichen Verfassung bildet unser Fundament.',
            'phase2-h3': 'Maßgeschneidert',
            'phase2-p': 'Wir entwickeln ein Programm, das keine Überforderung darstellt, sondern als Energiequelle für Ihren Tag fungiert.',
            'phase3-h3': 'Konstanz',
            'phase3-p': 'Regelmäßige Check-ins und Anpassungen garantieren, dass Sie auch bei hohem beruflichem Druck am Ball bleiben.',
            'benefits-h3': 'Ihre Benefits',
            'benefit1': 'Gesteigerte Konzentrationsfähigkeit',
            'benefit2': 'Reduktion von stressbedingten Verspannungen',
            'benefit3': 'Souveräne Ausstrahlung durch bessere Haltung',
            'arc-label': 'Fokus',

            // Kontakt
            'contact-h2': 'Lassen Sie uns starten.',
            'contact-p': 'Fragen Sie ein unverbindliches Erstgespräch an. Ich melde mich innerhalb von 24 Stunden bei Ihnen.',
            'placeholder-name': 'Ihr Name',
            'placeholder-email': 'E-Mail Adresse',
            'placeholder-phone': 'Telefonnummer',
            'placeholder-message': 'Wie kann ich Ihnen helfen?',
            'submit-btn': 'Anfrage senden',
            'contact-location': 'Wien, Österreich',

            // Footer
            'footer-impressum': 'Impressum',
            'footer-datenschutz': 'Datenschutz',

            // Impressum Modal
            'impressum-title': 'Impressum',
            'impressum-intro': 'Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.',
            'impressum-country': 'Österreich',
            'impressum-job-label': 'Berufsbezeichnung:',
            'impressum-job': 'Personal Trainer',
            'impressum-authority-label': 'Aufsichtsbehörde/Gewerbebehörde:',
            'impressum-state-label': 'Verleihungsstaat:',
            'impressum-country2': 'Österreich',
            'impressum-eu-heading': 'EU-Streitschlichtung:',
            'impressum-eu-text': 'Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/odr</a>. Sie können allfällige Beschwerden auch an die oben angegebene E-Mail-Adresse richten.',

            // Form Success
            'form-success-title': 'Vielen Dank!',
            'form-success-text': 'Ihre Anfrage wurde gesendet. Ich melde mich innerhalb von 24 Stunden bei Ihnen.',

            // Mobile CTA
            'mobile-cta': 'Jetzt Anrufen: 0676 318 65 59',
        },
        en: {
            // Navigation
            'nav-philosophie': 'Philosophy',
            'nav-ablauf': 'Process',
            'nav-kontakt': 'Contact',

            // Hero
            'hero-eyebrow': 'Exclusive Personal Training',
            'hero-h1': 'Fitter in everyday life, without stress.',
            'hero-p': 'Stability and vitality for busy people. Discover a fitness concept that adapts to your life – not the other way around.',
            'hero-cta': 'Schedule a Consultation',

            // Philosophy
            'phil-h2': 'My Philosophy',
            'phil-p1': 'Fitness is not a goal in itself, but the foundation for a fulfilling life. In my work with clients, I avoid loud motivation and short-term trends.',
            'phil-p2': 'Instead, we focus on longevity, controlled movement patterns and functional strength that you feel in the office, while travelling and in family life.',
            'phil-p3': 'As your coach, I provide the calm and professionalism you need to integrate your health goals sustainably and without additional stress into your daily routine.',

            // Process
            'process-h2': 'The Path to Balance',
            'phase1-h3': 'Status Quo',
            'phase1-p': 'A detailed analysis of your current lifestyle and physical condition forms our foundation.',
            'phase2-h3': 'Tailored',
            'phase2-p': 'We develop a programme that does not overwhelm, but serves as an energy source for your day.',
            'phase3-h3': 'Consistency',
            'phase3-p': 'Regular check-ins and adjustments ensure you stay on track even under high professional pressure.',
            'benefits-h3': 'Your Benefits',
            'benefit1': 'Improved concentration and mental clarity',
            'benefit2': 'Reduction of stress-related tension',
            'benefit3': 'Confident presence through better posture',
            'arc-label': 'Focus',

            // Contact
            'contact-h2': "Let's get started.",
            'contact-p': 'Request a free initial consultation. I will get back to you within 24 hours.',
            'placeholder-name': 'Your Name',
            'placeholder-email': 'Email Address',
            'placeholder-phone': 'Phone Number',
            'placeholder-message': 'How can I help you?',
            'submit-btn': 'Send Request',
            'contact-location': 'Vienna, Austria',

            // Footer
            'footer-impressum': 'Legal Notice',
            'footer-datenschutz': 'Privacy Policy',

            // Impressum Modal
            'impressum-title': 'Legal Notice',
            'impressum-intro': 'Disclosure obligation pursuant to §5 E-Commerce Act, §14 Austrian Commercial Code, §63 Trade Regulation Act and disclosure obligation pursuant to §25 Media Act.',
            'impressum-country': 'Austria',
            'impressum-job-label': 'Professional title:',
            'impressum-job': 'Personal Trainer',
            'impressum-authority-label': 'Supervisory authority:',
            'impressum-state-label': 'Country of award:',
            'impressum-country2': 'Austria',
            'impressum-eu-heading': 'EU Dispute Resolution:',
            'impressum-eu-text': 'Consumers have the option of submitting complaints to the EU\'s online dispute resolution platform: <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/odr</a>. You may also direct any complaints to the email address listed above.',

            // Form Success
            'form-success-title': 'Thank you!',
            'form-success-text': 'Your request has been sent. I will get back to you within 24 hours.',

            // Mobile CTA
            'mobile-cta': 'Call Now: 0676 318 65 59',
        }
    };

    let currentLang = localStorage.getItem('ar-lang') || 'de';

    function applyLanguage(lang) {
        const t = translations[lang];

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.setAttribute('placeholder', t[key]);
            }
        });

        // Update html lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Update button labels (show the OTHER language)
        const btn = document.getElementById('lang-switch-btn');
        if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';
        const mobileBtn = document.getElementById('mobile-lang-switch-btn');
        if (mobileBtn) mobileBtn.textContent = lang === 'de' ? 'EN' : 'DE';

        currentLang = lang;
        localStorage.setItem('ar-lang', lang);
    }

    // Apply saved language on load
    applyLanguage(currentLang);

    // Toggle on button click (desktop + mobile)
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            applyLanguage(currentLang === 'de' ? 'en' : 'de');
        });
    }
    const mobileLangBtn = document.getElementById('mobile-lang-switch-btn');
    if (mobileLangBtn) {
        mobileLangBtn.addEventListener('click', () => {
            applyLanguage(currentLang === 'de' ? 'en' : 'de');
        });
    }
});
