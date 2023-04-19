FROM node:18-alpine

WORKDIR /user/application

COPY ./package.json ./package.json
COPY ./src ./src

RUN npm install

ENTRYPOINT [ "node" ]
CMD ["./src/server.js"]