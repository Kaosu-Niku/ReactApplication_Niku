import React from 'react';
import './CSSFont.css';

function CSSFont(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div class="flex content-div">
                <h1>字體(Font)</h1>
            </div>
            <div class="flex content-div">
                <h1>font-family</h1>
                <p>設置文字所使用的字體</p>
                <p>預設有五種字體，襯線字體、無襯線字體、等寬字體、草書字體、幻想字體</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ fontFamily: "serif" }}>襯線字體(serif)</p>
                        <p style={{ fontFamily: "sans-serif" }}>無襯線字體(sans-serif)</p>
                        <p style={{ fontFamily: "monospace" }}>等寬字體(monospace)</p>
                        <p style={{ fontFamily: "cursive" }}>草書字體(cursive)</p>
                        <p style={{ fontFamily: "fantasy" }}>幻想字體(fantasy)</p>
                    </div>
                </div>
            </div>
            <div class="flex content-div">
                <h1>@font-face</h1>
                <p>此為特殊選擇器，用於引用自訂字體包，聲明塊其中需包含兩項聲明，font-family 和 src: url()</p>
                <p>font-family 用於為引用的字體包設置引用名稱。src: url() 用於連結字體資源</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ fontFamily: "my-font" }}>This is my custon font.</p>
                    </div>
                </div>
                <code>@font-face {"{"}</code>
                <code>    font-family: my-font;</code>
                <code>    src: url("/Asset/Font/VeganStylePersonalUse-5Y58.ttf");</code>
                <code>{"}"}</code>
            </div>
            <div class="flex content-div">
                <h1>字體設置</h1>
                <h3>font-size</h3>
                <p>字體的大小</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ fontSize: "small" }}>small</p>
                        <p style={{ fontSize: "medium" }}>medium</p>
                        <p style={{ fontSize: "large" }}>large</p>
                        <p style={{ fontSize: "10px" }}>10px</p>
                        <p style={{ fontSize: "20px" }}>20px</p>
                    </div>
                </div>
                <h3>font-weight</h3>
                <p>字體的粗細</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ fontWeight: "lighter" }}>lighter</p>
                        <p style={{ fontWeight: "normal" }}>normal</p>
                        <p style={{ fontWeight: "bold" }}>bold</p>
                        <p style={{ fontWeight: "100" }}>100</p>
                        <p style={{ fontWeight: "500" }}>500</p>
                    </div>
                </div>
                <h3>font-style</h3>
                <p>字體的風格</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ fontStyle: "normal" }}>normal</p>
                        <p style={{ fontStyle: "italic" }}>italic</p>
                        <p style={{ fontStyle: "oblique" }}>oblique</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CSSFont;