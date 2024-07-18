FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

# 安装依赖
RUN npm install

COPY . .

RUN npm run build


RUN npm install -g serve

# 运行命令
CMD ["serve", "-s", "build"]

EXPOSE 3000
