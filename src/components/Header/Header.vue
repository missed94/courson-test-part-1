<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.png" alt="Логотип" width="30" height="30" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Меню 1
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><a class="dropdown-item" href="#">Подменю 1-1</a></li>
              <li><a class="dropdown-item" href="#">Подменю 1-2</a></li>
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" @click.prevent
                  >Подменю 1-3</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Подменю 1-3-1</a></li>
                  <li><a class="dropdown-item" href="#">Подменю 1-3-2</a></li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#"
                      >Подменю 1-3-3</a
                    >
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Подменю 1-3-3-1</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Подменю 1-3-3-2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Меню 2
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li><a class="dropdown-item" href="#">Подменю 2-1</a></li>
              <li><a class="dropdown-item" href="#">Подменю 2-2</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Меню 3</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.navbar-brand img {
  max-height: 30px;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
}
.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}
</style>
