<<<<<<< Updated upstream
=======
import CLIENT from "/js/api/client.js";
import STORAGE from "/js/utils/storage.js";

export default Vue.component("login-page", {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    DoLogin: async function () {
      let vm = this;
      try {
        //Enviamos la petición Via POST
        const response = await CLIENT.post("/listar_usuarios", {
          username: vm.username,
          password: vm.password,
        });
        // Almacenamos el token si el inicio de sesión es correcto
        STORAGE.set("token", response.token);
        // Redirigimos al usuario a la pagina de carrito
        vm.$router.push("card");
      } catch (e) {
        //En caso haya un error en el inicio de sesión
        // Notificamos por consola el incidente
        console.warn(e);
        alert("Error al iniciar sesión");
      }
    },
    goRegister() {
      // Redirige al usuario al listado de productos
      this.$router.push("/register");
    },
  },
  created: function () {
    // Verifica si el usuario esta loggeado a través del token
    const is_logged = !(STORAGE.get("token") == null);
    if (is_logged) {
      this.$router.push("CardPage");
    }
  },
  template: `
       <form id="contenedor" class="bg-color height4 p-t1 col-12 ">
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
    <!-- <input type="email" class="form-control" id="username">
    <div id="emailHelp" class="form-text">Ingresa tu direccion p/ej: nombre@dominio.com</div> -->
        <input
            type="email"
            class="form-control"
            placeholder="nombre@dominio.com"
            id="username"
            v-model="username"
            />
       </div>
       <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <!-- <input type="password" class="form-control" id="exampleInputPassword1"> -->
        <input
            type="password"
            class="form-control"
            placeholder="*********"
            id="password"
            v-model="password"
            />
       </div>
       <div class="mb-3 form-check">
         <!-- <input type="checkbox" class="form-check-input" id="exampleCheck1" for="is_staff"> -->
         <input class="form-check-input"  
                 v-model="is_staff" 
                 type="checkbox" 
                 id="is_staff" />
         <label class="form-check-label" for="exampleCheck1">Recordarme</label>
       </div>
       <button type="submit" class="btn btn-success"
        @click.prevent="DoLogin"
        >Entrar</button>
       <hr>
       <p class="text-muted ">¿Eres nuevo?</p>
        <label for="exampleInputEmail1" class="form-label text-primary">
       <a href="#" @click.prevent="goRegister" class="text-primary">Registrate</a></label>
    
  </form> 
  `,
});
>>>>>>> Stashed changes
