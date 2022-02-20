
import LoginPage from "/js/pages/login_page";
import RegisterPage from "/js/pages/register_page";
import ProductsPage from "/js/pages/categories_page";
import EditProductPage from "/js/pages/edit_product_page";
import CategoriesPage from "/js/pages/categories_page";
import Navbar from "/js/components/navbar";

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