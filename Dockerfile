FROM nginx:alpine

# Install Node, NPM, and Yarn
RUN apk add --update nodejs npm
RUN npm install --global yarn

# Copy project
COPY . /usr/home/adventure-4096

# Build the project
RUN \
    cd /usr/home/adventure-4096 && \
    yarn install && \
    yarn build

# Copy the built project into the nginx html folder
RUN cp -a /usr/home/adventure-4096/dist/. /usr/share/nginx/html/
