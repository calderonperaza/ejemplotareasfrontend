FROM nginx:1.21.6-alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html
ENV NGINX_PORT=80