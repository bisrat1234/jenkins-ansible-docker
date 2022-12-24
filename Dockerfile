from node:latest

WORKDIR /usr/local/app

copy ./server.js .

CMD ["node","server.js"]
