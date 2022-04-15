FROM nginx:latest

RUN apt-get update
RUN apt-get upgrade -y

COPY nginx/* /etc/nginx/conf.d/
