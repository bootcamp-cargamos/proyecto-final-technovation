export default Vue.component(
    "productCategories", {
        data: function () {
            return {
            }
        },
        methods: {
        },
        created() {
        console.log("categoriesProduct");
        },
        template: `
  <div class="text-center">
    <div class="container-xxl py-5">
      <div class="container">
        <div class="section-title text-center">
          <h1 class="display-5 mb-5 blur text-third">Productos que te ofrecemos</h1>
        </div>
        <div class="row g-4 d-flex justify-content-center">
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <a href="/#/categories/zapatos"" class="productos">
              <div class="shadow team-item">
                <div class="overflow-hidden position-relative">
                  <img class="img-fluid producto_principal" src="img/44992007_288940898387172_2825189849055625216_n.jpg" alt="" />
                </div>
                <div class="text-center border border-5 border-light border-top-0 p-3">
                  <h5 class="mb-0 bg-gray">zapatos</h5>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <a href="/#/categories/camino" class="productos">
              <div class="shadow team-item">
                <div class="overflow-hidden position-relative">
                  <img class="img-fluid  producto_principal" src="img/il_570xN.1650484727_4bkd.jpg" alt="" />
                </div>
                <div class="text-center border border-5 border-light border-top-0 p-3">
                  <h5 class="mb-0 bg-gray">Camino de mesa</h5>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <a href="/#/categories/servilletas" class="productos">
              <div class="shadow team-item">
                <div class="overflow-hidden position-relative">
                  <img class="img-fluid  producto_principal" src="img/servilleta.jpg" alt="" />
                </div>
                <div class="text-center border border-5 border-light border-top-0 p-3">
                  <h5 class="mb-0 bg-gray">Servilletas/manteles</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container-xxl">
      <div class="container ">
        <div class="row g-4 d-flex justify-content-center">
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <a href="#/categories/telas" class="productos">
              <div class="shadow team-item">
                <div class="overflow-hidden position-relative">
                  <img class="img-fluid  producto_principal" src="img/telas.jpg" alt="" />
                </div>
                <div class="text-center border border-5 border-light border-top-0 p-3">
                  <h5 class="mb-0 bg-gray">Telas tipicas</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <a href="/#/categories/blusas" class="productos">
              <div class="shadow team-item">
                <div class="overflow-hidden position-relative">
                  <img class="img-fluid  producto_principal" src="img/blusa-falda.jpg" alt="" />
                </div>
                <div class="text-center border border-5 border-light border-top-0 p-3">
                  <h5 class="mb-0 bg-gray">Blusas/faldas</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  
        `
},
)