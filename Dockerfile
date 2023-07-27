FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install --save govuk-frontend

COPY . .
COPY node_modules/govuk-frontend ./node_modules/govuk-frontend

EXPOSE 3000

CMD ["npm", "run", "dev"]