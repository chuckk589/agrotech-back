FROM node:21-alpine as base
RUN apk update && apk add bash make g++ yarn>=1.22.4
WORKDIR /app
COPY package.json tsconfig.json tsconfig.build.json yarn.lock nest-cli.json  ./
RUN yarn --frozen-lockfile

COPY ./src /app/src
COPY ./public /app/public
COPY ./shared /app/shared

RUN yarn run build