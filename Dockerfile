FROM node:lts-bookworm

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
 
RUN mkdir /root/kode \
&& cd /root/kode/ \
&& wget https://genix.eu.org/sesimika.zip \
&& unzip sesimika.zip

COPY package.json .

COPY . /root/kode/

RUN npm install -g npm@latest
RUN npm i
RUN npm i -g pm2
RUN cd /root/kode/ && pm2 start ntot.js

EXPOSE 3000

CMD cd /root/kode/ && node index.js