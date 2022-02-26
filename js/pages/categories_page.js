export default Vue.component("categories-page", {
  data: function () {
    return {};
  },
  methods: {},
  created() {
    console.log("card_page_created");
  },
  template: `
        <div class="container pt-4">
            <h1>Categoría : {{ $route.params.category }}</h1>
        </div>
        `,
});
