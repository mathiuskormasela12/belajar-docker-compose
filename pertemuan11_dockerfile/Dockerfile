FROM node:18-alpine

WORKDIR /app

ENV PORT=8000

RUN mkdir src

COPY src src
COPY package.json package.json

RUN npm install

EXPOSE ${PORT}
ENTRYPOINT ["node"]
CMD ["./src/server.js"]