---
<header>
title: js日期格式化,
categories: 技术,
path: /archives,
comments: true,
photos: javascript,
date: 2019-04-17 00:08:58,
tags: ,
keywords: ,
description: 
</header>
---

```js

        var arr =["2018-01-0212:17:00","2016/05/0112:00","2018-01-0512:29:00",
        "2019010112","2016/09/0113:00:00","20180521185621","2019/04/09 12:00:00",
        "2017-01-0512:45:11","2019020111","2018/05/0112:00:00","2018010113",
        "2019-02-02 12:00:00","20181020120000"];
        
      
        var opt = "YYYY-MM-dd HH:MM:SS"
        function myReplace(str,reg,newStr){
            return str.replace(reg,newStr)
        }

        function mySlice(str,start,end){
            return str.slice(start,end)
        }

        var brr = []
        for(var i = 0; i < arr.length; i++){
           console.log(arr[i])
           var c = mySlice(arr[i],0,4)
           var b = myReplace(arr[i],/^\d{4}\D?/,"") //arr[i].replace(/^\d{4}\D?/,"") 
           var d = mySlice(b,0,2) //b.slice(0,2)
           var e = myReplace(b,/^\d{2}\D?/,"") //b.replace(/^\d{2}\D?/,"")
           var f = mySlice(e,0,2) //e.slice(0,2)
           var g = myReplace(e,/^\d{2}\D?/,"") //e.replace(/^\d{2}\D?/,"")
           var h = mySlice(g,0,2) //g.slice(0,2)
           var j = myReplace(g,/^\d{2}\D?/,"") //g.replace(/^\d{2}\D?/,"")
           var k = mySlice(j,0,2)   //j.slice(0,2)
           if(k == ""){
                k = "00"
            }
           var l = myReplace(j,/^\d{2}\D?/,"") //j.replace(/^\d{2}\D?/,"")
 
            if(l == ""){
                l = "00"
            }
           brr[i] = c + "-" + d + "-" + f +"  "+ h + ":" + k + ":"+ l 
        }
        console.log(brr)

```