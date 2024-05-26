FROM node:21.6.2 AS build
LABEL authors="edonssfall"

WORKDIR /web

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN ng build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /web/dist/ed-main-ui/browser /usr/share/nginx/html

EXPOSE 4200
