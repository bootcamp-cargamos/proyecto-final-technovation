export default Vue.component(
    "card-page", {
        data: function () {
            return {
            }
        },
        methods: {
        },
        created() {
        console.log("card_page_created");
        },
        template: `
        <main class="d-flex justify-content-between">
    <aside class="">
<div class=" pt-5 mt-5">
    <h1>Carrito</h1>
</div>
<a href="#">Anular la selección de todos los elementos</a>
<hr>
    <div class="d-flex bd-highlight d-flex justify-content-start">
        <div class="p-2 w-75 bd-highlight">
            <aside>
                <div class="d-flex">
                    <div class="d-flex checkbox p-3">
                        <!--input para seleccionar el producto y se muestra el total del precio segun los articulos que se vaya seleccionando-->
                        <input type="checkbox" id="cbox1" value="first_checkbox"></div>
                    <img src="/img/frutas.jpg" alt="frutas" width="200">
                    <div class="p-3">
                    <h1>Descripción</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the jajjijeinnrtr. </p>
                    <span>Tamaño:</span>
                    <span>Paquete de 4</span>
                    <div class="d-flex align-items-center">
                        <input type="number" id="numero" name="numero" step="incremento">
                        <a href="#" class="p-3">Eliminar</a>
                        <a href="#">Guardar</a>
                    </div>
                </div>
                </div>
            </aside>
        </div>
        <div class="p-2 flex-shrink-1 bd-highlight">
            <h4>Precio</h4>
               <h4>GT Q123</h4>
               <div class="">
                   <p>Subtotal (2 Productos):</p>
                   <h6>Q246</h6>
                   <button type="button" class="btn btn-warning">Proceder al pago</button>
               </div>    
        </div>
      </div>
    <hr>
    <div class="d-flex bd-highlight">
        <div class="p-2 flex-grow-1 bd-highlight"></div>
        <div class="p-2 bd-highlight"> <h3>Subtotal (2 Productos):</h3></div>
        <div class="p-2 bd-highlight"><h4>Q246</h4></div>
      </div>
    </aside>
    <aside class="mt-5 pt-5 px-4">
        <h1>Tus artículos</h1>
        <div class="d-flex">
            <span><img src="../img/frutas.jpg" alt="" width="100"></span>
            <span> 
                <a href="#"><i class="bi bi-star"></i></a>
                <a href="#"><i class="bi bi-star"></i></a>
                <a href="#"><i class="bi bi-star"></i></a>
            </span>
        </div>
        <span>nombre</span>
        <p>Precio_unidad: Q123</p>

        <div class="d-flex">
            <span><img src="../img/frutas.jpg" alt="" width="100"></span>
            <span> 
                <a href="#"><i class="bi bi-star"></i></a>
                <a href="#"><i class="bi bi-star"></i></a>
                <a href="#"><i class="bi bi-star"></i></a>
            </span>
        </div>
        <span>nombre</span>
        <p>Precio_unidad: Q123</p>

        </aside>
    </main>
        `
},
)