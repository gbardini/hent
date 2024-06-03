FROM node:20.11.1-alpine

RUN apk --update add --no-cache bash

RUN npm install -g @angular/cli@18.0.2

USER node

WORKDIR /home/node/app

COPY . .
