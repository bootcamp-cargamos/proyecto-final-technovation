
import ProductsPage from "./pages/products_page.js"
import DetailsPage from "./pages/details_product.js"
import LoginPage from "./pages/login_page.js"
import RegisterPage from "./pages/register_page.js"
import CardPage from "./pages/card_page.js"
import EditProductPage from "./pages/edit_product_page.js"
import CategoriesPage from "./pages/categories_page.js"
import Navbar from "./components/navbar.js"
import ProductList from "./pages/products_page.js"
import Carrousel from "./components/carrousel.js"


var routes = [
    { path: "/", component: ProductsPage},
    { path: "/detailsproduct", component: DetailsPage},
    { path: "/login", component: LoginPage},
    { path: "/register",component: RegisterPage},
    { path: "/card", component: CardPage},
    // { path: "/checklist", component: Checklist},
    { path: "/product/edit", component: EditProductPage},
    { path: "/categories", component: CategoriesPage },
    { path: "/categories/:name", component:ProductList},
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
