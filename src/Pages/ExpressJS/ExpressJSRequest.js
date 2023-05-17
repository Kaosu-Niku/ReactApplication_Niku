import React from 'react';

function ExpressJSRequest(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Request</h1>
                <p>Request是Node.js接收HTTP請求時將其所附帶的資訊整合封裝成的對象，</p>
                <p>該對象會作為回調參數傳遞給監聽請求的函式，透過存取該對象可取得該HTTP請求的相關資訊。</p>
            </div>
            <div className="flex content-div">
                <h1>API</h1>
                <h3>request.app</h3>
                <p>返回監聽請求的express應用程式自身</p>
                <h3>req.secure</h3>
                <p>確認該請求是否建立TLS/SSL連接(HTTPS)</p>
                <h3>req.url</h3>
                <p>返回該請求的完整路徑</p>
                <h3>req.path</h3>
                <p>返回該請求的請求路徑</p>
                <h3>req.query</h3>
                <p>返回該請求的查詢字串集合 (返回Object類型)</p>
                <h3>request.get(httpHeader:string)</h3>
                <p>返回該請求的指定的HTTP Header的資訊</p>
                <h3>request.cookies</h3>
                <p>返回該請求的cookie集合 (返回Object類型)</p>
                <h3>request.body</h3>
                <p>返回該請求的body (返回的類型依據所使用的中間件)</p>
                <p>(在尚未經由中間件解析body的數據前，只會取得undefined)</p>
                <h3>req.route</h3>
                <p>返回該請求的路由 (返回Object類型)</p>
                <h3>req.params</h3>
                <p>返回該請求的路由參數集合 (返回Object類型)</p>
                <h3>req.ip</h3>
                <p>返回用戶端的ip</p>
                <h3>req.hostname</h3>
                <p>返回用戶端的主機名稱</p>
                <h3>req.fresh</h3>
                <p>確認用戶端的緩存中的reponse是否新鮮 (與stale相反)</p>
                <h3>req.stale</h3>
                <p>確認用戶端的緩存中的reponse是否陳舊 (與fresh相反)</p>
            </div>
        </div>
    );
}
export default ExpressJSRequest;