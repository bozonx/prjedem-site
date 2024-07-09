---
editLink: false
lastUpdated: false
prev: false
next: false
layout: page
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/src/SiteHome.vue";

const { theme } = useData();

const hero = {
  name: "Проект Эдем",
  text: "Анархисткие коммуны",
  tagline: "Проект по созданию сети анархистких коммун сочетающие в себе как принципы социализма, так и рыночные",
  image: {
    src: "/img/site-big-logo.webp",
    alt: "Project Edem logo",
  },
  actions: [
    {
      theme: "brand",
      text: "Описание проекта",
      link: "/ru/doc/",
    },
    {
      theme: "alt",
      text: "Поддержать проект",
      link: "/ru/page/donate",
    },
    {
      theme: "alt",
      text: "Наш блог",
      link: "https://blog.prjedem.org",
    },
  ],
}
const features = [
  {
    icon: "🤝",
    title: "Новое общество",
    details: "Гармоничное равноправное общество, без вражды и сильного социального расслоения",
    linkText: "Читать о новом обществе",
    link: "/ru/doc/new-society",
  },
  {
    icon: "📖",
    title: "Гармоничная жизнь",
    details: "Каждый человек сможет построить гармоничную жизнь, где не надо упаиваться на работе и постоянно выживать, а можно заниматься творчеством и развиваться",
    linkText: "Читать о гармоничной жизни",
    link: "/ru/doc/harmony-live",
  },
  {
    icon: "⚔️",
    title: "Баланс труда и отдыха",
    details: "Рабочий день 4 часа, 20 часов в неделю. Используем современные технологии для облегчения труда",
    linkText: "Читать о балансе труда и отдыха",
    link: "/ru/doc/work-rest-balance",
  },
]
</script>

<SiteHome :hero="hero" :features="features">
</SiteHome>
