# Production
# FROM node:12.13-alpine As builder
# 
# WORKDIR /usr/src/app
# 
# COPY package.json .
# COPY yarn.lock ./
# 
# RUN yarn
# COPY . .
# 
# RUN yarn build
# 
# FROM node:12.13-alpine
# 
# WORKDIR /usr/src/app
# 
# COPY package.json .
# COPY yarn.lock ./
# 
# RUN yarn
# 
# COPY . .
# COPY --from=builder /usr/src/app/.next .next
# COPY --from=builder /usr/src/app/dist dist
#
# CMD yarn start
# EXPOSE 3000

# Development
FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock ./

RUN yarn

COPY . .
RUN yarn build:ui

# For some reason, Nestjs cli has some problem with yarn.
RUN npm install -g @nestjs/cli
