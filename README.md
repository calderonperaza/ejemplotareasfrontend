# ejemplotareasfrontend

## Paso 1: Instalar dependencias
Ejecute el siguiente comando en una consola para instalar todas las dependencias del proyecto
```
npm install
```
### Instale el vue CLI
El proyecto esta desarrollado en Vue cli por lo que debe instalarlo para asi poder editar el proyecto
```
npm install -g @vue/cli
```

### Levante DEV
ejecute el siguiente comando para levantar localmente el proyecto y probarlo
```
npm run serve
```

### Compilar para produccion
```
npm run build
```

### Configure correctamente la API del Backend
dentro de la carpeta src se encuentra el archivo main.js en dicho archivo se encuentra la configuracion de la URL del backend edite la misma para que se conecte a dicho servicio luego puede probar y compilar para produccion.
```
axios.defaults.baseURL="http://localhost:3000"
```
### deploy en rama dist
hay una branch dedicado a contener los archivos de distribucion build, con el objetivo de hacer deploy con github incluso en entrega continua para ello debe ejecutar los comandos(se utiliza push-dir para ello)
```
npm run build
npm run deploy
```
