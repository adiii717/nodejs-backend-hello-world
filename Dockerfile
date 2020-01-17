FROM node:alpine3.10
WORKDIR /app
COPY . .

CMD npm start
