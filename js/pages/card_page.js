// import STORAGE from "../utils/storage";
// import card from"../pages/card_pages";

// export default Vue.component("card-page", {
//     components:{card},
//         data: function () {
//             return {
//               name :"producto",
//               description: "producto",
//               price: "10"

//             }
//         },
//         methods: {
//             async addProduct() {
//                 console.log("Si se pudo");
//                 const response = STORAGE.get("/listar_productos",this.form);
//                 alert("Se agrego producto");
//                 this.$router.push("/detailsproduct");
//             },
//             setName(value) {
//                 this.form.name = value;
//             },
//             setDescription(value) {
//                 this.form.description = value;
//             },
//             setPrice(value) {
//                 this.form.price = value;
//             },

//         },
//         created() {
//         console.log("details-product");
//         },
//         template: `
//         <div>
//             <card-form
//             :set_name="setName"
//             :set_Product="setProduct"
//             :set_Price="setPrice"


//         </div>
//         `,
// },
// )

