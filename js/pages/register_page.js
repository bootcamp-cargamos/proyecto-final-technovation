import CLIENT from "/js/api/client.js";

export default Vue.component("register-page", {
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      is_staff: false,
    };
  },
  methods: {
    async createUser() {
      let vm = this;
      try {
        await CLIENT.post("/add_usuarios", {
          "username": vm.username,
          "email":vm.email,
          "password":vm.password,
          "is_staff" : vm.is_staff,
        });
        alert("Usuario creado correctamente");
        vm.$router.push("/");
      } catch (e) {
        
        alert("Hubo un error: " + e.message)
        console.info(e);
      }
    },
    goLogin() {
      this.$router.push("/login");
    },
  },
  created: function () {},
  template: `
  <div class="container"
          autocomplete="nope"
          @submit.prevent="createUser">

  <form id="contenedor" class="bg-color height6 p-t1 col-12" method="post">
  <div class="mb-3">
      <div class="mb-3">
          <label for="texto" class="form-label">Ingresa tu Nombre Completo</label>
          <!-- <input type="text" class="form-control"> -->
          <input
            type="text"
            autocomplete="new-username"
            placeholder="Nombre Completo"
            v-model="username"
            class="form-control"
            required
            id="username"
          />
        </div>
    <label for="exampleInputEmail1" class="form-label">Ingresa tu Email</label>
    <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nombre@dominio.com"> -->
    <input
            type="email"
            placeholder="nombre@dominio.com"
            v-model="email"
            class="form-control"
            required
            id="email"
          />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <!-- <input type="password" class="form-control" id="exampleInputPassword1"> -->
    <input type="password"
                 v-model="password"
                 placeholder="**********"
                 class="form-control" 
                 id="password" 
                 required
                 autocomplete="new-password" />
  </div>
  
<br>
        <!-- <div>
          <div class="g-recaptcha col-12" for="is_staff" data-sitekey="6Lfy1I8eAAAAAKvtvRr9yg4GvjYsbEzH2U2-lJRG"></div>
        </div> -->
<br>
        <div class="mb-3 form-check">
          <!-- <input type="checkbox" class="form-check-input" id="terms" /> -->
          <input type="checkbox"
                 required
                 class="form-check-input"
                 id="terms" 
                 for="is_staff"/>
          <label class="form-check-label" for="terms">
          <small>
            >Acepto los <strong> Terminos y condiciones</strong>, así mismo
            acepto los terminos de
            <strong> Privacidad y trato de mis datos personales</strong>
          </small>
          </label
          
        </div>
  <button type="submit" class="btn btn-success" @click.prevent="goLogin" >Registrate</button>
  <hr>
  <br>

   <p class="text-dark">¿Ya tienes cuenta?</p>
   <label for="exampleInputEmail1" class="form-label text-primary">
    <a href="#" @click.prevent="goLogin" class="text-success fs-5">Inicia Sesion</a></label>  
</form>
</div>
     
      `,
});


