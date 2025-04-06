<template>
    <section id="experience" class="experience-section">
      <div class="container">
        <h2 class="section-title">Опыт работы</h2>
        
        <div class="experience-timeline">
          <div class="experience-item stagger-item">
            <div class="experience-date">Февраль 2023 — настоящее время</div>
            <div class="experience-content">
              <h3>Старший группы системного администрирования/разработчик</h3>
              <div class="experience-company">РГДБ "Российская государственная детская библиотека"</div>
              <ul class="experience-list">
                <li>Руководил командой из 3+ сотрудников, распределял задачи, внедрял автоматизацию и оптимизировал процессы.</li>
                <li>Оптимизировал инвентаризацию оборудования (Python), сократив время учёта на 25%.</li>
                <li>Реализовал автоматизацию исправления инцидентов (Python), ускорив процесс на 40%.</li>
                <li>Поддерживал серверную инфраструктуру (Windows Server, Zabbix), обеспечив 99,9% uptime.</li>
                <li>Организовывал IT-поддержку 100+ мероприятий (до 100 участников), включая настройку сети.</li>
                <li>Разработал веб-сервисы на Vue.js и PHP/FastAPI для автоматизации внутренних процессов.</li>
                <li>Внедрил Docker, сократив время развертывания обновлений с 2 часов до 20 минут.</li>
                <li>Создал Telegram-бота для автоматизации поддержки сотрудников.</li>
              </ul>
              <div class="experience-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Windows Server</span>
                <span class="tech-tag">REST API</span>
                <span class="tech-tag">Bash/PowerShell</span>
                <span class="tech-tag">Docker</span>
                <span class="tech-tag">SQL</span>
                <span class="tech-tag">Git</span>
                <span class="tech-tag">Cisco</span>
              </div>
            </div>
          </div>
          
          <div class="experience-item stagger-item">
            <div class="experience-date">Октябрь 2021 — Январь 2023</div>
            <div class="experience-content">
              <h3>Младший системный администратор</h3>
              <div class="experience-company">РГДБ "Российская государственная детская библиотека"</div>
              <ul class="experience-list">
                <li>Разработал 20+ скриптов (Python) для автоматизации рутинных задач (резервное копирование, обработка логов), сократив трудозатраты на 15+ часов в неделю.</li>
                <li>Оптимизировала локальную сеть (VLAN, маршрутизация), повысив её пропускную способность на 35%.</li>
                <li>Реализовал парсинг данных с агрегаторов для наполнения библиотечного каталога (Python, Selenium).</li>
                <li>Подготовил техническую документацию (схемы сети, инструкции), упростив onboarding сотрудников.</li>
              </ul>
              <div class="experience-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Selenium</span>
                <span class="tech-tag">Networking</span>
                <span class="tech-tag">Technical Documentation</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="education-section stagger-item">
          <h3>Образование</h3>
          <div class="education-item">
            <div class="education-date">2026</div>
            <div class="education-content">
              <h4>Московский университет имени С.Ю. Витте, Москва</h4>
              <div class="education-degree">Прикладная информатика, Машинное обучение и нейросети</div>
              <div class="education-status">В процессе обучения</div>
            </div>
          </div>
          
          <div class="education-item">
            <div class="education-date">2021</div>
            <div class="education-content">
              <h4>МГОК</h4>
              <div class="education-degree">Системное администрирование</div>
              <div class="education-status">Завершено</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  .experience-section {
    background-color: var(--bg-darker);
  }
  
  .experience-timeline {
    position: relative;
    margin-bottom: 4rem;
  }
  
  .experience-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    background-color: var(--accent-current);
  }
  
  .experience-item {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 3rem;
  }
  
  .experience-date {
    display: inline-block;
    padding: 0.3rem 1rem;
    background-color: var(--accent-current);
    color: var(--bg-dark);
    border-radius: 4px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .experience-content {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 1.5rem;
    border-left: 3px solid var(--accent-current);
  }
  
  .experience-company {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
  
  .experience-list {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .experience-list li {
    margin-bottom: 0.5rem;
  }
  
  .experience-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tag {
    display: inline-block;
    padding: 0.2rem 0.8rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    font-size: 0.8rem;
    font-family: 'Fira Code', monospace;
  }
  
  .education-section {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 1.5rem;
  }
  
  .education-item {
    display: flex;
    margin-bottom: 1.5rem;
  }
  
  .education-date {
    min-width: 80px;
    color: var(--accent-current);
    font-weight: 700;
  }
  
  .education-degree {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }
  
  .education-status {
    display: inline-block;
    padding: 0.2rem 0.8rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    font-size: 0.8rem;
  }
  </style>
  