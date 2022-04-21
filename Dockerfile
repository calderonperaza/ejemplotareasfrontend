FROM nginx:1.17.10-alpine
COPY /dist /usr/share/nginx/html
EXPOSE 80

# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplofrontend:latest .