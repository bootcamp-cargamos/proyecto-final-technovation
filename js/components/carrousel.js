export default Vue.component ("carrousel", {
    props: [],
    data: function () {
      return {
          

        };
    },
    computed: {
        isRoot() {

        },
    },
    methods: {
     
    },
    template: `
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/OG-110+Patzun.jpg" class="d-block w-100 height1" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/45148766_289501191664476_4049768493539655680_n.jpg" class="d-block w-100 height1" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/44992007_288940898387172_2825189849055625216_n.jpg" class="d-block w-100 height1" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/guatemala-mujeres-tejiendo-cp4xbk.jpg" class="d-block w-100 height1" alt="...">
      </div>
    </div>
  </div>
    `
});