
cd /root/kode/ && pm2 start ntot.js && pm2 start index.js --cron-restart="0 0 * * *"