import HomePage from "./pages/home_page.js";
import ProductsPage from "./pages/products_page.js";
import DetailsPage from "./pages/details_product.js";
import LoginPage from "./pages/login_page.js";
import RegisterPage from "./pages/register_page.js";
import CardPage from "./pages/card_page.js";
import EditProductPage from "./pages/edit_product_page.js";
import CategoriesPage from "./pages/categories_page.js";
import Navbar from "./components/navbar.js";
import VFooter from "./components/v_footer.js";
import login_form from "./components/login_form.js";
import ProductCategories from "./components/product_categories.js"
//  import card_page from "./components/card_page.js";

var routes = [
  { path: "/", component: HomePage },
  { path: "/detailsproduct", component: DetailsPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/card", component: CardPage },
  // { path: "/checklist", component: Checklist},
  { path: "/product/edit", component: EditProductPage },
  { path: "/categories/:category", component: CategoriesPage },
];
var router = new VueRouter({
  routes: routes,
  mode: "hash",
  base: "/",
});

var app = new Vue({
  el: "#app",
  components: { Navbar, VFooter },
  router: router,
});

