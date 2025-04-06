import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { particlesConfig } from '@/assets/js/particles-config'

gsap.registerPlugin(ScrollTrigger)


function initGSAPAnimations() {
    // Header animations
    const logo = document.querySelector(".logo");
    if (logo) {
        gsap.to(logo, {
            duration: 1.5,
            textShadow: "0 0 10px var(--accent-current)",
            repeat: -1,
            yoyo: true
        });
    }
    
    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .contact-button, .submit-button');
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    duration: 0.3,
                    scale: 1,
                    ease: "power2.out"
                });
            });
        });
    }

    // Glitch text effect for hero title
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        const tl = gsap.timeline({repeat: -1, repeatDelay: 5});
        
        tl.to(glitchText, {
            duration: 0.1,
            skewX: 10,
            ease: "power4.inOut"
        })
        .to(glitchText, {
            duration: 0.04,
            opacity: 0.8,
            ease: "power4.inOut"
        })
        .to(glitchText, {
            duration: 0.04,
            skewX: 0,
            opacity: 1,
            ease: "power4.inOut"
        })
        .to(glitchText, {
            duration: 0.04,
            skewX: -10,
            ease: "power4.inOut"
        })
        .to(glitchText, {
            duration: 0.04,
            opacity: 0.8,
            ease: "power4.inOut"
        })
        .to(glitchText, {
            duration: 0.04,
            skewX: 0,
            opacity: 1,
            ease: "power4.inOut"
        });
    }

    // Scroll animations for timeline items
    if (typeof ScrollTrigger !== 'undefined') {
        
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 90%",
                end: "bottom 20%",
                toggleClass: {targets: item, className: "active"},
                once: true
            });
        });
        
        // Animate skill cards on scroll
        gsap.utils.toArray('.skill-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.6, 
                delay: i * 0.05,
                ease: "power3.out"
            });
        });
        
        // Animate project cards on scroll
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.05,
                ease: "power3.out"
            });
        });

    // 3D tilt effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xPercent = x / rect.width - 0.5;
                const yPercent = y / rect.height - 0.5;
                
                gsap.to(card, {
                    duration: 0.5,
                    rotationY: xPercent * 10,
                    rotationX: yPercent * -10,
                    ease: "power1.out",
                    transformPerspective: 900,
                    transformStyle: "preserve-3d"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.5,
                      rotationY: 0,
                    rotationX: 0,
                    ease: "power1.out"
                });
            });
        });
        
    }
    const careerButtons = document.querySelectorAll('.about-text .cta-button');
    careerButtons.forEach(button => {
        button.addEventListener('click', () => {
            gsap.fromTo('.modal-content', 
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        });
    });

    const modalCloseButtons = document.querySelectorAll('.modal-close, .modal-overlay');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            gsap.to('.modal-content', {
                y: -50, 
                opacity: 0, 
                duration: 0.3, 
                ease: 'power2.in'
            });
        });
    });
}}  

// Initialize loading animation
function initLoadingAnimation() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;
    
    const tl = gsap.timeline({
        onComplete: () => {
            // Hide loading screen after animation completes
            loadingScreen.style.display = 'none';
        }
    });
    
    const progressFill = document.querySelector('.progress-fill');
    const loadingCube = document.querySelector('.loading-cube');
    
    if (progressFill && loadingCube) {
        tl.to(progressFill, {
            duration: 2.5,
            width: '100%',
            ease: "power2.inOut"
        })
        .to(loadingCube, {
            duration: 0.5,
            rotation: 90,
            scale: 1.5,
            opacity: 0,
            ease: "power2.inOut"
        }, "-=0.5");
    }
}

// Initialize scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('stagger-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });
    
    document.querySelectorAll('.stagger-item').forEach((item, index) => {
        // Reduce delay between staggered items
        item.style.animationDelay = `${index * 0.05}s`;
        observer.observe(item);
    });
}

// Initialize mode toggle animation
function initModeToggleAnimation() {
    const devopsMode = document.querySelector('.mode-option:first-child');
    const fullstackMode = document.querySelector('.mode-option:last-child');
    const modeSlider = document.querySelector('.mode-slider');
    
    if (devopsMode && fullstackMode && modeSlider) {
        devopsMode.addEventListener('click', () => {
            gsap.to(modeSlider, {
                duration: 0.3,
                left: '0.3rem',
                ease: "power2.inOut",
                backgroundColor: 'var(--accent-devops)'
            });
            
            // Change accent color
            document.documentElement.style.setProperty('--accent-current', 'var(--accent-devops)');
            
            // Update particles color if available
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.color.value = "#00f7ff";
                window.pJSDom[0].pJS.particles.line_linked.color = "#00f7ff";
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        });
        
        fullstackMode.addEventListener('click', () => {
            gsap.to(modeSlider, {
                duration: 0.3,
                left: 'calc(50% - 0.3rem)',
                ease: "power2.inOut",
                backgroundColor: 'var(--accent-fullstack)'
            });
            
            // Change accent color
            document.documentElement.style.setProperty('--accent-current', 'var(--accent-fullstack)');
            
            // Update particles color if available
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.color.value = "#9d00ff";
                window.pJSDom[0].pJS.particles.line_linked.color = "#9d00ff";
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        });
    }
}

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelectorAll('.nav-item a');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isOpen = document.body.classList.contains('menu-open');
            
            if (isOpen) {
                gsap.to('.nav-item', {
                    opacity: 0,
                    y: -20,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: "power2.in"
                });
            } else {
                gsap.fromTo('.nav-item', 
                    {opacity: 0, y: -20},
                    {opacity: 1, y: 0, stagger: 0.05, delay: 0.2, duration: 0.3, ease: "power2.out"}
                );
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('nav');
        const hamburger = document.querySelector('.hamburger-menu');
        
        if (nav && hamburger && document.body.classList.contains('menu-open')) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.click();
            }
        }
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (document.body.classList.contains('menu-open') && hamburger) {
                hamburger.click();
            }
        });
    });
}

function initFilterAnimations() {
    // Re-initialize scroll animations when filter buttons are clicked
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            // Small delay to let Vue update the DOM
            setTimeout(() => {
                // Reinitialize scroll animations for newly visible items
                const staggerItems = document.querySelectorAll('.stagger-item:not(.stagger-visible)');
                staggerItems.forEach((item, index) => {
                    item.style.animationDelay = `${index * 0.05}s`;
                    setTimeout(() => {
                        item.classList.add('stagger-visible');
                    }, 50);
                });
            }, 100);
        });
    });
}

// Make init functions available globally
export function initAllAnimations() {
        initLoadingAnimation();
        setTimeout(() => {
            initGSAPAnimations();
            initScrollAnimations();
            initModeToggleAnimation();
            initMobileMenu(),
            initFilterAnimations()
            // Initialize particles.js
            if (window.particlesJS && document.getElementById('particles-js')) {
                particlesJS('particles-js', particlesConfig);
            }

            ScrollTrigger.refresh();        
        }, 0);
    };
