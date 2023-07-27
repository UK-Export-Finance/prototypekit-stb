FROM node:18

# Set the working directory
WORKDIR /app

# Install dependencies
# RUN npm install
# RUN npm install @ministryofjustice/frontend

# Copy the application source code
COPY . ./app

# Start the application
CMD ["npm", "run", "dev"]