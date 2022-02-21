
import LoginPage from "/js/pages/login_page.js";
import RegisterPage from "/js/pages/register_page.js";
import ProductsPage from "/js/pages/categories_page.js";
import EditProductPage from "/js/pages/edit_product_page.js";
import CategoriesPage from "/js/pages/categories_page.js";
import Navbar from "/js/components/navbar.js";

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