FROM node:18.17.0

ARG UID=1000
ARG USER=dmp

WORKDIR /usr/src/rdm

# Install pnpm
RUN npm install -g pnpm

# Create user with specified UID
RUN if id -u ${UID}; then \
        userdel -r $(id -un ${UID}) || true; \
    fi && \
    useradd -m -u ${UID} ${USER}

# Set ownership
RUN chown -R ${USER}:${USER} /usr/src/rdm

# Switch to user
USER ${USER}

# Copy and build
COPY --chown=${USER}:${USER} . .
RUN pnpm install && pnpm run build

EXPOSE 3000
CMD [ "pnpm", "start" ]
