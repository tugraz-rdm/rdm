FROM node:18.17.0

ARG USER=dmp

WORKDIR /usr/src/rdm

# Install pnpm
RUN npm install -g pnpm

# Create user
RUN useradd -m ${USER}

# Set permissions
RUN chown -R ${USER}:${USER} /usr/src/rdm
RUN chmod -R 755 /usr/src/rdm

# Switch to user
USER ${USER}

# Copy and build
COPY --chown=${USER}:${USER} . .
RUN pnpm install && pnpm run build

EXPOSE 3000
CMD [ "pnpm", "dev" ]
