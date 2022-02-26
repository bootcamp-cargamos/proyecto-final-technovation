export default Vue.component("register-form", {
  props: [
    "set_mail",
    "set_password",
    "set_username",
    "set_firstname",
    "set_lastname",
    "onClick",
  ],
  data: function () {
    return {};
  },
  methods: {
    onKeyFirstname(event) {
      this.set_firstname(event.target.value);
    },
    onKeyLastname(event) {
      this.set_lastname(event.target.value);
    },
    onKeyUsername(event) {
      this.set_username(event.target.value);
    },
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
                <h5 class="card-title text-center">Regístrate</h5>
                <form>
                    <div class="form-group mb-3">
                        <label for="name">Ingresa tu nombre</label>
                        <input type="text"
                               @keyup="onKeyFirstname($event)"
                               class="form-control"
                               placeholder="Jhon">
                    </div>
                    <div class="form-group mb-3">
                        <label for="name">Ingresa tu apellido</label>
                        <input type="text"
                               @keyup="onKeyLastname($event)"
                               class="form-control"
                               placeholder="Doe">
                    </div>
                    <div class="form-group mb-3">
                        <label for="name">Ingresa tu nombre de usuario</label>
                        <input type="text"
                               @keyup="onKeyUsername($event)"
                               class="form-control"
                               placeholder="jhon123">
                    </div>
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
                    
                   
                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">
                            Acepto los <strong> Terminos y condiciones</strong>, 
                            así mismo acepto los terminos de <strong>
                            Privacidad y trato de mis datos personales</strong>
                        </label>
                    </div>
                    <button type="button" @click.prevent="onClick" class="btn btn-primary w-100 py-2">Enviar</button>
                </form>
            </div>
        </div>
    </div>
    `,
});
