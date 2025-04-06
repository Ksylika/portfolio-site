<template>
    <section id="projects" class="projects-section">
      <div class="container">
        <h2 class="section-title">Кейсы и проекты</h2>
        
        <div class="projects-filters">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            class="filter-button" 
            :class="{ active: activeFilter === filter.id }"
            @click="setActiveFilter(filter.id)"
          >
            {{ filter.name }}
          </button>
        </div>
        
        <div class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card stagger-item"
          >
            <img :src="project.image" :alt="project.title" class="project-image">
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-stack">{{ project.stack }}</div>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-links">
                <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i>
                  <span>Демо</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      mode: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        activeFilter: 'all',
        filters: [
          { id: 'all', name: 'Все' },
          { id: 'web', name: 'Веб-разработка' },
          { id: 'automation', name: 'Автоматизация' },
          { id: 'python', name: 'Python' }
        ],
        projects: [
          {
            id: 1,
            category: ['automation', 'python'],
            title: 'Автоматизация инвентаризации РГДБ',
            image: '../assets/img/projects/inventory.jpg',
            stack: 'Python, Docker, PostgreSQL',
            description: 'Система для автоматизации учета оборудования. Сократила время инвентаризации на 25%.',
            github: null,
            demo: null
          },
          {
            id: 2,
            category: ['automation', 'python'],
            title: 'Скрипты исправления инцидентов',
            image: '../assets/img/projects/incidents.jpg',
            stack: 'Python',
            description: 'Автоматизация исправления типовых ИТ-инцидентов. Ускорение процесса на 40%.',
            github: 'https://github.com/Ksylika/ScriptAvtomatizationPack',
            demo: null
          },
          {
            id: 3,
            category: ['web'],
            title: 'Веб-сервис внутренней автоматизации',
            image: '../assets/img/projects/web-service.jpg',
            stack: 'Vue.js, FastAPI, PostgreSQL',
            description: 'Внутренний портал для автоматизации рабочих процессов библиотеки.',
            github: null,
            demo: null
          },
          {
            id: 4,
            category: ['automation', 'python'],
            title: 'Telegram-бот для поддержки',
            image: '../assets/img/projects/telegram-bot.jpg',
            stack: 'Python, Telegram API',
            description: 'Бот для автоматизации технической поддержки сотрудников.',
            github: null,
            demo: null
          },
          {
            id: 5,
            category: ['automation', 'python'],
            title: 'Парсер данных для каталога',
            image: '../assets/img/projects/parser.jpg',
            stack: 'Python, Selenium, BeautifulSoup',
            description: 'Система сбора и обработки данных с агрегаторов для наполнения библиотечного каталога.',
            github: null,
            demo: null
          }
        ]
      };
    },
    computed: {
      filteredProjects() {
        if (this.activeFilter === 'all') {
          return [...this.projects]; // Return a fresh copy of the array
        }
        // Make sure we're checking array membership correctly
        return this.projects.filter(project => 
          project.category && project.category.includes(this.activeFilter)
        );
      }
    },
    methods: {
      setActiveFilter(filterId) {
        console.log(`Setting active filter to: ${filterId}`);
        this.activeFilter = filterId;
        
        // Re-trigger animations for filtered items
        setTimeout(() => {
          const projectCards = document.querySelectorAll('.project-card');
          projectCards.forEach((card, i) => {
            card.classList.remove('stagger-visible');
            void card.offsetWidth; // Force reflow to restart animation
            card.classList.add('stagger-visible');
          });
        }, 50);
      }
    }
  }
  </script>
        
