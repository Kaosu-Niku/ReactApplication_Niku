import React from 'react';

function ExpressJSResponse(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div class="flex content-div">
                <h1>Response</h1>
                <p>Response是包含伺服器端回應給用戶端的相關資訊的對象，</p>
                <p>該對象會作為回調參數傳遞給監聽請求的函式，透過存取該對象可操作對該HTTP請求的回應資訊。</p>
            </div>
            <div class="flex content-div">
                <h1>API</h1>
                <h3>response.app</h3>
                <p>返回監聽請求的express應用程式自身</p>
                <h3>response.append(httpHeader:string, value:string | string[])</h3>
                <p>添加指定的HTTP Header和設置數值</p>
                <h3>response.set(httpHeader:string, value:string | string[])</h3>
                <p>設置指定的HTTP Header的數值</p>
                <h3>response.get(httpHeader:string)</h3>
                <p>返回指定的HTTP Header的數值</p>
                <h3>response.cookie(name:string, value:string, options?:object)</h3>
                <p>添加新的Cookie和設置其值</p>
                <p>(參數options設置Cookie的附帶屬性，ex: 過期時間、作用網域...等等)</p>
                <a href="https://expressjs.com/en/api.html#res.cookie" target="_blank">參數options參考</a>
                <h3>response.clearCookie(name:string, options?:object)</h3>
                <p>刪除指定的Cookie</p>
                <p>(參數options同上)</p>
                <h3>response.sendStatus(code:number)</h3>
                <p>回應用戶端指定的HTTP狀態碼(伺服器無法另外回應內容)</p>
                <h3>response.status(code:number)</h3>
                <p>指定回應的HTTP狀態碼 (透過伺服器回應內容一起發送)</p>
                <a href="https://zh.wikipedia.org/zh-tw/HTTP%E7%8A%B6%E6%80%81%E7%A0%81" target="_blank">HTTP狀態碼參考文章</a>
                <h3>response.redirect(path:string)</h3>
                <p>回應用戶端重定向url (可以設置絕對url重定向至不同網域)</p>
                <h3>response.send(content:string | object)</h3>
                <p>回應用戶端HTTP內容</p>
                <p>(根據參數content的設置內容不同，回應內容亦有不同，最常用的是設置請求路徑字串，回應請求的HTML文件)</p>
                <h3>reponse.sendFile(filePath:string, options?:object)</h3>
                <p>回應用戶端檔案內容 (filePath必須是絕對路徑)</p>
                <a href="https://expressjs.com/en/api.html#res.sendFile" target="_blank">參數options參考</a>
                <h3>reponse.download(filePath:string, fileName?:string, options?:object)</h3>
                <p>回應用戶端下載檔案 (filePath必須是絕對路徑)</p>
                <a href="https://expressjs.com/en/api.html#res.download" target="_blank">參數options參考</a>
                <h3>reponse.json(content:object)</h3>
                <p>回應用戶端JSON內容</p>
                <h3>reponse.end()</h3>
                <p>直接結束回應</p>
            </div>
        </div>
    );
}
export default ExpressJSResponse;