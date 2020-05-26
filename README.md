# hello serverless

## 常用操作

创建服务

```shell
serverless create --template aliyun-nodejs
```

查看信息

```shell
serverless info
```

## 部署

部署所有方法

```shell
serverless deploy
```

单个方法部署

```shell
serverless deploy function -f helloSls
```

有时候上面的部署方式会报错，下面这样就可以了，但是不知道为什么，相关文档也没有找到

```shell
serverless deploy -s dev --false
```

## 云服务商

阿里云需要做那些事情

1. 新建一个子用户，给 serverless 处理包
2. 开通函数计算
3. 开通 API 网关
4. ...

## 文档

[serverless - 阿里云函数计算](https://www.serverless.com/framework/docs/providers/aliyun/)

[使用 Node.js 快速开启 ServerLess Functions：入门实践指南](https://mp.weixin.qq.com/s?__biz=MzIyNDU2NTc5Mw==&mid=2247484515&idx=1&sn=291f627df811eaef2c6fac5e74c5f188&scene=21)


[TypeScript + ServerLess 开发 REST API 实战](https://mp.weixin.qq.com/s/whURh7YRr_iUtfmAAd_7AQ)
