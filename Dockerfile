FROM node:20

RUN mkdir /app
WORKDIR /app
COPY . .

RUN cd /app/client && npm ci && npm run build
RUN cd /app/server && npm ci

EXPOSE 8080

CMD ["node", "./server/server.js"]