
import STORAGE from "../utils/storage.js";

export default Vue.component ("nabvar",{
    props: [],
    data: function () {
        return {
            username: "",
            password: "",
            isLogged: false,
            current_path: false,
        };
    },
    computed: {
        isRoot() {
            return this.current_path == '/products' || this.current_path == '/'
        },
    },
    methods: {
        goLogin() {
            this.$router.push("/");
        },
        goBack() {
            this.$router.push("/");
        },
        goRegister() {
            this.$router.push("register");
        },
        logout() {
            STORAGE.remove ("token");
            this.$router.push("/");
        },
    },
    mounted() {},
    created: function () {
        setInterval(() => {
            this.isLogged = !(STORAGE.get("token") == null);
            this.current_path = this.$router.history.current_path
        }, 1000);        
    },
    template: `
    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light bg-second fixed-top shadow">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/img/technologo.gif alt="gif" width="100" heigth="100">
          <!-- <h2 class="m-0 text-primary">Techno-Innovation</h2> -->
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-second" aria-current="page" href="#">Página de inicio</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-second" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Productos
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="pages/productos/zapatos.html">zapatos</a></li>
                <li><a class="dropdown-item" href="pages/productos/camino_mesa.html">Caminos de mesa</a></li>
                <li><a class="dropdown-item" href="pages/productos/servilletas_manteles.html">Servilletas y manteles</a></li>
                <li>
                  <a class="dropdown-item" href="pages/productos/telas_tipicas.html">Telas tipicas</a>
                </li>
                <li><a class="dropdown-item" href="pages/productos/blusas_faldas.html">Blusas y faldas</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="pages/checklist.html" class="nav-item nav-link "><i class="bi bi-cart-fill color_card"></i></a>
            </li>
          </ul>
          <button class="btn btn-outline-primary m-1"><a href="pages/sesion.html" class="a" id="sesion">Iniciar
              Sesión</a></button>
          <button class="btn btn-primary"><a href="pages/registrarse.html" class="a">Registrarse</a></button>
        </div>
      </div>
    </nav>  
    `,
});