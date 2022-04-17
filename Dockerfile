FROM nginx:1.21.6-alpine
COPY /dist /usr/share/nginx/html
ENV NGINX_PORT=8080