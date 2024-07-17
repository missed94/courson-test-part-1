<template>
  <footer class="footer bg-light text-center text-lg-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">О нас</h5>
          <p>
            Здесь вы можете разместить информацию о своей компании, миссии и
            других важных деталях.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Ссылки</h5>
          <ul class="list-unstyled mb-0">
            <li v-for="link in links" :key="link.text">
              <a :href="link.href" class="text-dark">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Контакты</h5>
          <ul class="list-unstyled mb-0">
            <li v-for="contact in contacts" :key="contact.text">
              <a :href="contact.href" class="text-dark">{{ contact.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2024 Copyright:
      <a class="text-dark" href="https://example.com/">ВашСайт.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      links: [
        { text: "Главная", href: "#!" },
        { text: "О нас", href: "#!" },
        { text: "Контакты", href: "#!" },
      ],
      contacts: [
        { text: "Email", href: "#!" },
        { text: "Телефон", href: "#!" },
        { text: "Адрес", href: "#!" },
      ],
    };
  },
};
</script>
