FROM node:16

# Create app directory
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install -S express ejs@3.1.6
RUN npm install -g nc

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]