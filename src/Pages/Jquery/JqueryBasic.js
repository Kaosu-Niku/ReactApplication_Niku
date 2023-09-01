import React from 'react';

function JqueryBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>jQuery是什麼</h1>
                <p>jQuery是一個JavaScript的庫，核心理念在於少寫多做，用更少的程式碼做到更多的事，可以大大減少JavaScript的開發時間。</p>
            </div>
            <div className="flex content-div">
                <h1>安裝</h1>
                <p>CMD執行<code>npm install jquery</code>即可安裝jQuery的包。</p>
                <h1>使用</h1>
                <p>在欲使用jQuery的JavaScript文檔添加下列程式碼</p>
                <code>import $ from 'jquery';</code>
            </div>
        </div>
    );
}
export default JqueryBasic;