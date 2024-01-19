---
layout: home

title: VitePress
titleTemplate: An example docs app built with VitePress

hero:
    name: VitePress Demo
    tagline: An example docs app built with VitePress
    image: https://vitepress.dev/vitepress-logo-large.webp
    actions:
        - theme: brand
          text: About
          link: /about
        - theme: alt
          text: GitHub
          link: https://github.com/m1-dev/vitepress-demo

features:
    - icon: 🔥
      title: Dummy Text
      details: Lorem ipsum dolor sit amet
    - icon: ⚡️
      title: Dummy Text
      details: Lorem ipsum dolor sit amet
    - icon: 🛠️
      title: Dummy Text
      details: Lorem ipsum dolor sit amet
---

<style>
:root {
  --blur-amount: 80px;
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(var(--blur-amount));
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(var(--blur-amount));
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(var(--blur-amount));
  }
}
</style>
