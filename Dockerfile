FROM node:18

# Install dependencies
# RUN npm install @ministryofjustice/frontend

# Copy the application source code
COPY . .
RUN npm i

# Start the application
CMD ["npm", "run", "dev"]