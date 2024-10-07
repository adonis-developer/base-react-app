# 1. For build React app
FROM node:20.16.0-alpine AS development
# Set working directory
WORKDIR /app
#
COPY package*.json ./
# Same as npm install
COPY . /app
RUN npm ci 
# ENV CI=true
# ENV PORT=3000
# CMD [ "npm", "start" ]
FROM development AS build
RUN npm run build
# 2. For Nginx setup
FROM nginx:alpine
# Copy config nginx
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
