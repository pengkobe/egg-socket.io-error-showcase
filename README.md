# egg-socket.io-error-showcase
> 本 Repo 用来重现 egg-socket.io 报错:  **Cannot set property 'args' of undefined**

## 步骤
#### 1.安装依赖并运行
```
$ cnpm i
$ npm start
```

#### 2.进入浏览器，并打开 **http://localhost:7001/public/index.html**

#### 3. 按 F5 刷新网页(1+)

#### 4. 查看程序控制台信息
其中会包含以下错误信息
```
TypeError: Cannot set property 'args' of undefined (uncaughtException throw 1 times on pid:57576)
    at Socket.socket.on.args (D:\git\egg-socket.io-error-showcase\node_modules\._egg-socket.io@3.0.0@egg-socket.io\lib\io.js:68:37)
    at emitOne (events.js:101:20)
    at Socket.emit (events.js:191:7)
    at Socket.emit (D:\git\egg-socket.io-error-showcase\node_modules\._socket.io@2.0.4@socket.io\lib\socket.js:140:10)
    at Socket.onclose (D:\git\egg-socket.io-error-showcase\node_modules\._socket.io@2.0.4@socket.io\lib\socket.js:452:8)
    at Client.onclose (D:\git\egg-socket.io-error-showcase\node_modules\._socket.io@2.0.4@socket.io\lib\client.js:233:24)
    at emitTwo (events.js:111:20)
    at Socket.emit (events.js:194:7)
    at Socket.onClose (D:\git\egg-socket.io-error-showcase\node_modules\._engine.io@3.1.3@engine.io\lib\socket.js:318:10)
    at Object.onceWrapper (events.js:293:19)
```