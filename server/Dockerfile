FROM node:12.6.0-buster
WORKDIR /usr/src/app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install
COPY . .
EXPOSE 5000
