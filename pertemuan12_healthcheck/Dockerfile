FROM node:18-alpine

WORKDIR /user/app

RUN mkdir src
COPY src src
COPY package.json package.json

RUN npm install

#HEALTHCHECK --interval=5s --retries=4 --timeout=5s --start-period=2s CMD curl http:localhost:4000/test

ENTRYPOINT ["node"]
CMD ["./src/server.js"]