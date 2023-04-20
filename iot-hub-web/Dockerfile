# Step 1: Build the app in image 'builder'
FROM node:16-slim AS builder
LABEL maintainer="soft"

WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install --force
RUN npm install ng-apexcharts -g --force
COPY . .
RUN npm run build

# Step 2: Use build output from 'builder'
FROM nginx:stable-alpine
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/iot-hub-web/ .
