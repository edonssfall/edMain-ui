FROM node:20.1
LABEL authors="edonssfall"

WORKDIR /web

COPY . .

RUN npm install -g @angular/cli

RUN npm install