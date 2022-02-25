import ProductItem from "../components/product_item.js";
export default Vue.component("product-list", {
  props: ["products"],
  components: { ProductItem },
  data: function () {
    return {};
  },
  created: function () {
  },
  template: `
        <div class="mt-5">
        <div class="container-fluid bg-gray text-light w-100 p-5 m-0 text-center">
          <h5>¡Comencemos ahora!</h5>
          <h1>Te ayudamos a vender lo que necesites.</h1>
          <button class="btn btn-primary"><a href="../vender.html" class="a">¡Empecemos ya!</a></button>
        </div>
        <div class="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s">
          <div class="container py-5">
            <div class="row">
              <div class="col">
                <h4>Tecno-Innovation me parece una plataforma muy buena para vender mis productos textiles y poder llevar
                  más
                  lejos mi negocio.</h3>
                  <h6 class="text-gray"><img src="../../img/testimonio.jpeg" alt="" style="border-radius: 100%; width: 4%;"> Juan
                    Pérez</h6>
              </div>
              <div class="col d-flex justify-content-end">
                <h2 class="m-2"><i class="bi bi-facebook"></i></h2>
                <h2 class="m-2"><i class="bi bi-instagram f-2"></i></h2>
              </div>
            </div>
            <div class="row d-flex justify-content-between">
              <div class="col ">
                <a class="navbar-brand" href="#">
                  <h2 class="m-0 text-light">Techno-Innovation</h2>
                </a>
              </div>
              <div class="col">
                <div class="position-relative mx-auto" style="max-width: 500px;">
                  <input class="form-control border-0 w-100 py-3" type="search" placeholder="¿Qué buscas?">
                  <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Buscar</button>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
      <main>
      <h1 class="text-center text-dark mt-5 text-primary pt-3">Caminos de mesa</h1>
    <div class="album py-5 bg-light">
      <div class="container">
    
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img src="../../img/il_570xN.1650484727_4bkd.jpg" alt="camino de mesa ">
              <div class="card-body">
                <h3>Q2.000</h3>
                <p>2022 - 15,000km</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                  <a href="#"> <i class="bi bi-star"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </main>
    <main>
  <h1 class="text-center text-dark mt-5 text-primary pt-3">Servilletas y manteles</h1>
<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <img src="../../img/servilleta.jpg" alt="verduras">
          <div class="card-body">
            <h3>Q2.000</h3>
            <p>2022 - 15,000km</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
              <a href="#"> <i class="bi bi-star"></i> </a>
            </div>
          </div>
        </div>
      </div>
      
     

    </div>
  </div>
</div>

<h1 class="text-center text-dark mt-5 text-primary pt-3">Telas tipicas</h1>
<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <img src="../../img/telas.jpg" alt="verduras">
          <div class="card-body">
            <h3>Q2.000</h3>
            <p>2022 - 15,000km</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
              <a href="#"> <i class="bi bi-star"></i> </a>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</div>
<main>
  <h1 class="text-center text-dark mt-5 text-primary pt-3">zapatos</h1>
<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <img src="../../img/44992007_288940898387172_2825189849055625216_n.jpg" alt="verduras">
          <div class="card-body">
            <h3>Q2.000</h3>
            <p>2022 - 15,000km</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
              <a href="#"> <i class="bi bi-star"></i> </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</div>

</main>    
 `
  }
)       