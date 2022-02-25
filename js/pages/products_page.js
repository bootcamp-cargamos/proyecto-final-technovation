import CLIENT from "../api/client.js"
import STORAGE from "../utils/storage.js";
import Loader from "../components/loader.js"
import ProductList from "../components/product_list.js"
import CategoryList from "../components/category_list.js"
import carrousel from "../components/carrousel.js"
import Add_info from "../components/Add_info.js";

export default Vue.component(
    "product-page", {
        components: {carrousel, Loader, ProductList, CategoryList, Add_info},
        data: function () {
            return {
                products:[],
                loading: true,
                current_category: {},
            };
        },
        methods: {
        },
        async setCategory(category) {
            let vm= this;
            vm.current_category= category;
            await vm.getProducts();
        },
        async getProducts() {
            let vm = this;
        
            let url = "";
            url += "?search=" + vm.search;
            if (vm.current_category.name != "Todos"){
                url += "&category=" + vm.current_category.pk;
            }

            //Enviamos la peticion Via GET
            const response = await CLIENT.get(url);
            //Almacenamos el token si el inicio de sesion es correcto
            vm.products = response.sort((a,b) =>{
                return b.discount_price - a.discount_price;
            });
        },
        async getCategories() {
            let vm = this;
        //Enviamos la peticion Via GET
        const reaponse = await CLIENT.get(
            "/product/categories"
        );
        //Cargamos las categorias
        vm.categories = response;
        //Añadimos la categoria "Todos" con una pk = 0
        vm.categories.unshift ({ pk: 0, name: "Todos"});
        //Definimos el primer item de la lista de categorias ("todos")
        vm.current_category = vm.categories[0];

        },
        created() {
            console.log("product page list");
            const nombre= this.$route.params.id
        },
        template: `
        <div></div>
        `
},
)