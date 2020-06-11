# Specify a base image
FROM node:12.12.0-slim AS builder
EXPOSE 3000
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json yarn.lock ./
RUN yarn install --silent
COPY . .

# Default command
CMD ["yarn", "start"]
