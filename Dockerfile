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
  speedtest-cli \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
 
RUN wget https://genix.eu.org/sesiakebi.zip
RUN unzip sesiakebi.zip
 
COPY package.json /

RUN npm install -g update npm@latest

COPY . /kode

EXPOSE 3000

CMD cd /kode && npm start
