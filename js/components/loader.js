export default Vue.component ("loader", {
    props: [],
    data: function () {
        return {};
    },
    methods: {},
    template:`
    <div class="d-flex flex-column justify-content-center align-items-center"
         style="min-height: 90vh">
        <img src="/assets/g0R5.gif" loop="infinite" width="100" alt="" />
        <small>Cargando...</small>
    </div>
    `,
});