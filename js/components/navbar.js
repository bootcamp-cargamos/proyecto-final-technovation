
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

})