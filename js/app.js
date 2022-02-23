
import ProductsPage from "./pages/products_page.js"
import ProductList from "./components/product_list.js"
import LoginPage from "./pages/login_page.js"
import RegisterPage from "./pages/register_page.js"
import ProductDetails from "./pages/product_details.js"
import CardPage from "./pages/card_page.js"
import EditProductPage from "./pages/edit_product_page.js"
import CategoriesPage from "./pages/categories_page.js"
import Navbar from "./components/navbar.js"

var routes = [
    { path: "/", component: ProductsPage},
    { path: "/ProductList", component: ProductList},
    { path: "/login", component: LoginPage},
    { path: "/register",component: RegisterPage},
    { path: "/ProductDetails", component: ProductDetails},
    { path: "/card", component: CardPage},
    { path: "/product/edit", component: EditProductPage},
    { path: "/categories", component:CategoriesPage},
];
var router = new VueRouter({
    routes: routes,
    mode: "hash",
    base: "/",
});

var app = new Vue({
    el: "#app",
    components: { Navbar },
    router: router,
});
