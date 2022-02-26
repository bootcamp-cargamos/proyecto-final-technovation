export default Vue.component("v-footer", {
  data: function () {
    return {
      query: "",
    };
  },
  methods: {},
  created() {
    console.log("footer created");
  },
  template: `
            <div class="mt-5">
                <div class="container-fluid  text-light footer pt-5 wow fadeIn " id="foot" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row">
                    <div class="col">
                        <h4>Tecno-Innovation me parece una plataforma muy buena para vender mis productos textiles y poder llevar
                        más
                        lejos mi negocio.</h4>
                        <h6 class="text-gray"><img src="img/testimonio.jpeg" alt="" style="border-radius: 100%; width: 4%;"> Juan
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
                        <img src="/img/technologo.gif" alt="gif" width="100" heigth="100">
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
        `,
});
