# etapa de compilación. Uso Node 12.22.1 igual que el backend
FROM node:12.22.1-alpine as build-stage
WORKDIR /app
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


#Si hace manualmente la etapa de Compilacion
#FROM nginx:1.17.10-alpine
#COPY /dist /usr/share/nginx/html
#EXPOSE 80
