export default Vue.component(
    "product-page", {
        data: function () {
            return {
            }
        },
        methods: {
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