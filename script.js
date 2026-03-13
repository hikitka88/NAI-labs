/* ============================================================
   NAI Labs — script.js
   Bilingual EN / RU — vanilla JS
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const i18n = {
  en: {
    /* Nav */
    'nav.projects':   'Projects',
    'nav.ecosystem':  'Ecosystem',
    'nav.about':      'About',
    'nav.directions': 'Directions',
    'nav.cta':        'Join Telegram',

    /* Hero */
    'hero.badge':    'AI / Telegram / Automation / Games',
    'hero.subtitle': 'Building AI tools, Telegram bots, mini apps, automation systems and experimental digital products.',
    'hero.small':    'Independent developer studio creating scalable AI-powered products for Telegram and beyond.',
    'hero.btn1':     'Explore Projects',
    'hero.btn2':     'Join Telegram',
    'hero.scroll':   'scroll',

    /* Stats */
    'stats.projects': 'Projects Built',
    'stats.ai':       'AI Powered',
    'stats.tg':       'Telegram First',
    'stats.exp':      'Experimental',

    /* Projects section */
    'projects.label': 'PORTFOLIO',
    'projects.title': 'Active Projects',
    'projects.desc':  'Real products. Real experiments. Built and deployed independently.',

    /* Tags */
    'tag.game':       'Game',
    'tag.economy':    'Economy',
    'tag.voice':      'Voice',
    'tag.news':       'News',
    'tag.summary':    'Summary',
    'tag.content':    'Content',
    'tag.engagement': 'Engagement',
    'tag.support':    'Support',
    'tag.automation': 'Automation',
    'tag.systems':    'Systems',

    /* Card buttons */
    'card.launch': 'Launch',
    'card.more':   'Learn More',

    /* Project descriptions */
    'p1.desc': 'Telegram mini app / web game with idle economy, upgrades, rewards and progression.',
    'p2.desc': 'Conversational AI assistant bot with memory, roles, personality and voice support.',
    'p3.desc': 'Telegram bot that summarizes news channels into short readable updates with style and personality.',
    'p4.desc': 'AI tool for generating comments, replies and discussion starters for posts and channels.',
    'p5.desc': 'Supportive AI chat assistant focused on reflection, emotional support and practical guidance.',
    'p6.title': 'Automation Systems',
    'p6.desc': 'Custom Telegram and AI automation flows for growth, content, task management and experiments.',

    /* Ecosystem */
    'eco.label': 'ECOSYSTEM',
    'eco.title': 'One ecosystem.<br>Multiple experiments.',
    'eco.body':  'NAI Labs is a flexible product hub where AI, Telegram, automation and experimental digital ideas are turned into real working tools. Every product is built fast, tested in real conditions, and designed for growth.',
    'eco.f1.title': 'AI Powered',
    'eco.f1.desc':  'Every product is built on modern AI infrastructure — language models, voice synthesis, automation agents.',
    'eco.f2.title': 'Telegram Native',
    'eco.f2.desc':  'Designed for Telegram\'s ecosystem — bots, mini apps, channels, and inline tools that live where users already are.',
    'eco.f3.title': 'Fast Prototyping',
    'eco.f3.desc':  'Ideas move from concept to live product in days. Ship first, refine with real feedback, iterate continuously.',
    'eco.f4.title': 'Built to Scale',
    'eco.f4.desc':  'Architecture that grows. Products are built with scalability in mind from day one — not bolted on later.',

    /* About */
    'about.label': 'BUILDER',
    'about.title': 'Built independently',
    'about.body':  'NAI Labs is developed by an independent creator focused on building practical AI products, Telegram bots, game mechanics, voice systems and automation tools. The goal is simple: launch fast, test real demand, and create products that people actually use.',
    'about.li1': 'AI Bots',
    'about.li2': 'Telegram Systems',
    'about.li3': 'Voice Features',
    'about.li4': 'Experimental Games',
    'about.li5': 'Automation Tools',

    /* Directions */
    'dir.label': 'FOCUS',
    'dir.title': 'Core directions',
    'dir.d1.title': 'Telegram Bots',
    'dir.d1.desc':  'Automated bots that handle conversations, commands, and workflows inside Telegram.',
    'dir.d2.title': 'AI Assistants',
    'dir.d2.desc':  'Intelligent agents with memory, personality, and reasoning designed for real-world tasks.',
    'dir.d3.title': 'Mini Apps',
    'dir.d3.desc':  'Web apps embedded inside Telegram for seamless, native-feeling user experiences.',
    'dir.d4.title': 'Experimental Games',
    'dir.d4.desc':  'Idle mechanics, economy systems, and game loops built for Telegram and web platforms.',
    'dir.d5.title': 'Content Automation',
    'dir.d5.desc':  'Systems that generate, schedule and distribute content across Telegram channels at scale.',
    'dir.d6.title': 'Voice Interfaces',
    'dir.d6.desc':  'Voice-enabled AI products with synthesis, recognition and conversational flow built in.',

    /* CTA */
    'cta.label': 'COMMUNITY',
    'cta.title': 'Follow the ecosystem',
    'cta.body':  'Join Telegram to get updates, launches, experiments and early access to new NAI products.',
    'cta.btn':   'Join Telegram',
    'cta.hint':  'Free. No spam. Just launches and experiments.',

    /* Footer */
    'footer.tagline': 'Independent AI studio for Telegram and experimental products.',
    'footer.copy':    'Independent AI Studio.',
    'footer.mono':    '// building the future, one experiment at a time',
  },

  ru: {
    /* Nav */
    'nav.projects':   'Проекты',
    'nav.ecosystem':  'Экосистема',
    'nav.about':      'О студии',
    'nav.directions': 'Направления',
    'nav.cta':        'Telegram',

    /* Hero */
    'hero.badge':    'ИИ / Telegram / Автоматизация / Игры',
    'hero.subtitle': 'Создаём AI-инструменты, Telegram-боты, мини-приложения, системы автоматизации и экспериментальные цифровые продукты.',
    'hero.small':    'Независимая студия разработки: масштабируемые AI-продукты для Telegram и не только.',
    'hero.btn1':     'Смотреть проекты',
    'hero.btn2':     'Telegram',
    'hero.scroll':   'вниз',

    /* Stats */
    'stats.projects': 'Проектов создано',
    'stats.ai':       'На базе ИИ',
    'stats.tg':       'Telegram First',
    'stats.exp':      'Эксперименты',

    /* Projects section */
    'projects.label': 'ПОРТФОЛИО',
    'projects.title': 'Активные проекты',
    'projects.desc':  'Реальные продукты. Реальные эксперименты. Разработаны и запущены независимо.',

    /* Tags */
    'tag.game':       'Игра',
    'tag.economy':    'Экономика',
    'tag.voice':      'Голос',
    'tag.news':       'Новости',
    'tag.summary':    'Сводка',
    'tag.content':    'Контент',
    'tag.engagement': 'Вовлечение',
    'tag.support':    'Поддержка',
    'tag.automation': 'Автоматиз.',
    'tag.systems':    'Системы',

    /* Card buttons */
    'card.launch': 'Запустить',
    'card.more':   'Подробнее',

    /* Project descriptions */
    'p1.desc': 'Telegram-мини-апп / браузерная игра с idle-экономикой, апгрейдами, наградами и прокачкой.',
    'p2.desc': 'Разговорный AI-ассистент с памятью, ролями, личностью и голосовой поддержкой.',
    'p3.desc': 'Telegram-бот, который сжимает новостные каналы в короткие удобные сводки с характером.',
    'p4.desc': 'AI-инструмент для генерации комментариев, ответов и тем для обсуждений в каналах.',
    'p5.desc': 'AI-чат-ассистент с фокусом на рефлексию, эмоциональную поддержку и практические советы.',
    'p6.title': 'Системы автоматизации',
    'p6.desc': 'Кастомные Telegram- и AI-автоматизации для роста, контента, управления задачами и экспериментов.',

    /* Ecosystem */
    'eco.label': 'ЭКОСИСТЕМА',
    'eco.title': 'Одна экосистема.<br>Множество экспериментов.',
    'eco.body':  'NAI Labs — гибкий хаб для продуктов, где AI, Telegram, автоматизация и экспериментальные идеи превращаются в реальные рабочие инструменты. Каждый продукт создаётся быстро, тестируется в реальных условиях и проектируется для роста.',
    'eco.f1.title': 'На базе ИИ',
    'eco.f1.desc':  'Каждый продукт построен на современной AI-инфраструктуре — языковые модели, синтез голоса, агенты автоматизации.',
    'eco.f2.title': 'Telegram Native',
    'eco.f2.desc':  'Создано для экосистемы Telegram — боты, мини-апп, каналы и инлайн-инструменты там, где уже есть пользователи.',
    'eco.f3.title': 'Быстрый прототипинг',
    'eco.f3.desc':  'От идеи до живого продукта — за дни. Сначала запуск, затем улучшение на основе реальной обратной связи.',
    'eco.f4.title': 'Сделано для масштаба',
    'eco.f4.desc':  'Архитектура, которая растёт вместе с продуктом. Масштабируемость заложена с первого дня, а не добавлена позже.',

    /* About */
    'about.label': 'СОЗДАТЕЛЬ',
    'about.title': 'Независимая разработка',
    'about.body':  'NAI Labs разрабатывается независимым создателем, сосредоточенным на практических AI-продуктах, Telegram-ботах, игровой механике, голосовых системах и инструментах автоматизации. Цель проста: запускать быстро, проверять реальный спрос и создавать продукты, которые люди действительно используют.',
    'about.li1': 'AI-боты',
    'about.li2': 'Telegram-системы',
    'about.li3': 'Голосовые функции',
    'about.li4': 'Экспериментальные игры',
    'about.li5': 'Инструменты автоматизации',

    /* Directions */
    'dir.label': 'ФОКУС',
    'dir.title': 'Ключевые направления',
    'dir.d1.title': 'Telegram-боты',
    'dir.d1.desc':  'Автоматизированные боты для разговоров, команд и рабочих процессов внутри Telegram.',
    'dir.d2.title': 'AI-ассистенты',
    'dir.d2.desc':  'Умные агенты с памятью, личностью и рассуждениями, созданные для реальных задач.',
    'dir.d3.title': 'Мини-приложения',
    'dir.d3.desc':  'Веб-апп внутри Telegram для бесшовного нативного пользовательского опыта.',
    'dir.d4.title': 'Экспериментальные игры',
    'dir.d4.desc':  'Idle-механики, экономические системы и игровые циклы для Telegram и браузера.',
    'dir.d5.title': 'Контент-автоматизация',
    'dir.d5.desc':  'Системы для генерации, планирования и распространения контента в Telegram-каналах.',
    'dir.d6.title': 'Голосовые интерфейсы',
    'dir.d6.desc':  'AI-продукты с синтезом речи, распознаванием и голосовым диалогом из коробки.',

    /* CTA */
    'cta.label': 'СООБЩЕСТВО',
    'cta.title': 'Следите за экосистемой',
    'cta.body':  'Присоединяйтесь к Telegram, чтобы получать обновления, анонсы запусков, эксперименты и ранний доступ к новым продуктам NAI.',
    'cta.btn':   'Присоединиться',
    'cta.hint':  'Бесплатно. Без спама. Только запуски и эксперименты.',

    /* Footer */
    'footer.tagline': 'Независимая AI-студия для Telegram и экспериментальных продуктов.',
    'footer.copy':    'Независимая AI-студия.',
    'footer.mono':    '// строим будущее — один эксперимент за другим',
  }
};

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
let currentLang = localStorage.getItem('nai-lang') || 'en';

