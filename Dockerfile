# Use an official Node.js image with version 16.14
FROM node:18.17.0

ENV USER=dmp
ENV WDIR=/usr/src/rdm

# Install pnpm globally using npm
RUN npm install -g pnpm

# Set the working directory for your application
WORKDIR $WDIR

# Copy your application code into the container
COPY . .

# Install application dependencies using pnpm
RUN pnpm install && pnpm run build

# Expose the port on which the app runs
EXPOSE 3000

# Create a new user named "$USER"
RUN useradd -m $USER

# Set the ownership of the /app directory to the "$USER" user
RUN chown -R $USER:$USER $WDIR

Switch to the "$USER" user for running the application
USER $USER

# Define the command to start your application
CMD [ "pnpm", "dev" ]
