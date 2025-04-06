<template>
    <div>
      
      <div class="loading-screen" v-if="loading">
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <div class="loading-cube"></div>
      </div>
  
      
      <div class="main-content" v-else>
        
        <Header 
          @mode-change="toggleMode"
          :current-mode="currentMode"
        ></Header>
  
        
        <section class="hero">
          <div class="particles-container" id="particles-js"></div>
          <div class="hero-content">
            <h1 class="glitch-text">Игорь Загребин</h1>
            <h2 class="subtitle">{{ currentMode === 'devops' ? 'DevOps Engineer' : 'Fullstack Developer' }}</h2>
            <p class="hero-description">Автоматизирую процессы, создаю современные веб-решения</p>
            <button class="cta-button" @click="scrollToContact">
              <span class="button-text">Связаться</span>
              <span class="button-glow"></span>
            </button>
          </div>
        </section>
  
        
        <About :mode="currentMode"></About>
  
        
        <Skills :mode="currentMode"></Skills>
  
        
        <Projects :mode="currentMode"></Projects>
  
        
        <Experience></Experience>
  
        
        <Contact ref="contactSection"></Contact>
  
        
        <footer class="site-footer">
          <div class="footer-content">
            <p>&copy; 2025 Игорь Загребин. Все права защищены.</p>
            <div class="social-links">
              <a href="https://github.com/" target="_blank" class="social-icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/Snioqqq" target="_blank" class="social-icon">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import Skills from './components/Skills.vue'
  import Projects from './components/Projects.vue'
  import Experience from './components/Experience.vue'
  import Contact from './components/Contact.vue'
  import { particlesConfig } from '@/assets/js/particles-config.js';
  import { initAllAnimations } from '@/assets/js/animations';


  export default {
    name: 'App',
    components: {
      Header,
      About,
      Skills,
      Projects,
      Experience,
      Contact
    },
    data() {
      return {
        loading: true,
        currentMode: 'devops'
      }
    },
    methods: {
      
      toggleMode(mode) {
        this.currentMode = mode;
        document.documentElement.style.setProperty(
          '--accent-current', 
          mode === 'devops' ? 'var(--accent-devops)' : 'var(--accent-fullstack)'
        );
        
        // Update particles color if available
        if (window.pJSDom && window.pJSDom[0]) {
          const color = mode === 'devops' ? "#00f7ff" : "#9d00ff";
          window.pJSDom[0].pJS.particles.color.value = color;
          window.pJSDom[0].pJS.particles.line_linked.color = color;
          window.pJSDom[0].pJS.fn.particlesRefresh();
        }
      },
      scrollToContact() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }
      },
      initAnimations() {
        
        window.AppAnimations = initAllAnimations();
        
        // Initialize animations
        if (typeof initGSAPAnimations === 'function') {
          initGSAPAnimations();
        }
        if (typeof initScrollAnimations === 'function') {
          initScrollAnimations();
        }
        if (typeof initModeToggleAnimation === 'function') {
          initModeToggleAnimation();
        }
        
        
      
        if (window.particlesJS && document.getElementById('particles-js')) {
          window.particlesJS('particles-js', particlesConfig);
        }   
        

        // Set up header scroll effect
        const header = document.querySelector('.site-header');
        if (header) {
          window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
              header.classList.add('header-scrolled');
            } else {
              header.classList.remove('header-scrolled');
            }
          });
        }
      }
    },
    mounted() {
      setTimeout(() => {
      this.loading = false;
      this.initAnimations();
    }, 3000);
    }
  }
  </script>
    