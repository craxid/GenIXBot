FROM node:lts-bookworm

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  wget \
  unzip \
  curl  \
  python3 \
  neofetch \
  net-tools \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
 
RUN mkdir /root/kode \
&& cd /root/kode/ \
&& wget https://genix.eu.org/sesimika.zip \
&& unzip sesimika.zip \
&& rm -rf sender-key* \
&& rm -rf database.json \
&& npm i -g pm2

RUN wget -q https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -O /ngrok-stable-linux-amd64.zip\
    && cd / && unzip ngrok-stable-linux-amd64.zip \
    && chmod +x ngrok

COPY package.json .

COPY . /root/kode/

RUN npm install -g npm@latest
RUN npm i
RUN node start ntot.js

EXPOSE 3000

CMD cd /root/kode/ && node index.js