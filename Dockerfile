FROM node:16-alpine

CACHE_DIR="/node_modules"

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]