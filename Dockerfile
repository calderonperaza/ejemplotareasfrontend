# build stage
FROM node:12.22.12-alpine3.15 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#variable de entorno para el backend
ARG BACKEND
ENV BACKEND=http://localhost:3000
RUN npm run build

# production stage
FROM nginx:stable-alpine3.21 as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



#FROM nginx:1.17.10-alpine
#COPY /dist /usr/share/nginx/html
#EXPOSE 80

# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplofrontend:latest .