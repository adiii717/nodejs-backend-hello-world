FROM node:alpine3.10
WORKDIR /app
COPY app/package.json .
RUN npm install
COPY app/ .
CMD npm start
