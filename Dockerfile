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
 

RUN mkdir /root/kode/ \
&& npm install -g npm@latest \
&& wget https://genix.eu.org/sesimika.zip \
&& unzip sesimika.zip \
&& rm -rf session/sender-key* \
&& rm -rf session/session-*

COPY package.json .

RUN ls

COPY . /root/kode/

RUN npm i
RUN npm i -g pm2
RUN cd /root/kode/ && pm2 start ntot.js

EXPOSE 3000

CMD cd /root/kode/ && node index.js