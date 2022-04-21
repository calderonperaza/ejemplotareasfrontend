FROM nginx:1.21.6-alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html
ENV NGINX_PORT=80
# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplofrontend:latest .