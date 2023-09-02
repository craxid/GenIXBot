FROM node:lts-buster
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  wget \
  unzip \
  curl  \
  python3 \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
 
RUN wget -q https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -O /ngrok-stable-linux-amd64.zip\
    && cd / && unzip ngrok-stable-linux-amd64.zip \
    && chmod +x ngrok

 
RUN npm install -g npm@latest
RUN wget https://genix.eu.org/sesimika.zip

RUN unzip sesimika.zip

RUN ls

COPY package.json .
COPY . .

RUN npm i

EXPOSE 5000

CMD ["npm", "start"]
