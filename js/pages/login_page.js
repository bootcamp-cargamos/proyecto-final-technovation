import CLIENT from "../api/client.js";
import STORAGE from "/js/utils/storage.js";
import login_form from "../components/login_form.js";
export default Vue.component("login-page", {
  components: {login_form},
  data: function () {
    return {
      form:{
      mail: "",
      password: "",
      },
    };
  },
  methods: {
    async onLogin() {
      console.log("Esta Logeado");
      const response = await CLIENT.get("/listar_usuarios", this.form);
      alert("Has iniciado sesion");
      this.$router.push("/card");
    },
      setPassword(value) {
        this.form.password = value;
      },
      setMail(value) {
        this.form.mail = value;
      },
  },
  created() {
    const is_logged = !(STORAGE.get("token") == null);
    if (is_logged) {
      this.$router.push("/card");

    console.log("card_page_created");
    }
  },
  template: `
  <div>
        <login-form
        :set_mail="setMail"
        :set_password="setPassword"
        :onLogin="onLogin"/>
</div>
    
        `,
  
});

