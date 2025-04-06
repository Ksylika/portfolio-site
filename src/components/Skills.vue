    <template>
        <section id="skills" class="skills-section">
        <div class="container">
            <h2 class="section-title">Навыки и опыт</h2>
            
            <div class="skills-filters">
            <button 
                v-for="category in categories" 
                :key="category.id"
                class="filter-button" 
                :class="{ active: activeCategory === category.id }"
                @click="setActiveCategory(category.id)"
            >
                {{ category.name }}
            </button>
            </div>
            
            <div class="skills-grid">
            <div 
                v-for="skill in filteredSkills" 
                :key="skill.id"
                class="skill-card stagger-item"
            >
                <div class="skill-icon">
                <i :class="skill.icon"></i>
                </div>
                <h3 class="skill-title">{{ skill.title }}</h3>
                <div class="skill-stack">{{ skill.stack }}</div>
                <p class="skill-description">{{ skill.description }}</p>
            </div>
            </div>
            
            <div class="skills-chart">
            <canvas id="skillsChart"></canvas>
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
            activeCategory: 'all',
            chart: null,
            categories: [
            { id: 'all', name: 'Все' },
            { id: 'frontend', name: 'Frontend' },
            { id: 'backend', name: 'Backend' },
            { id: 'devops', name: 'DevOps' },
            { id: 'sysadmin', name: 'Системное администрирование' }
            ],
            skills: [
            {
                id: 1,
                category: 'frontend',
                title: 'Frontend',
                icon: 'fas fa-code',
                stack: 'Vue.js 3, JavaScript, SCSS',
                description: 'Разработал 10+ адаптивных интерфейсов с анимациями.'
            },
            {
                id: 2,
                category: 'backend',
                title: 'Backend',
                icon: 'fas fa-server',
                stack: 'Python, FastAPI, PostgreSQL',
                description: 'Создал REST API для внутренних сервисов и интеграций.'
            },
            {
                id: 3,
                category: 'devops',
                title: 'DevOps',
                icon: 'fas fa-cogs',
                stack: 'Docker, Ansible, Zabbix',
                description: 'Сократил время деплоя на 60% через Docker-контейнеризацию.'
            },
            {
                id: 4,
                category: 'sysadmin',
                title: 'Системное администрирование',
                icon: 'fas fa-desktop',
                stack: 'Windows Server, Active Directory, DHCP/DNS',
                description: 'Поддерживал серверную инфраструктуру с 99.9% uptime.'
            },
            {
                id: 5,
                category: 'backend',
                title: 'Автоматизация',
                icon: 'fas fa-robot',
                stack: 'Python, Bash/PowerShell',
                description: 'Автоматизировал рутинные задачи, сэкономив 15+ часов в неделю.'
            },
            {
                id: 6,
                category: 'frontend',
                title: 'UI/UX',
                icon: 'fas fa-paint-brush',
                stack: 'HTML5, CSS3, JavaScript',
                description: 'Разработал интерфейсы с акцентом на удобство использования.'
            }
            ]
        };
        },
        computed: {
        filteredSkills() {
            if (this.activeCategory === 'all') {
            return [...this.skills]; // Return a fresh copy of the array
            }
            return this.skills.filter(skill => skill.category === this.activeCategory);
        }
        },
        mounted() {
        this.initChart();
        },
        methods: {
        setActiveCategory(categoryId) {
            console.log(`Setting active category to: ${categoryId}`);
            this.activeCategory = categoryId;
            
            // Re-trigger animations for filtered items
            setTimeout(() => {
            const skillCards = document.querySelectorAll('.skill-card');
            skillCards.forEach((card, i) => {
                card.classList.remove('stagger-visible');
                void card.offsetWidth; // Force reflow to restart animation
                card.classList.add('stagger-visible');
            });
            }, 50);
        },
        initChart() {
            const ctx = document.getElementById('skillsChart')?.getContext('2d');
            if (!ctx) {
            console.error('Skills chart canvas not found');
            return;
            }
            
            // Destroy existing chart if it exists
            if (this.chart) {
            this.chart.destroy();
            }
            
            // Create new chart
            this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Frontend', 'Backend', 'DevOps', 'SysAdmin'],
                datasets: [{
                data: [30, 25, 20, 25],
                backgroundColor: [
                    this.mode === 'devops' ? '#00f7ff' : '#9d00ff',
                    '#FF6B35',
                    this.mode === 'devops' ? '#9d00ff' : '#00f7ff',
                    '#4ECDC4'
                ],
                borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                    color: '#FFFFFF',
                    font: {
                        family: 'Roboto'
                    }
                    }
                },
                tooltip: {
                    callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                    }
                }
                }
            }
            });
        }
        },
        watch: {
        mode() {
            this.initChart();
        }
        }
    }
    </script>
