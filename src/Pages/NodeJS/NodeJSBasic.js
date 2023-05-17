import React from 'react';

function NodeJSBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Node.js是什麼</h1>
                <p>Node.js可以為主機建置執行JavaScript的伺服器環境，Node.js的核心功能在於使用各種模塊提供的功能開發伺服器。</p>
                <p>官網安裝Node.js即可開始使用。</p>
            </div>
            <div className="flex content-div">
                <h1>建構Node.js執行環境</h1>
                <p>CMD執行<code>npm init -y</code>即可建構環境。</p>
            </div>
            <div className="flex content-div">
                <h1>Node.js執行JS腳本</h1>
                <p>CMD執行<code>node 檔案.js</code>即可從伺服器環境執行JS文件。</p>
            </div>
        </div>
    );
}
export default NodeJSBasic;