function updateCountdown() {
    const birthday = new Date('December 10, 2024').getTime();
    const now = new Date().getTime();
    const difference = birthday - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerText = ${days}д ${hours}ч ${minutes}м ${seconds}с;
  }
  setInterval(updateCountdown, 1000);
  
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  const translations = {
    en: {
      header: "Hello, I'm Vasyl Buhlak!",
      intro: "Aspiring programmer. I want to help create an AAA game!",
      "nav-main-info": "Main Info",
      "nav-skills": "Skills",
      "nav-education": "Education",
      "nav-contacts": "Contacts",
      "main-info-title": "Main Info",
      "main-info-text": "My name is Vasyl Buhlak, I was born on December 10, 2009. Currently attending Wirtschaft Schule Ingolstadt.",
      "skills-title": "Skills",
      skill1: "English: B2",
      skill2: "German: B2",
      skill3: "Russian and Ukrainian: Native",
      skill4: "JavaScript, HTML, CSS: Beginner level",
      "education-title": "Education",
      "education-text": "I am studying at Wirtschaft Schule Ingolstadt, striving for knowledge and improving programming skills.",
      "contacts-title": "Contacts",
      contact1: "Email: vasylbuhlak@gmail.com",
      contact2: "Phone: +491717441914",
      contact3: "GitHub: Meowmen870",
      timer: "Time left until my birthday: ",
      "theme-toggle": "Change Theme",
    },
    ru: {
      header: "Привет, я Василий Буглак!",
      intro: "Начинающий программист. Хочу помочь в создании ААА игры!",
      "nav-main-info": "Основная информация",
      "nav-skills": "Навыки",
      "nav-education": "Образование",
      "nav-contacts": "Контакты",
      "main-info-title": "Основная информация",
      "main-info-text": "Меня зовут Василий Буглак, я родился 10 декабря 2009 года. Сейчас посещаю Wirtschaft Schule Ingolstadt.",
      "skills-title": "Навыки",
      skill1: "Английский: B2",
      skill2: "Немецкий: B2",
      skill3: "Русский и украинский: носитель",
      skill4: "JavaScript, HTML, CSS: начальный уровень",
      "education-title": "Образование",
      "education-text": "Я учусь в Wirtschaft Schule Ingolstadt, стремлюсь к знаниям и совершенствую навыки программирования.",
      "contacts-title": "Контакты",
      contact1: "Email: vasylbuhlak@gmail.com",
      contact2: "Телефон: +491717441914",
      contact3: "GitHub: Meowmen870",
      timer: "До дня рождения осталось: ",
      "theme-toggle": "Сменить тему",
    },
  };
  
  document.getElementById("language-select").addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      if (translations[selectedLanguage][key]) {
        element.innerText = translations[selectedLanguage][key];
      }
    });
  });