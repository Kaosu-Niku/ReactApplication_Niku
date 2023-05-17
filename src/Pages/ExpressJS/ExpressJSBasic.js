import React from 'react';

function ExpressJSBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Express.js是什麼</h1>
                <p>Express.js是npm的一個模塊，其整合了Node.js內置的http模塊相關功能並封裝成易於使用的開發框架，是目前主流使用的Node.js開發框架。</p>
                <p>npm安裝express模塊即可開始使用。</p>
            </div>
            <div className="flex content-div">
                <h1>功能</h1>
                <p>Express.js的核心功能在於對路由的分配以及調用中間件來處理請求資訊，在了解這些前需先理解伺服器的工作內容。</p>
                <p>伺服器主要的工作內容是監聽用戶端發送的HTTP請求，根據不同的請求回應用戶端不同的資訊，不同的請求之間以路徑url作為區分。</p>
                <p>預設以"/"路徑作為一個網站的進入點，伺服器監聽"/"路徑的GET請求並回應給用戶端該網站的首頁頁面，這就是一個最基本的伺服器工作。</p>
            </div>
        </div>
    );
}
export default ExpressJSBasic;