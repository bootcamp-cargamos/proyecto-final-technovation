
// import STORAGE from "../utils/storage.js";

export default Vue.component ("navbar", {
    props: [],
    data: function () {
        return {
            
        };
    },
    computed: {
        isRoot() {
            
        },
    },
    methods: {
        
    },
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-second fixed-top shadow">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/img/technologo.gif" alt="gif" width="100" heigth="100">
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
              <li><a class="dropdown-item" href="#">zapatos</a></li>
              <li><a class="dropdown-item" href="#">Caminos de mesa</a></li>
              <li><a class="dropdown-item" href="#">Servilletas y manteles</a></li>
              <li>
                <a class="dropdown-item" href="#">Telas tipicas</a>
              </li>
              <li><a class="dropdown-item" href="#">Blusas y faldas</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-item nav-link "><i class="bi bi-cart-fill color_card"></i></a>
          </li>
        </ul>
        <button class="btn btn-outline-primary m-1"><a href="#" class="a" id="sesion">Iniciar
            Sesión</a></button>
        <button class="btn btn-primary"><a href="#" class="a">Registrarse</a></button>
      </div>
    </div>
  </nav>
    `
});