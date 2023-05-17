import React from 'react';

function TypeScriptBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>TypeScript是什麼</h1>
                <p>TypeScript是基於JavaScript架構之上的嚴格語法超集的強型別語言，提供許多額外功能，最重要的功能在於資料類型推斷，</p>
                <p>(JavaScript總是以隱含變量來代表一切，無法確切辨別資料類型，這樣使得程式碼可讀性困難且難以Debug)</p>
                <p>TypeScript還提供嚴格檢查功能，編寫TypeScript時會提示程式碼錯誤，編寫錯誤將不允許編譯以防止錯誤。</p>
            </div>
            <div className="flex content-div">
                <h1>TypeScript編譯成JavaScript</h1>
                <p>目前各大瀏覽器都尚未支援執行TypeScript文件的引擎，因此目前TypeScript文件都需要編譯成相對的JavaScript文件給瀏覽器執行。</p>
                <p>目前主流使用的TypeScript編譯器是npm的typescript模塊，以下介紹如何安裝和使用 (有關npm的資訊查看Node.js的npm章節)</p>
                <p>1. 安裝Node.js <a href="https://nodejs.org/en/">Node.js官網</a></p>
                <p>2. CMD執行<code>npm install -g typescript</code>安裝typescript模塊。</p>
                <p>3. typescript模塊安裝完成後，CMD執行<code>tsc 檔案.ts</code>即可編譯指定的TypeScript文件</p>
            </div>
        </div>
    );
}
export default TypeScriptBasic;