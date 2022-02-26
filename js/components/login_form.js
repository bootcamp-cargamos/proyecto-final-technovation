export default Vue.component("login-form", {
  props: [
    "set_mail",
    "set_password",
    "onLogin",
  ],
  data: function () {
    return {};
  },
  methods: {
      
      onKeyPassword(event) {
        this.set_password(event.target.value);
      },
      onKeyMail(event) {
        this.set_mail(event.target.value);
      },
    },
    template: `
    <div class="d-flex justify-content-center pt-4">
      <div class="card w-100" style="max-width:450px">
          <div class="card-body">
              <h5 class="card-title text-center">Inicia Sesion</h5>
              <form>
                 
                  <div class="form-group mb-3">
                      <label for="name">Ingresa tu email</label>
                      <input type="email"
                             @keyup="onKeyMail($event)"
                             class="form-control"
                             placeholder="jhon@mail.com">
                  </div>
                  <div class="form-group mb-3">
                      <label for="name">Ingresa tu password</label>
                      <input type="password"
                             @keyup="onKeyPassword($event)"
                             class="form-control"
                             placeholder="jhon@mail.com">
                  </div>
                  <button type="button" @click.prevent="onLogin" class="btn btn-primary w-100 py-2">Entrar</button>
              </form>
          </div>
      </div>
  </div>


`,
});


   
        

