# etapa de compilación. Uso Node 12.22.1 igual que el backend
FROM node:12.22.1-alpine as build-stage

WORKDIR /app
#se puede indicar la url del backend por medio de esta variable, si esta vacia se tomara localhost:3000
#indique la url de su backend en la variable de entorno VUE_APP_URL_BACKEND
ENV VUE_APP_URL_BACKEND=''
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# etapa de producción
FROM nginx:1.17.10-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplofrontend:latest .

#sudo docker login 
#sudo docker push calderonperaza/ejemplobackend:latest

#Si hace manualmente la etapa de Compilacion
#FROM nginx:1.17.10-alpine
#COPY /dist /usr/share/nginx/html
#EXPOSE 80
#
