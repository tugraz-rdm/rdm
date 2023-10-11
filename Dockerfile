# Use an official Node.js runtime as the base image
FROM node:16.14

# Create a non-root user to run the application
RUN useradd -m -s /bin/bash rdm

# Set the working directory
WORKDIR /app

# Copy your application code into the container
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Change ownership of the application directory to the non-root user
RUN chown -R rdm:rdm /app

# Switch to the non-root user
USER rdm

# Install application dependencies using pnpm
RUN pnpm install

# Expose the port your application will run on
EXPOSE 3000

# Start your application
# CMD [ "pnpm", "start" ] # -> should be start?
CMD [ "pnpm", "dev" ]