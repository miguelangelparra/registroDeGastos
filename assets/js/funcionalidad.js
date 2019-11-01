
const app = new Vue({

  el: "#app",

  data: {
    gastos: [],
    gastoNuevo: {
      id:new Date().getTime(),
      fecha: new Date().toLocaleDateString(),
      usuario: "",
      concepto: "",
      unidad: "",
      cantidad: 0,
      precio:  0,
      total: 0,
      categoria: "",   
      lugar: "",
    }
  },

  methods: {
    insertarGasto() {
      this.gastos.push(
        {
          id: this.gastoNuevo.id,
          fecha: this.gastoNuevo.fecha,
          usuario: this.gastoNuevo.usuario,
          concepto: this.gastoNuevo.concepto,
          unidad: this.gastoNuevo.unidad,
          cantidad: this.gastoNuevo.cantidad,
          precio: this.gastoNuevo.precio,
          total: this.gastoNuevo.cantidad * this.gastoNuevo.precio,
          categoria: this.gastoNuevo.categoria,
          lugar: this.gastoNuevo.lugar
          
        }
      )
      this.gastoNuevo.id = ""
      this.gastoNuevo.fecha = new Date().toLocaleDateString(),
      this.gastoNuevo.usuario= ""
      this.gastoNuevo.concepto=""
      this.gastoNuevo.unidad=""
      this.gastoNuevo.cantidad=0
      this.gastoNuevo.precio= 0
      this.gastoNuevo.total= 0
      this.gastoNuevo.categoria=""
      this.gastoNuevo.lugar=""
    }
  },


  computed: {}
})