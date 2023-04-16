FROM node:18-alpine

WORKDIR /app

ARG PORT_ARG=3000
ENV PORT=${PORT_ARG}

RUN mkdir src

COPY src src
COPY package.json package.json

RUN npm install

EXPOSE ${PORT}
ENTRYPOINT ["node"]
CMD ["./src/server.js"]