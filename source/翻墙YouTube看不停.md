---
<header>
title: 翻墙YouTube看不停,
categories: 技术,
path: /archives,
comments: true,
photos: google,
date: 2019-04-20 13:33:57,
tags: ,
keywords: ,
description: 
</header>
---

<!-- [TOC] -->
# 翻墙
##  1.国外服务器

### 本人采用的[Vultr](https://www.vultr.com/?ref=8039983,"vultr")服务器
### mac 电脑直接 command+空格 输入终端 打开终端
### ssh root@ 你的国外服务器的IP
### 输入你的服务器密码 
```js
yum -y install wget
wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocksR.sh
chmod +x shadowsocksR.sh
./shadowsocksR.sh 2>&1 | tee shadowsocksR.log
```
### 跟着提升一步步走 
### 看到下面这写的时候就已经成功了  复制下来保持起来
Congratulations, ShadowsocksR server install completed!
Your Server IP        :  0.0.0.0
Your Server Port      :  19216 
Your Password         :  teddysun.com 
Your Protocol         :  origin 
Your obfs             :  plain 
Your Encryption Method:  aes-256-cfb 

Welcome to visit:
Enjoy it!

[root@vultr shadowsocks-libev]#

### 已经成功啦

### mac电脑上下载一个[shadowsocks](http://www.emptyus.com/data/ssx-mac-v33.zip)
### windows电脑下载[shadowsocks点击这里](http://www.emptyus.com/data/ssx-win-v416.zip)
### 把你的服务器地址、服务器端口、密码、加密方式、填完 就能翻墙了


