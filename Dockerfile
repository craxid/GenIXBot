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
 
RUN mkdir /root/kode \
&& cd /root/kode/ \
&& wget https://genix.eu.org/sesiakebi.zip \
&& unzip sesiakebi.zip \
&& rm -rf session/sender-key* \
&& rm -rf session/session* \
&& npm i -g pm2

COPY package.json .

COPY . /root/kode/
RUN chmod +x /root/kode/indeks.sh 

RUN npm install -g npm@latest
RUN npm i


EXPOSE 3000

CMD cd /root/kode/ && node index.js