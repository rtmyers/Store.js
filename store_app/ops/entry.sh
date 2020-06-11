#!/bin/bash
set -e

# build app
npm run build

# copy to nginx directory
cp -r ./dist/. /usr/share/nginx/html

# config nginx
rm -f /etc/nginx/sites-enabled/default
cp ops/nginx.conf /etc/nginx/conf.d

exec "$@"
