<template>
  <v-container>
    <v-row class="text-center">
      
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenido!!
        </h1>

        <p class="subheading font-weight-regular">
          Front End del sistema de tareas,<br> para utilizar como ejemplo en las practicas de despliegue.
          
        </p>
      </v-col>

      <v-col cols="12">
      
        <h2 class="headline font-weight-bold mb-3">
          Agregar:
        </h2>

        <v-row justify="center">

         <v-col cols="4">
          <v-text-field
            label="Nueva Tarea:"
            outlined
          ></v-text-field>
      </v-col> 
      <v-col cols="1" class="mt-2">
        <v-btn color="primary" >Agregar</v-btn>
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
      tareas:[
            {
              "id": "624f90bad9069d158165b821",
              "nombre": "lavar los trastes",
              "hecho": false
            },
            {
              "id": "624f90ccd9069d158165b822",
              "nombre": "limpiar el cuarto",
              "hecho": true
            },
            {
              "id": "624f90ccd9069d158165b824",
              "nombre": "limpiar el cuarto",
              "hecho": true
            }
          ]
    }),
    methods:()=>({
      cargarDatos(){
        this.axios.get('http://localhost:3000/tareas')
              .then(function(response){
                console.log(response)
              })

      },
    })
  }
</script>
