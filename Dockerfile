FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install --save govuk-frontend @ministryofjustice/frontend

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]