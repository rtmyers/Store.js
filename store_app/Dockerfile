# base image
FROM node:12.12.0-slim

# set working directory
WORKDIR /usr/src/app
EXPOSE 80

# install app dependencies
RUN apt-get update && apt-get install nginx -y

COPY package.json yarn.lock ./
RUN yarn install --silent

COPY . .

ENTRYPOINT ["./ops/entry.sh"]
CMD ["nginx", "-g", "daemon off;"]