function applyTranslations(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      // Use innerHTML to support <br> tags in some strings
      el.innerHTML = dict[key];
    }
  });

  // Update <html lang> attribute
  document.documentElement.lang = lang;

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  currentLang = lang;
  localStorage.setItem('nai-lang', lang);
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) {
        applyTranslations(lang);
      }
    });
  });

  // Apply saved or default language on load
  applyTranslations(currentLang);
}


/* ============================================================
   CANVAS PARTICLE SYSTEM
   ============================================================ */
(function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 80;
  const particles = [];
  const COLORS = [
    'rgba(0, 245, 255, ',
    'rgba(37, 99, 235, ',
    'rgba(168, 85, 247, ',
    'rgba(34, 211, 160, ',
  ];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x      = Math.random() * window.innerWidth;
      this.y      = Math.random() * window.innerHeight;
      this.size   = Math.random() * 1.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = (Math.random() - 0.5) * 0.35;
      this.color  = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha  = Math.random() * 0.5 + 0.1;
      this.alphaDir = (Math.random() - 0.5) * 0.004;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha += this.alphaDir;
      if (this.alpha > 0.7 || this.alpha < 0.05) this.alphaDir *= -1;
      if (this.x < -10) this.x = window.innerWidth + 10;
      if (this.x > window.innerWidth + 10) this.x = -10;
      if (this.y < -10) this.y = window.innerHeight + 10;
      if (this.y > window.innerHeight + 10) this.y = -10;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function drawConnections() {
    const MAX_DIST = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const opacity = (1 - dist / MAX_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();


/* ============================================================
   NAVIGATION — scroll state & mobile menu
   ============================================================ */
(function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }
})();


/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });
})();


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();


