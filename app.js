const autosImportados = require('./autos')

//console.log(autosImportados)


let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function (matricula) {

     let auto = this.autos.find(auto => auto.patente ==        matricula);

     return auto == undefined ? null : auto

   },

   venderAuto:function(matricula) {
      let auto = this.buscarAuto(matricula);
      return auto != null ? auto.vendido = true : "Patente no encontrada"

      },

   autosParaLaVenta: function() {
      return this.autos.filter(auto => auto.vendido == false);
   },
   
   autosNuevos: function() {

     // let autos = this.autosParaLaVenta().filter(auto=> auto.km < 100)

      //return autos

   let autosStock = this.autosParaLaVenta();
     
     let autos = autosStock.filter(auto => auto.km <= 100) 

     return autos

   },

   listaDeVentas: function(){

      let autosVendidos = this.autos.filter(auto => auto.vendido == true);

      let listaDePrecios = autosVendidos.map(auto => auto.precio);

      return listaDePrecios

   },

   totalDeVentas: function(){
       return this.listaDeVentas().reduce((totalVendido, precio) => totalVendido += precio,0);
   },

   persona : {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    },


    puedeComprar : function(auto, persona){
        
        if (auto.precio <= persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas > (auto.precio/auto.cuotas)){

        return true
    }    

    else {
      return "No puede comprar"
    }

    

},

autosQuePuedeComprar: function(persona){

   return this.autosParaLaVenta().filter(auto =>this.puedeComprar(auto,persona)== true)


    }

   
}




//console.log(concesionaria.autos)
//console.log(concesionaria.buscarAuto("JJK116"))
//console.log(concesionaria.venderAuto("JJK116"))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.puedeComprar(concesionaria.autosParaLaVenta()[1], concesionaria.persona))
//console.log(concesionaria.autosQuePuedeComprar(concesionaria.persona))