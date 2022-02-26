export default Vue.component(
    "product-page", {
        data: function () {
            return {
            }
        },
        methods: {
        },
        created() {
            console.log("product page list");
            const nombre= this.$route.params.id
        },
        template: `
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
        `
},
)