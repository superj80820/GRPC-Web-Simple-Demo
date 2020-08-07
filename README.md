# GRPC-Web-Simple-Demo

此`Repository`簡單Demo`web-client`透過`Envoy`來與`Golang GRPC Server`溝通。

## 需要安裝

* `docker`
* `docker-compose`

## 怎麼使用?

1. `docker run -v ${PWD}:/app -w /app node:14.3.0-alpine npm install`: 安裝`web-cleint`的相依
2. `docker-compose build`: 安裝`Golang GRPC Server`與`Envoy`的相依
3. `docker-compose up`: 啟動`web-client`, `Golang GRPC Server`, `Envoy`
4. 連入`localhost:8060`，打開`console`會看到`web-cleint`發出的`Hello`會得到`Hello World`的回傳

![](https://imgur.com/0GmF7QJ.jpg)
