import Carousel from "../components/carrousel.js";
import AddInfo from "../components/add_info.js";
export default Vue.component("home-page", {
  components: { Carousel, AddInfo },
  data: function () {
    return {};
  },
  methods: {},
  created() {
    console.log("home-page created");
  },
  template: `
        <div>  
            <carrousel></carrousel>
            <addinfo></addinfo>
        </div>
        `,
});
