<template>
  <v-container>
    <v-row class="text-center">
      
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenido!
        </h1>

        <p class="subheading font-weight-regular">
          Front End del sistema de tareas,<br> para utilizar como ejemplo en las practicas de despliegue.
          
        </p>
      </v-col>

      <v-col cols="12">
        <v-alert v-show="error" shaped prominent type="error" >
          Error al intentar conectar con el backend, revise el archivo main.js en el se encuentra la propiedad baseURL la cual tiene la direccion principal del backend. Revise y vuelva a realizar Build
        </v-alert>
        <h2 class="headline font-weight-bold mb-3">
          Agregar:
        </h2>

        <v-row justify="center">

         <v-col cols="4">
          <v-text-field
            label="Nueva Tarea:"
            outlined
            v-model="nuevaTarea.nombre"
          ></v-text-field>
      </v-col> 
      <v-col cols="1" class="mt-2">
        <v-btn :disabled="!nuevaTarea.nombre" color="primary" @click="agregarTarea">Agregar</v-btn>
      </v-col>

          

        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Tareas
        </h2>
        <v-row justify="center" >
          <v-card v-for="tarea in tareas" 
          :key="tarea.id"
          max-width="400"
          color="grey lighten-2"
          class="ma-3"
          >            
              <v-col >
                <v-checkbox
                  v-model="tarea.hecho"
                  :label="tarea.nombre"
                ></v-checkbox>
                <v-col>
                  <v-btn
                    fab
                    dark
                    small
                    color="primary"
                    @click="eliminarTarea(tarea)"
                  >
                    <v-icon dark>
                      mdi-minus
                    </v-icon>
                  </v-btn>
                </v-col>              
                
              </v-col>
          </v-card>
          
          </v-row>
        
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data: () => ({
      error:false,
      tareas:[],
      nuevaTarea:{
        "nombre": "",
        "hecho": false
      },
    }),
    methods:{
      cargarDatos(){
        let thisVue=this
        this.axios.get('/tareas')
              .then(function(response){
                //console.log(response.data)
                thisVue.tareas=[]
                thisVue.tareas=response.data                
              })
              .catch((error)=>{
                console.log(error)
                thisVue.error=true
              })
      },
      agregarTarea(){
        let thisVue=this
        this.axios.post('/tareas',thisVue.nuevaTarea)
              .then(function(){
                thisVue.cargarDatos()             
              })
              .catch((error)=>{
                console.log(error)
                thisVue.error=true
              })
        thisVue.nuevaTarea.nombre=""
      },
      eliminarTarea(ltarea){
        let thisVue=this
        this.axios.delete('/tareas/'+ ltarea.id)
              .then(function(){
                thisVue.cargarDatos()             
              })
              .catch((error)=>{
                console.log(error)
                thisVue.error=true
              })
      },
    },
    mounted(){
      this.cargarDatos()
    }   
  }
</script>
