FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
RUN npm install nodemon -g

COPY . . 


CMD ["npm", "run", "start:dev"]
# CMD ["npm", "run", "start:prod"]