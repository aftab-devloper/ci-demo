FROM node:20-alpine

WORKDIR /app

COPY package.json server.js ./

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs

USER nodejs

EXPOSE 3000
ENV PORT=3000
ENV APP_VERSION=1.0.0

CMD ["node", "server.js"]
