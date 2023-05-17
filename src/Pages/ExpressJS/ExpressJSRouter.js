import React from 'react';

function ExpressJSRouter(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Router(路由器)</h1>
                <p>在了解前Router前需先理解express應用程式的運作。</p>
                <p>Node.js只能執行一個JS文件，這也代表只有一個express應用程式可以被伺服器運行，</p>
                <p>但不可能會只靠一個JS文件就處理伺服器的所有內容，因此就要使用Router，</p>
                <p>Router可以視為是另一個小型express應用程式，創建Router的JS腳本可以透過被express應用程式主文件調用來執行其內容。</p>
                <p>express應用程式執行<code>app.use(url:string, router:Router);</code>即可使用指定路由器並設置對應的路徑名稱。</p>
                <p>範例:</p>
                <code>  </code>
                <code>router腳本:</code>
                <code>  </code>
                <code>  const express = require("express");</code>
                <code>  </code>
                <code>  const router = express.Router();</code>
                <code>  </code>
                <code>  router.get("/",(req,res) ={'>'} {'{'} res.send("你好"); {'}'});</code>
                <code>  router.get("/bye",(req,res) ={'>'} {'{'} res.send("再見"); {'}'});</code>
                <code>  </code>
                <code>  exports.r = router;</code>
                <code>  </code>
                <code>app腳本:</code>
                <code>  </code>
                <code>  const express = require("express");</code>
                <code>  const rt = require("./router腳本");</code>
                <code>  </code>
                <code>  const app = express(); </code>
                <code>  </code>
                <code>  app.use("/R", rt.r);</code>
                <code>  app.listen(80);</code>
                <code>  </code>
                <b>以上範例，當url輸入 "http://localhost/R"顯示"你好"，輸入 "http://localhost/R/bye"顯示"再見"</b>
            </div>
            <div className="flex content-div">
                <h1>RouteParam(路由參數)</h1>
                <p>路由參數是將url的部分路徑轉換為動態參數，以此達成動態路徑的請求回應。</p>
                <p>範例:</p>
                <code>  </code>
                <code>一般的做法:</code>
                <code>  </code>
                <code>  const express = require("express");</code>
                <code>  </code>
                <code>  const app = express();</code>
                <code>  </code>
                <code>  app.get("/hi",(req,res) ={'>'} {'{'} res.send("hi"); {'}'});</code>
                <code>  app.get("/good",(req,res) ={'>'} {'{'} res.send("good"); {'}'});</code>
                <code>  app.get("/bye",(req,res) ={'>'} {'{'} res.send("bye"); {'}'});</code>
                <code>  </code>
                <code>使用路由參數的做法:</code>
                <code>  </code>
                <code>  const express = require("express");</code>
                <code>  </code>
                <code>  const app = express();</code>
                <code>  </code>
                <code>  app.get("/:what",(req,res) ={'>'} {'{'} res.send(req.params.what); {'}'});</code>
                <code>  </code>
            </div>
            <div className="flex content-div">
                <h1>API</h1>
                <h3>express.Router(options?:object)</h3>
                <p>創建路由器</p>
                <a href="https://expressjs.com/en/api.html#express.router" target="_blank">參數options參考</a>
                <p>(以下API都需要透過路由器來調用，以router代稱)</p>
                <h3>router.param(paramName:string, middleware:function(request, response, next))</h3>
                <p>監聽指定的路由參數，如果接收請求的路徑是指定的路由參數時調用中間件</p>
                <h3>router.use(url:string, router:Router)</h3>
                <p>使用路由器並為路由器設置對應的路徑名稱</p>
                <h3>router.use(middleware:function(request, response, next))</h3>
                <p>使用中間件</p>
            </div>
        </div>
    );
}
export default ExpressJSRouter;