/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      let current  = 0;
      const step   = Math.max(1, Math.ceil(target / 30));
      const timer  = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
})();


/* ============================================================
   BUTTON RIPPLE EFFECT
   ============================================================ */
(function initRipple() {
  const style = document.createElement('style');
  style.textContent = `@keyframes rippleAnim { to { transform: translate(-50%,-50%) scale(60); opacity: 0; } }`;
  document.head.appendChild(style);

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect   = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute; width:4px; height:4px;
        background:rgba(255,255,255,0.3); border-radius:50%;
        transform:translate(-50%,-50%) scale(0);
        left:${e.clientX - rect.left}px; top:${e.clientY - rect.top}px;
        pointer-events:none; animation:rippleAnim 0.55s ease-out forwards; z-index:999;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
})();


/* ============================================================
   CARD PARALLAX GLOW
   ============================================================ */
(function initCardGlow() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x    = ((e.clientX - rect.left) / rect.width) * 100;
      const y    = ((e.clientY - rect.top) / rect.height) * 100;
      const glow = this.querySelector('.card-glow');
      if (glow) glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,245,255,0.1) 0%, transparent 70%)`;
    });
  });
})();


/* ============================================================
   HERO ENTRANCE
   ============================================================ */
(function initHeroEntrance() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const els = hero.querySelectorAll('[data-reveal]');
  setTimeout(() => {
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), i * 140);
    });
  }, 200);
})();


/* ============================================================
   INIT — run after DOM ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
});
