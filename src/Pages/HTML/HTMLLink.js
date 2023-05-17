import React from 'react';

function HTMLLink(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Link</h1>
                <p>Link是用來連結資源並定義與資源之間的連結關係。</p>
                <p>使用href屬性來連結資源，在本地端可以直接以檔案路徑來連結資源，在伺服器端需要透過HTTP請求來連結資源。</p>
                <p>使用rel屬性設置與資源的連結關係，根據設置的連結關係，瀏覽器會對資源做出不同的處理</p>
            </div>
            <div className="flex content-div">
                <h1>rel</h1>
                <h3>icon</h3>
                <p>網頁的icon</p>
                <h3>stylesheet</h3>
                <p>CSS樣式表</p>
                <h3>alternate</h3>
                <p>文件的替代版本(ex: 翻譯、打印頁)</p>
                <h3>start</h3>
                <p>集合中的第一個文件</p>
                <h3>prev</h3>
                <p>集合中的上一個文件</p>
                <h3>next</h3>
                <p>集合中的下一個文件</p>
                <h3>help</h3>
                <p>幫助文件</p>
                <h3>license</h3>
                <p>版權文件</p>
                <h3>preconnect</h3>
                <p>瀏覽器會搶先連結到資源</p>
                <h3>prefetch</h3>
                <p>瀏覽器會搶先獲取並緩存資源</p>
                <h3>prerender</h3>
                <p>瀏覽器會預渲染資源</p>
                <p>(這會消耗使用者的帶寬，除非確定使用者會瀏覽到該部分否則不應使用)</p>
            </div>
        </div>
    );
}
export default HTMLLink;