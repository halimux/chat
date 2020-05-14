FROM node:current-slim

WORKDIR /app

COPY *.json /app/

RUN npm install

COPY ./src  /app/src

CMD ["npm", "start"]