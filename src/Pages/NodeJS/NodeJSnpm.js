import React from 'react';

function NodeJSnpm(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>npm是什麼</h1>
                <p>Node.js主要依靠調用各種模塊來開發各種伺服器功能，而Node.js使用npm來管理模塊。</p>
                <p>npm全稱 node package manager，是一個使用javaScript撰寫的軟體套件管理系統。</p>
                <p>npm同時也有官方網站可供搜索和查詢他人所發布的模塊。<a href="https://www.npmjs.com/">npm模塊網站</a></p>
                <p>Node.js安裝時就附帶了npm和一些內建的模塊，要調用其他模塊都必須經過npm安裝後才能使用。</p>
            </div>
            <div className="flex content-div">
                <h1>安裝模塊</h1>
                <p>CMD執行<code>npm install 模塊名稱</code>即可安裝模塊。</p>
                <p>npm是環境變數，用於執行npm相關的指令。install是安裝模塊的指令。</p>
                <p>安裝模塊後可以在安裝路徑下看到node_modules資料夾、package.json文件、package-lock.json文件。</p>
                <p>node_modules資料夾裡面含有模塊的實際檔案。</p>
                <p>package.json文件紀錄模塊的依賴關係，使得開發者可以簡單的調用模塊。</p>
                <p>package-lock.json文件紀錄模塊安裝版本的相關資訊，避免因模塊版本不一導致的問題。</p>
                <p>(ex: 你自己的專案使用1.0.1版本的A模塊，別人使用1.0.2版本的A模塊，如果別人導入你的專案就可能因不同版本導致問題)</p>
                <h2>install的其他用法</h2>
                <p><code>npm install -g 模塊名稱</code></p>
                <p>-g代表將模塊安裝至全域路徑，在全域路徑下的模塊可以被任意路徑的JS腳本調用。</p>
                <p>(沒有-g代表安裝至本地路徑，在本地路徑下的模塊只有同樣於本地路徑之下的JS腳本可以調用)</p>
            </div>
            <div className="flex content-div">
                <h1>導出和調用模塊</h1>
                <h2>CommonJS & ES6 Modules</h2>
                <p>這兩個是關於JavaScript的模塊使用規範，兩者的用法不同。</p>
                <h2>CommonJS</h2>
                <p>CommonJS使用require()函式調用模塊，根據參數的名稱去尋找對應名稱的模塊調用，</p>
                <p>require()返回一個Object類型，因此導出模塊實際上是導出為一個Object類型的對象。</p>
                <p>CommonJS使用exports保留字隱含代表所導出的Object對象，可以對exports任意添加API並設定API對應的屬性和函式。</p>
                <div class="flex content-div">
                    <h3>CommonJS範例:</h3>
                    <code>  </code>
                    <code>A腳本:</code>
                    <code>  </code>
                    <code>  let x = 1;</code>
                    <code>  let y = "你好";</code>
                    <code>  </code>
                    <code>  exports.X = x;</code>
                    <code>  exports.Y = y;</code>
                    <code>  </code>
                    <code>B腳本:</code>
                    <code>  </code>
                    <code>  const A = require("./A腳本");</code>
                    <code>  </code>
                    <code>  A.X; // get 1</code>
                    <code>  A.Y; // get "你好"</code>
                    <code>  </code>
                </div>
                <h2>ES6 Modules</h2>
                <p>ES6使用import調用模塊，根據參數的名稱去尋找對應名稱的模塊調用，import返回模塊本身，</p>
                <p>ES6使用export標識符來導出屬性和函式，只有添加了export的屬性和函式可以被調用的API。</p>
                <div className="flex content-div">
                    <h3>ES6範例:</h3>
                    <code>  </code>
                    <code>A腳本:</code>
                    <code>  </code>
                    <code>  export let x = 1;</code>
                    <code>  export let y = "你好";</code>
                    <code>  </code>
                    <code>B腳本:</code>
                    <code>  </code>
                    <code>  import * as A from "./A腳本";</code>
                    <code>  </code>
                    <code>  A.x; // get 1</code>
                    <code>  A.y; // get "你好"</code>
                    <code>  </code>
                </div>
                <h2>npm發布的模塊和自行導出的模塊差異</h2>
                <p>npm所發布的模塊和自行導出的模塊，調用上有差異，調用發布的模塊使用("模塊名")，調用自行導出的模塊改成("./腳本名")</p>
            </div>
        </div>
    );
}
export default NodeJSnpm;