<template>
<div>
  <div class="formulario">

    <!-- <Menu> </Menu> -->
    <form method="post" enctype="multipart/form-data">
    <div class="formu-save">
      <div class="tm">
        <h2>Registrar series que hayas visto</h2>
      </div>
      <div class="form-group">
            <div>Nombre de la serie</div>
            <input type="text" id="input-element" class="ip" v-model="nombre">
            
      </div>
      <div class="form-group">
            <div>Descripcion</div>
            <textarea class="ip area" v-model="descripcion" rows="10">

            </textarea>
      </div>
      <div class="form-group">
      <div class="upload-btn-wrapper">
             <button class="btn-subir">Elegir portada</button>
             <input type="file" accept="image/png, image/jpeg" :src="portada" />
      </div>
            
      </div>
      <div class="save">
        <button type="button" class="btn btn-primary" @click="guardarSerie()">Guardar</button>
      </div>
    </div>
  </form>
  <!-- <div>
      <h3 @click="imagen()" class="btn btn-primary">  ver la imagen </h3>
  </div> -->

  </div>
    <div class="galeria container">

       

        <Series v-for=" (serie , index) in arraySerie"
        :key="serie.id"
        :serie="serie" 
        @eliminar="eliminarSerie(index)"
        @update="actualizarSerie(index, argumentos)">

        </Series>


        <!-- otra forma -->
         <!-- <Series v-for="serie in arraySerie" :key="serie.id"
        :nombre="serie.nombre"
        :descripcion="serie.descripcion"
        :fecha="serie.created_at" /> -->


  </div>
</div>

</template>

<script> 
    import Cleave from 'vue-cleave-component';
    require('cleave.js/dist/addons/cleave-phone.do.js');

     import axios from 'axios'

   // import router from '../router'

    export default {
      data(){
        return {
          nombre: '',
          descripcion: '',
          portada:'',
          // cedula:'',
          arraySerie: [],
          // options: {
          //   delimiter: '-',
          //   phone: true,
          //   phoneRegionCode: 'DO'
          // },
          // optionscedula:{
          //   delimiter: '-',
          //   blocks: [3, 7, 1],
          //   uppercase: true
          // }
        }
      },
      methods: {
        imagen(){
          this.$router.push({ path: '/post' })
         // router.push({name:'post'})
        },
        mostrarSeries(){
          let me= this;

          axios.get('/series').then(function (response){
            //console.log(response);
            var respuesta = response.data;
            me.arraySerie =  respuesta.series;
            // console.log(respuesta.series);
          })
          .catch(function (error) {
            console.log(error + "metodo mostrar series no pudo ser realizada.")
          })
        },
        guardarSerie(){
          let me= this;
          let url = '/series/guardar';

            axios.post(url , {
              'nombre' : this.nombre,
              'descripcion' : this.descripcion,
              'portada' : this.portada
            }).then(function(response) {
                me.mostrarSeries();
                me.nombre = '';
                me.descripcion = '';
                console.log("guardado");
            })
            .catch(function(error){
              console.log(error + 'metodo guardarSerie no pudo ser realizada');
             })

         },
         eliminarSerie(x) {
            this.arraySerie.splice(x, 1);
          },
          actualizarSerie(index, serie ){
            this.arraySerie[index] = serie;

          }
      },
      
      components: {
      'cleave': Cleave
      },
      mounted(){
        this.mostrarSeries();
      },
      updated (){
         //this.mostrarSeries();
      }

      
      
    }
</script>

<style >
.tm{
  margin-bottom: 20px;
  font-family: 'Anton', sans-serif;

}

.formulario{
  /* margin-top: 34px; */
   margin-bottom: 20px;
  font-family: 'PT Sans Narrow', sans-serif;
}

.formu-save{
  width: 50%;
  margin: auto;
}
.formu-save .tm{
  display: flex;
  justify-content: center;
}

.ip{
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  width:100%;
  height: 38px;
  padding: 8px;
}
.area{
  min-height: 120px;
  max-height: 150px;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn-subir {
  border: 2px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}


/* CSS GALERIA */
 .galeria{
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
    
 }


</style>
