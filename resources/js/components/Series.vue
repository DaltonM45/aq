<template>

<div class="carta">
  <div class="cabeza">
    <!-- <button class="btn btn-success"> -->
      <i class="fas fa-pen" v-on:click="editarSerie()"></i>
    <!-- </button> -->
   
      <i class="fas fap fa-times-circle" v-on:click="onClickDelete(serie.id)"></i>
    
    
  </div>
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">

    <input v-if="editMode" type="text" class="ip" v-model="serie.nombre">
    <h4 v-else>{{serie.nombre}}</h4>

    <textarea v-if="editMode" class="ip area" rows="10" v-model="serie.descripcion"></textarea>
    <p v-else class="card-text">{{serie.descripcion}}</p>

  </div>
  <div class="card-footer">

    <button v-if="editMode" class="btn btn-success" v-on:click="actualizarSerie(serie.id)">Guardar</button>
    <div v-else >{{ serie.created_at }}</div>
  
  </div>
</div> 

</template>



<script>
 import axios from 'axios'
    export default {
      // props: ['nombre' , 'descripcion','fecha'],
      props: [
        'serie'
        ],
      data(){
        return{
          editMode: false
        }
      },
      methods: {
        onClickDelete(id) {
          let url = '/series/' + id;
           axios.post(url).then(response => {
             console.log('eliminado');
             this.$emit('eliminar');
           })
        },
        editarSerie(){
          this.editMode = true;
          
        },
        actualizarSerie(id){

           let url = '/series/' + id;
           const parametros = {
             nombre: this.serie.nombre,
             descripcion : this.serie.descripcion
           }

           axios.post(url , parametros).then(response => {

              console.log('actualizado');
              this.editMode = false;
              //const serie = response.data;
              this.$emit('update', serie);
           })



        }
      },
       
    }
</script>

<style >
 .carta{
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 3px;
    -webkit-box-shadow: 0 0 3px 0 rgba(0,0,0,.1);
    box-shadow: 0 0 3px 0 rgba(0,0,0,.1);
    background-color: #fff;
    margin-bottom: 30px;
    margin-right: 28px;
    width: 30%;
    height: auto;
 }
 .carta .cabeza{
   display: flex;
   justify-content: space-between;
 }
 .carta .cabeza .fas{
   /* width: 30px;*/
    font-size: 30px;
    margin: 10px;
    color: rgb(15, 196, 91);
    cursor: pointer;
 }
 .carta .cabeza .fap{
    font-size: 30px;
    margin: 10px;
    color: rgb(214, 36, 23);
    cursor: pointer;
 }
  .carta .cabeza .fap:hover{
    font-size: 35px;
      margin: 5px;
  }
  .carta .cabeza .fas:hover{
    font-size: 35px;
    margin: 5px;
 }
</style>
