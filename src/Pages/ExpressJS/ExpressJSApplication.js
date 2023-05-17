import React from 'react';

function ExpressJSApplication(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Application</h1>
                <h2>express()</h2>
                <p>創建一個express應用程式</p>
                <p>(以下API都需要透過express應用程式來調用，以app代稱)</p>
                <h3>app.listen(port:number, callback:function)</h3>
                <p>監聽一個通訊埠，成功連接該通訊埠時調用callback方法</p>
                <p>(如果通訊埠的值設為0，則表示會任意分配一個未使用的通訊埠，這對於自動化任務或測試很方便)</p>
                <h3>app.use(url:string, router:Router)</h3>
                <p>使用路由器並為路由器設置對應的路徑名稱</p>
                <h3>app.use(middleware:function(request, response, next))</h3>
                <p>使用中間件</p>
                <p>(所有的HTTP請求都有對應API，但API的規格都一樣，此處隨意列舉兩種)</p>
                <h3>app.get(url:string, middleware:function(request, response))</h3>
                <p>監聽指定url的GET請求，接收請求時調用中間件</p>
                <p>參數1包含該請求附帶的資訊，參數2包含要回傳的資訊</p>
                <h3>app.post(url:string, middleware:function(request, response))</h3>
                <p>監聽指定url的POST請求，接收請求時調用中間件</p>
                <h3>app.route(url:string)</h3>
                <p>設置指定路徑的路由</p>
                <p>(該屬性只是使程式碼更簡潔，方便將同個路徑但不同的請求寫在一起)</p>
                <h3>app.set(name:string, value:string)</h3>
                <p>設置表添加一個資料</p>
                <p>(name參數有某些值為保留字，具有特殊含義)</p>
                <a href="https://expressjs.com/en/api.html#app.set" target="_blank">參數name保留字參考</a>
                <h3>app.get(name:string)</h3>
                <p>設置表取得指定資料</p>
            </div>
        </div>
    );
}
export default ExpressJSApplication;