# STEP 1 build static website
FROM node:18.15.0 as builder

RUN mkdir -p /usr/src/app
# RUN apk update && apk add --no-cache make git

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json /app/

COPY . /usr/src/app/

# RUN npm config set registry https://repo.br.scania.com/repository/npm-registry

RUN npm install --force

# Copy project files into the docker image
COPY .  /app

# RUN cd /app && npm run build
RUN npm run build-prod

# STEP 2 build a small nginx image with static website
CMD ["ng", "serve"]