
import LoginPage from "./pages/login_page";
import RegisterPage from "./pages/register_page";
import ProductsPage from "./pages/products_page";
import EditProductPage from "./pages/edit_product_page";
import CategoriesPage from "./pages/categories_page";
import Navbar from "./components/navbar.js";

var routes = [
    { path: "/", component: LoginPage},
    { path: "/register", component: RegisterPage},
    { path: "/products", component: ProductsPage},
    { path: "products/edit", component: EditProductPage},
    { path: "categories", component: CategoriesPage},
];

var router = new VueRouter ({
    routes: routes,
    mode: "hash",
    base: "/"
})

var app = new Vue ({
    el: "#app",
    components: {Navbar},
    router:router
});