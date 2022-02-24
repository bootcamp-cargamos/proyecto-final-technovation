export default Vue.component ("carrousel", {
    props: [],
    data: function () {
        return {
          slides: [
            "https://i.pinimg.com/736x/10/2c/f0/102cf0aacbd7725893ad9e6ac8c1782c.jpg",
            "https://i.pinimg.com/736x/12/88/7b/12887bd3b00d61b8ee85838567d436f2--traditional-clothes-traditional-styles.jpg",
            "https://c8.alamy.com/compes/cp4xbk/guatemala-mujeres-tejiendo-cp4xbk.jpg"
           ],
        };
    },
    computed: {
        isRoot() {

        },
    },
    methods: {

    },
    template: `
    <div class="slider">
    <div v-for="(image, index) in slides" :key="index"></div>
    </div>
    `
});