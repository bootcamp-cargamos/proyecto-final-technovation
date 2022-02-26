import STORAGE from "../utils/storage.js";

export default Vue.component("navbar", {
  props: [],
  data: function () {
    return {
      isLogged: false,
      current_path: false,
    };
  },
  computed: {
     isRoot() {
       return this.current_path == "/products" || this.current_path == "/";
     },
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goHome() {
      this.$router.push("/");
    },
    goRegister() {
      // Redirige al usuario al listado de productos
      this.$router.push("/register");
    },
    logout() {
      // Eliminamos el token de sesión
         STORAGE.remove("token");
        this.$router.push("/");
    },
  },
  mounted() {},
  created: function () {
    // Validamos el cambio en el Local Storage
      setInterval(() => {
      this.isLogged = !(STORAGE.get("token") == null);
       this.current_path = this.$router.history.current.path;
      }, 1000);
  },
  template: `

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand d-md-inline d-none" href="#"  @click.prevent="goHome">
            <img src="/img/technologo.gif" alt="gif" width="100" heigth="100">
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-second" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Productos
            </a>
            <ul class="dropdown-menu b-nav" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/#/categories/zapatos">Zapatos</a></li>
              <li><a class="dropdown-item" href="/#/categories/camino">Caminos de mesa</a></li>
              <li><a class="dropdown-item" href="/#/categories/servilletas">Servilletas y manteles</a></li>
              <li><a class="dropdown-item" href="/#/categories/telas">Telas tipicas</a></li>
              <li><a class="dropdown-item" href="/#/categories/blusas">Blusas y faldas</a></li>
            </ul>
          </li>
            
        </ul>
        <div class="d-flex">
        <button @click.prevent="goLogin" class="btn btn-outline-primary mx-2">Iniciar Sesión</button>
        <button  @click.prevent="goRegister" class="btn btn-primary">Registrarse</button>
        </div>
        </div>
    </div>
    </nav>
    
       `,
});
