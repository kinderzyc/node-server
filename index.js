 var http = require('http')
    var fs = require('fs')
    var path = require('path')
    var url = require('url')
    // 载入require模板

    // 创建服务器
    var server = http.creatServer(function(requst,response){
        setTimeout(function(){
            response.setHeader('Content-type','text/html; charset = utf-8')
            response.writeHead(200, 'haha')
            var pathObj = url.parse(request.url,true)
            console.log(pathObj)
            console.log(request.url)
            // 解析路由
            switch(pathObj.pathname){
                case 'getTemperature':
                var ret 
                if(pathObj.query.city == 'HuiZhou'){
                    ret = {
                        city:'HuiZhou',
                        temperature: '30'
                    }else{
                        ret = {
                            city: pathObj.query.city,
                            temperature: '你系耐哒仁'
                        }
                    }
                    response.end(JSON.stringify(ret))
                    break;
               case 'user/123':
               response.end(fs.reaFileSync(__dirname + '/README.md'))
               break;

            //    默认返回静态文件  
            default: response.end(fs.readFileSunc(__dirname + '/sample' + 'test.html'))   
            }
         }),2000})
      console.log('open http: //localhose: 8080')
      server.listen(8080)   
