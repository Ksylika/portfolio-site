<template>
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">Контакты</h2>
        
        <div class="contact-container">
          <div class="contact-info">
            <div class="contact-item stagger-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:igor4666z@gmail.com">igor4666z@gmail.com</a></p>
              </div>
            </div>
            
            <div class="contact-item stagger-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h3>Телефон</h3>
                <p><a href="tel:+79035487402">+7 (903) 548-74-02</a></p>
              </div>
            </div>
            
            <div class="contact-item stagger-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Локация</h3>
                <p>Москва, м. Фили</p>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://github.com/Ksylika" target="_blank" class="social-icon stagger-item">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" class="social-icon stagger-item">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/Snioqqq" target="_blank" class="social-icon stagger-item">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-group stagger-item">
                <label for="name" class="form-label">Имя</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="form-input" 
                  required
                />
              </div>
              
              <div class="form-group stagger-item">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="form-input" 
                  required
                />
                <div v-if="errors.email" class="form-error">{{ errors.email }}</div>
              </div>
              
              <div class="form-group stagger-item">
                <label for="message" class="form-label">Сообщение</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  class="form-input form-textarea" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="submit-button stagger-item" :disabled="submitting">
                {{ submitting ? 'Отправка...' : 'Отправить сообщение' }}
              </button>
              
              <div v-if="submitStatus" class="submit-status" :class="submitStatus.type">
                {{ submitStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        errors: {},
        submitting: false,
        submitStatus: null,
        // EmailJS configuration
        emailjs: {
        serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        userID: import.meta.env.VITE_EMAILJS_USER_ID || ''
      } 
      };    
    },
    mounted() { 
    // Initialize EmailJS when component is mounted
    if (window.emailjs) {
      emailjs.init({publicKey:this.emailjs.userID});
    } else {
      console.error('EmailJS not loaded');
    }
  },
            methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(($$[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$$)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
    },
    submitForm() {
      // Reset errors
      this.errors = {};
      
      // Validate email
      if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Пожалуйста, введите корректный email';
        return;
      }
      
      // Submit form
      this.submitting = true;
      
      // Check if EmailJS is available
      if (!window.emailjs) {
        console.error('EmailJS is not loaded');
        this.handleFormError(new Error('EmailJS not available'));
        return;
      }
      
      // Prepare template parameters
      const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message
      };
      
      // Send email using EmailJS
      emailjs.send(
        this.emailjs.serviceID,
        this.emailjs.templateID,
        templateParams
      )
        .then(response => {
          console.log('SUCCESS!', response.status, response.text);
          this.handleFormSuccess();
        })
        .catch(error => {
          console.error('FAILED...', error);
          this.handleFormError(error);
        });
    },
    handleFormSuccess() {
      // Success
      this.submitting = false;
      this.submitStatus = {
        type: 'success',
        message: 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.'
      };
      
      // Reset form
      this.form = {
        name: '',
        email: '',
        message: ''
      };
      
      // Clear status after 5 seconds
      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    },
    handleFormError(error) {
      // Error
      this.submitting = false;
      this.submitStatus = {
        type: 'error',
        message: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь напрямую по email.'
      };
    }
  }
}
  </script>
  
  <style scoped>
  .form-error {
    color: #ff4b5c;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
  
  .submit-status {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
  }
  
  .submit-status.success {
    background-color: rgba(39, 174, 96, 0.2);
    color: #27ae60;
    border: 1px solid #27ae60;
  }
  
  .submit-status.error {
    background-color: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
    border: 1px solid #e74c3c;
  }
  </style>
