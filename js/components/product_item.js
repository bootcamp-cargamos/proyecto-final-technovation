import STORAGE from "/js/utils/storage.js";

export default Vue.component ("product-item",{
    props: ["product"],
    data: function () {
        return {};
    },
    computed: {
        hasDiscount(){
            return this.product.discount_price !=0;
        },
    },
    methods: {
        /* Redirige al usuario a la pagina de edición de producto */
    editProduct(item) {
        STORAGE.remove("product");
        STORAGE.setArray("product",item)
        this.$router.push("/products/edit");
      },
    },
    created: function () {},
    template: `
    
    `
});