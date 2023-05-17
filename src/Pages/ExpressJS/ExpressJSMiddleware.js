import React from 'react';

function ExpressJSMiddleware(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div class="flex content-div">
                <h1>Middleware(中間件)</h1>
                <p>Middleware本質是一個固定格式的函式，範例:<code>function middleware(request, response, next) {'{'} {'}'}</code></p>
                <p>在Node.js中，接收HTTP請求時會調用中間件來處理請求，Express.js將中間件包裝為含有request,response,next三個參數的函式，</p>
                <p>request參數含有該請求的相關資訊，response參數含有回應該請求的方法，next參數用於結束當前中間件的執行並調用下一個中間件，</p>
                <p>與監聽HTTP請求相關的函式，其調用的一律是最後一個中間件，由於後面已經沒有接續的中間件需要調用，因此也不需要調用next()可以省略next參數。</p>
                <p>請求範例:<code>app.post("/",(request, response) ={'>'} {'{'} {'}'})</code></p>
                <p>而使用下列函式插入的Middleware一律執行於監聽函式的中間件之前，因此可以讓監聽函式接收到先經過其他中間件處理過的參數。</p>
                <p>執行<code>app.use(middleware);</code>使用指定的中間件，中間件可以使用多個，按照腳本執行順序依序調用。</p>
            </div>
            <div class="flex content-div">
                <h1>API</h1>
                <p>以下是Express自帶的中間件</p>
                <h3>express.urlencoded(options?:object)</h3>
                <p>將HTTP請求的Body內容解析為Object類型</p>
                <a href="https://expressjs.com/en/api.html#express.urlencoded" target="_blank">參數options參考</a>
                <h3>express.text(options?:object)</h3>
                <p>將HTTP請求的Body內容解析為完整字串</p>
                <a href="https://expressjs.com/en/api.html#express.text" target="_blank">參數options參考</a>
                <h3>express.json(options?:object)</h3>
                <p>將HTTP請求的Body內容解析為json格式</p>
                <a href="https://expressjs.com/en/api.html#express.json" target="_blank">參數options參考</a>
                <h3>express.raw(options?:object)</h3>
                <p>將HTTP請求的Body內容解析為二進制格式</p>
                <a href="https://expressjs.com/en/api.html#express.raw" target="_blank">參數options參考</a>
                <h3>express.Router(options?:object)</h3>
                <p>創建路由器 (路由器也算是中間件)</p>
                <h3>express.static(options?:object)</h3>
                <p>提供靜態文件</p>
                <p>(如果找不到文件發生404狀態，不會立即中斷請求而是會繼續執行中間件)</p>
                <a href="https://expressjs.com/en/api.html#express.static" target="_blank">參數options參考</a>
            </div>
        </div>
    );
}
export default ExpressJSMiddleware;