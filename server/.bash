#!/bin/bash
function install () {
  if [ ! -d ./server/dist/ ]; then
    mkdir -p ./server/dist/
  fi
  cp -rfv ./server/source/docker/docker-compose.yml ./server/dist/ &&
  cp -rfv ./server/source/docker/nginx/config ./server/dist/nginx/ &&
  cp -rfv ./server/source/docker/nginx/nginx.Dockerfile ./server/dist/ &&
  cp -rfv ./server/source/docker/express/express.Dockerfile ./server/dist/ &&
  docker-compose --env-file ./server/.env -f ./server/dist/docker-compose.yml up -d --build
}

function stop () {
  docker-compose -f ./server/dist/docker-compose.yml down -v
}

$1