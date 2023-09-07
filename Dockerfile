FROM node:lts-bookworm
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt upgrade -y && apt install -y \
   imagemagick webp git neofetch ffmpeg ssh wget vim nano curl python3 unzip


RUN wget -q https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -O /ngrok-stable-linux-amd64.zip\
    && cd / && unzip ngrok-stable-linux-amd64.zip \
    && chmod +x ngrok
 

RUN mkdir /run/sshd \
    && echo "/ngrok tcp --authtoken 2M27dRwze2Ne9C3JBrCF9v0tZz9_3uyj5aXQt5CjKW6t5LGov --region ap 22 &" >>/openssh.sh \
    && echo "sleep 5" >> /openssh.sh \
    && echo "curl -s http://localhost:4040/api/tunnels | python3 -c \"import sys, json; print(\\\"ssh info:\\\n\\\",\\\"ssh\\\",\\\"root@\\\"+json.load(sys.stdin)['tunnels'][0]['public_url'][6:].replace(':', ' -p '),\\\"\\\nROOT Password:deka99\\\")\" || echo \"\nError：NGROK_TOKEN，Ngrok Token\n\"" >> /openssh.sh \
    && echo '/usr/sbin/sshd -D' >>/openssh.sh \
    && echo 'PermitRootLogin yes' >>  /etc/ssh/sshd_config  \
    && echo root:deka99|chpasswd \
    && chmod 755 /openssh.sh

RUN cd /run/sshd \
&& echo "clear" >> /root/s.sh \
&& echo "cd /root/" >> /root/s.sh \
&& echo "git clone https://github.com/craxid/mikabot" >> /root/s.sh \
&& echo 'cd /root/mikabot' >> /root/s.sh \
&& echo "npm install -g pm2" >> /root/s.sh \
&& echo "pm2 kill" >> /root/s.sh \
&& echo "git add ." >> /root/s.sh \
&& echo "git commit -m "update"" >> /root/s.sh \
&& echo "git pull" >> /root/s.sh \
&& echo "cd / && node index.js" >> /root/s.sh \
&& echo "/./openssh.sh" >> /root/s.sh \
&& chmod 755 /root/s.sh


COPY package.json .
RUN npm i
COPY . .
    
EXPOSE 80 443 2004 3000 3306 4040 5432 5700 5701 5010 6800 6900 8080 8888 9000

CMD /openssh.sh
