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
### deploy

```
npm run build
npm run deploy
```

### PRUEBAS
hay una carpeta llamada test en ella hay un archivo de pruebas de selenium-ide con el cual se realiza una prueba al sistema para verificar su funcionalidad.

Se requiere que se instale el cliente de selenium y tambien command line runer

```
npm install -g selenium-side-runer
npm install -g chromedriver
```

Luego que se ha instalado todo para ejecutar la prueba se corre el comando
```
selenium-side-runner ./test/prueba1.side  --output-directory="./test"

```
