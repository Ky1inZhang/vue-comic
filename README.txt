
第二章
  路由详解（一）————基础
  1) router-linke和router-view
  2) 路由配置
      a. 动态路由
      b. 嵌套路由
      c. 命名路由
      d. 命名视图
  3) JS操作重定向
  4）重定向和别名


nginx +VUE 解决404 问题
https://www.jianshu.com/p/989d8bc719c4

  location / {
            root  F:/vue/vue-comic/dist;
            index index.html index.htm index.php;
            ##解决nginx 404  支持history
            try_files $uri $uri/ /index.html;
        }

nginx 代理模板
  location /api/ {
                proxy_pass https://www.manhuafen.com/comic/; 
        }
        
        location /r/ {
                proxy_pass https://www.manhuafen.com/; 
        }

vue 基于vue-lazyload图片懒加载、延迟加载
https://www.jianshu.com/p/4defe2eece42
vue-lazyload最简实现
http://www.bpwen.cn/show/2119/9340


node爬虫  npm install crawler
https://www.cnblogs.com/boxrice/p/11725893.html  
简单的cheerio
https://www.cnblogs.com/xiaxuexiaoab/p/7124956.html

正则匹配
        匹配两个字符串A与B中间的字符串包含A与B：
        表达式: A.*?B（“.“表示任意字符，“？”表示匹配0个或多个）
        示例: Abaidu.comB
        结果: Awww.apizl.comB
        匹配两个字符串A与B中间的字符串包含A但是不包含B：
        表达式: A.*?(?=B)
        示例: Awww.apizl.comB
        结果: Awww.apizl.com
        匹配两个字符串A与B中间的字符串且不包含A与B：
        表达式: (?<=A).*?(?=B)

ios不显示的bug是由于不支持负向零宽断言
即(?<=exp)
var str = 'dsaxc7vbnloia56op-bpo'
var arr = str.match(/[^a]+(?=b)/ig)
https://bbs.csdn.net/topics/391815693?page=1