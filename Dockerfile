FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install --save govuk-frontend

RUN npm cache save --include=node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]