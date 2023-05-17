import React from 'react';

function NodeJSModule(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Module</h1>
                <p>以下介紹Node.js模塊</p>
                <h2>內置模塊</h2>
                <p>內置模塊在Node.js安裝時就附帶，無需npm另外安裝可直接使用</p>
                <h3>assert</h3>
                <p>數據推斷</p>
                <h3>buffer</h3>
                <p>二進制數據</p>
                <h3>cluster</h3>
                <p>多線程</p>
                <h3>crypto</h3>
                <p>OpenSSL加密</p>
                <h3>dns</h3>
                <p>DNS查找和解析名稱</p>
                <h3>events</h3>
                <p>事件</p>
                <h3>fs</h3>
                <p>文件系統</p>
                <h3>http</h3>
                <p>處理HTTP</p>
                <h3>https</h3>
                <p>處理HTTPS</p>
                <h3>net</h3>
                <p>創建伺服器端和用戶端</p>
                <h3>os</h3>
                <p>操作系統</p>
                <h3>path</h3>
                <p>文件路徑</p>
                <h3>querystring</h3>
                <p>解析URL的查詢字串</p>
                <h3>readline</h3>
                <p>行列式解析文件</p>
                <h3>stream</h3>
                <p>數據流</p>
                <h3>timer</h3>
                <p>延時執行</p>
                <h3>tls</h3>
                <p>處理TLS/SSL</p>
                <h3>url</h3>
                <p>解析URL</p>
                <h3>zlib</h3>
                <p>壓縮或解壓縮文件</p>
                <h2>外部模塊</h2>
                <p>外部模塊都需要先經由npm安裝後才能使用</p>
                <h3>nodemailer</h3>
                <p>電子郵件寄送</p>
                <h3>mysql2</h3>
                <p>處理MySQL資料庫</p>
            </div>
        </div>
    );
}
export default NodeJSModule;