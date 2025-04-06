<template>
  <header class="site-header" id="header">
    <div class="container header-container">
      <div class="logo">
        Игорь Загребин
      </div>
      
      <div class="mode-toggle">
        <div 
          class="mode-option" 
          :class="{ active: currentMode === 'devops' }"
          @click="$emit('mode-change', 'devops')"
        >
          DevOps Mode
        </div>
        <div 
          class="mode-option" 
          :class="{ active: currentMode === 'fullstack' }"
          @click="$emit('mode-change', 'fullstack')"
        >
          Fullstack Mode
        </div>
        <div 
          class="mode-slider" 
          :class="currentMode"
        ></div>
      </div>
      
      
      <div class="hamburger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav :class="{ 'mobile-active': isMobileMenuOpen }">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#about" @click="closeMenu">
              <i class="fas fa-user nav-icon"></i>
              <span>Обо мне</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#skills" @click="closeMenu">
              <i class="fas fa-code nav-icon"></i>
              <span>Навыки</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#projects" @click="closeMenu">
              <i class="fas fa-project-diagram nav-icon"></i>
              <span>Кейсы</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#experience" @click="closeMenu">
              <i class="fas fa-briefcase nav-icon"></i>
              <span>Опыт</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" @click="closeMenu">
              <i class="fas fa-envelope nav-icon"></i>
              <span>Контакты</span>
            </a>
          </li>
        </ul>
        
        <button class="contact-button" @click="scrollToContact">
          Связаться
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    currentMode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    scrollToContact() {
      document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' 
      });
      this.closeMenu();
    },
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.classList.toggle('menu-open', this.isMobileMenuOpen);
    },
    closeMenu() {
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
        document.body.classList.remove('menu-open');
      }
    }
  }
}
</script>
