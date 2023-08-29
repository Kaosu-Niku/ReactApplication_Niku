import React from 'react';
import './CSSRWD.css';

function CSSRWD(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>RWD</h1>
                <p>RWD全稱 Responsive Web Design。響應式網頁設計。</p>
                <p>其核心概念在於要能使網頁能因應不同設備的螢幕尺寸自適應呈現合適的版面。</p>
            </div>
            <div className="flex content-div">
                <h1>HTML文件設定RWD</h1>
                <p>於HTML文件中添加下列程式碼。</p>
                <code>{'<'}meta name="viewport" content="width=device-width, initial-scale=1.0"{'>'}</code>
            </div>
            <div className="flex content-div">
                <h1>RWD的核心重點</h1>
                <h2>不要使內容超出視口寬度</h2>
                <p>內容超出視口寬度或高度，瀏覽器預設會出現滑動條，讓使用者拖動滑動條來移動視口位置查看超出視口的內容，</p>
                <p>現代網路使用者在瀏覽網頁早已習慣了垂直拖動視口高度的瀏覽模式，反之水平拖動視口寬度是使用者所不習慣的，</p>
                <p>因此RWD的最大重點便在於對寬度的控制，避免內容超出寬度，應將高度做擴展將超出內容向下呈現。</p>
                <h2>不要使用固定尺寸</h2>
                <p>在設定寬度高度相關的尺寸樣式時，盡量避免使用絕對單位(ex: px、cm...等等)，改使用相對單位(ex: %、em)</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>拉伸瀏覽器視窗的寬度以查看兩者差異</p>
                    <div>
                        <span style={{ display: "inline-block", width: "1000px", height: "100px", margin: "10px", backgroundColor: "black", color: "red" }}>
                            寬度設置1000px</span>
                        <br />
                        <span style={{ display: "inline-block", width: "75%", height: "100px", margin: "10px", backgroundColor: "black", color: "red" }}>
                            寬度設置75%</span>
                    </div>
                </div>
                <h2>媒體查詢</h2>
                <p>CSS樣式中有一個用於設置與瀏覽器視口相關的條件式的特殊選擇器，符合條件時才執行其CSS聲明內容。</p>
                <p>桌上型電腦：寬度1024px以上</p>
                <p>平板電腦：寬度720px～1024px</p>
                <p>手機：寬度320px～720px</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>拉伸瀏覽器視窗的寬度以查看變化</p>
                    <div>
                        <span className="test"></span>
                    </div>
                </div>
                <code>@media screen and (min-width: 1000px){'{'}</code>
                <code>  .test{'{'}</code>
                <code>      background-color: black;</code>
                <code>  {'}'}</code>
                <code>{'}'}</code>
                <br />
                <code>@media screen and (max-width: 1000px){'{'}</code>
                <code>  .test{'{'}</code>
                <code>      background-color: red;</code>
                <code>  {'}'}</code>
                <code>{'}'}</code>
            </div>
        </div>
    );
}
export default CSSRWD;