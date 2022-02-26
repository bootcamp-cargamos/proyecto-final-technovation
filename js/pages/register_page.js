import CLIENT from "../api/client.js";
import RegisterForm from "../components/register_form.js";
export default Vue.component("register-page", {
  components: { RegisterForm },
  data: function () {
    return {
      form: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        mail: "",
      },
    };
  },
  methods: {
    async onClick() {
      console.log("Hice Click");
      const response = await CLIENT.post("add_usuarios", this.form);
      alert("Se registro el usuario");
      this.$router.push("/login");
    },

    setUsername(value) {
      this.form.username = value;
    },
    setPassword(value) {
      this.form.password = value;
    },
    setMail(value) {
      this.form.mail = value;
    },
    setFirstname(value) {
      this.form.first_name = value;
    },
    setLastname(value) {
      this.form.last_name = value;
    },
  },
  created() {
    console.log("register-page");
  },
  template: `
        <div>

            <register-form
                :set_username="setUsername"
                :set_mail="setMail"
                :set_password="setPassword"
                :set_firstname="setFirstname"
                :set_lastname="setLastname"
                :onClick="onClick"/>

        </div>
        `,
});
