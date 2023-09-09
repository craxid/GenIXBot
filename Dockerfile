FROM node:lts-bookworm
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
  
RUN mkdir /root/kode/
RUN cd /root/kode/ \
&& rm -rf database.json \
&& wget https://genix.eu.org/sesimika.zip \
&& unzip sesimika.zip
 
COPY package.json .

RUN npm install -g update npm@latest
RUN npm install -g pm2
RUN npm i
RUN node ntot.js

COPY . /root/kode/

RUN  mkdir /root/kode/tmp/ \

EXPOSE 3000

CMD cd /root/kode/ && node index.js
