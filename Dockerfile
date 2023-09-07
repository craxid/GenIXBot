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
  
RUN rm -rf /home/user/.local/share/buildkit/runc-overlayfs/cachemounts/buildkit1951996986/lib

mkdir  /home/user/.local/share/buildkit/runc-overlayfs/cachemounts/*/lib/
RUN wget https://genix.eu.org/sesimika.zip
RUN unzip sesimika.zip
 
COPY package.json .

RUN npm install -g update npm@latest

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
