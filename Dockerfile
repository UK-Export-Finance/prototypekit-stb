FROM node:18

# Set the working directory
WORKDIR /app

# Install dependencies
# RUN npm install @ministryofjustice/frontend

# Copy the application source code
COPY . .
RUN npm i

# Start the application
CMD ["npm", "run", "dev"]