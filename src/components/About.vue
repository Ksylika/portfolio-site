<template>
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">Обо мне</h2>
        
        <div class="about-content">
          <div class="about-image">
            <img src="../assets/img/profile.jpg" alt="Игорь Загребин" />
          </div>
          
          <div class="about-text">
            <h3>Привет! Я Игорь — {{ mode === 'devops' ? 'DevOps-инженер' : 'Fullstack-разработчик' }} с 3.5+ годами опыта.</h3>
            
            <p>Создаю решения, объединяющие автоматизацию и современный код. Моя цель — оптимизировать процессы разработки и внедрения программного обеспечения, делая их более эффективными и надежными.</p>
            
            <p v-if="mode === 'devops'">Как DevOps-инженер, я специализируюсь на автоматизации развертывания, мониторинге и обеспечении бесперебойной работы сервисов. Мой опыт включает работу с Docker, Windows Server, Zabbix и другими инструментами для создания надежной инфраструктуры.</p>
            
            <p v-else>Как Fullstack-разработчик, я создаю современные веб-приложения с использованием Vue.js на фронтенде и Python (FastAPI) на бэкенде. Я уделяю особое внимание пользовательскому опыту, производительности и масштабируемости решений.</p>
            
            <button class="cta-button" @click="openResumeModal">
              <span class="button-text">Подробнее о карьере</span>
              <span class="button-glow"></span>
            </button>
          </div>
        </div>
        
        <div class="timeline">
          <div class="timeline-item stagger-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">Февраль 2023 — настоящее время</div>
            <h3>Старший группы системного администрирования/разработчик</h3>
            <p>РГДБ "Российская государственная детская библиотека"</p>
            <p>Руководство командой, автоматизация процессов, системное администрирование, разработка веб-сервисов на Vue.js и FastAPI.</p>
          </div>
          
          <div class="timeline-item stagger-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">Октябрь 2021 — Январь 2023</div>
            <h3>Младший системный администратор</h3>
            <p>РГДБ "Российская государственная детская библиотека"</p>
            <p>Разработка скриптов автоматизации, оптимизация локальной сети, техническая поддержка.</p>
          </div>
          
          <div class="timeline-item stagger-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2021</div>
            <h3>Образование: МГОК</h3>
            <p>Специальность: Системное администрирование</p>
          </div>
        </div>
      </div>
      
      
      <div class="resume-modal" v-if="showModal">
        <div class="modal-overlay" @click="closeResumeModal"></div>
        <div class="modal-content">
          <div class="modal-header">
            <h3>Резюме</h3>
            <button class="modal-close" @click="closeResumeModal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <iframe :src="resumeUrl" frameborder="0" width="100%" height="600px"></iframe>
          </div>
          <div class="modal-footer">
            <a :href="resumeUrl" download class="download-button">
              <i class="fas fa-download"></i>
              <span>Скачать PDF</span>
            </a>
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
        showModal: false,
        resumeUrl: './Загребин Игорь.pdf'
      }
    },
    methods: {
      openResumeModal() {
        this.showModal = true;
        document.body.classList.add('modal-open');
        
        // Initialize animation if GSAP is available
        if (window.gsap) {
          gsap.fromTo('.modal-content', 
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
          );
        }
      },
      closeResumeModal() {
        if (window.gsap) {
          gsap.to('.modal-content', {
            y: -50, 
            opacity: 0, 
            duration: 0.3, 
            ease: 'power2.in',
            onComplete: () => {
              this.showModal = false;
              document.body.classList.remove('modal-open');
            }
          });
        } else {
          this.showModal = false;
          document.body.classList.remove('modal-open');
        }
      }
    }
  }
  </script>
