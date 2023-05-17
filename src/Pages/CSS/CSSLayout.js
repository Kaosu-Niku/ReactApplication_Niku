import React from 'react';

function CSSLayout(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>佈局(Layout)</h1>
                <p>所有置於&ltbody&gt內的HTML元素都擁有一個佈局類型，佈局類型預設有兩種類型，區塊元素(block)和行內元素(inline)。</p>
                <p>區塊元素總是佔滿一行，並推開相鄰元素至上下行。</p>
                <p>行內元素只佔滿中間內容所佔的空間，行內元素之間是緊貼的。</p>
                <p>使用CSS的display特性可以設置佈局類型。</p>
            </div>
            <div className="flex content-div">
                <h1>Display</h1>
                <h3>inline</h3>
                <p>設置為行內元素</p>
                <h3>block</h3>
                <p>設置為區塊元素</p>
                <h3>flex</h3>
                <p>設置為彈性盒元素</p>
                <h3>grid</h3>
                <p>設置為網格元素</p>
                <h3>table</h3>
                <p>元素表現的像&lttable&gt</p>
                <h3>list-item</h3>
                <p>元素表現的像&ltli&gt</p>
                <h3>none</h3>
                <p>元素移除渲染</p>
                <h3>inherit</h3>
                <p>從父元素繼承</p>
                <div className="example">
                    <h4>範例</h4>
                    <div style={{ borderStyle: "solid" }}>區塊元素</div>
                    <div style={{ borderStyle: "solid" }}>區塊元素</div>
                    <span style={{ borderStyle: "solid" }}>行內元素</span>
                    <div style={{ borderStyle: "solid" }}>區塊元素</div>
                    <span style={{ borderStyle: "solid" }}>行內元素</span>
                    <span style={{ borderStyle: "solid" }}>行內元素</span>
                </div>
            </div>
            <div className="flex content-div">
                <h1>位置</h1>
                <p>位置的相關特性在於定位一個位置，而元素根據定位的位置改變與其的相對位置，位置的相關特性是權重最高的特性，容易破壞佈局應盡量少用。</p>
            </div>
            <div className="flex content-div">
                <h1>方位</h1>
                <h3>top</h3>
                <p>與上方的距離</p>
                <h3>botton</h3>
                <p>與下方的距離</p>
                <h3>left</h3>
                <p>與左方的距離</p>
                <h3>right</h3>
                <p>與右方的距離</p>
            </div>
            <div className="flex content-div">
                <h1>position</h1>
                <h3>static</h3>
                <p>預設值，無法使用方位改變位置(其他選項都可以改變位置)</p>

                <div className="example">
                    <h4>範例</h4>
                    <div
                        style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center" }}>
                        static</div>
                </div>
                <h3>relative</h3>
                <p>參考此元素自身的原始位置，可以使用方位改變位置</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>設置left: 100px</p>
                    <div
                        style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", position: "relative", left: "100px" }}>
                        relative</div>
                </div>
                <h3>absolute</h3>
                <p>參考父元素的位置，可以使用方位改變位置</p>
                <p>(需要先將父元素的position設置為非static的任意屬性才能運作)</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處範例需要一個父元素展示效果，以虛線框來展示父元素的位置</p>
                    <p>設置top: 50px、left: 100px</p>
                    <div
                        style={{ display: "inline-block", width: "250px", height: "250px", borderStyle: "dashed", position: "relative" }}>
                        <div
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", position: "absolute", top: "50px", left: "100px" }}>
                            absolute</div>
                    </div>
                </div>
                <h3>fixed</h3>
                <p>參考網頁視窗的位置(不包含上方的瀏覽器工具列)，可以使用方位改變位置，同時不會受到網頁拖動改變位置</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>設置top: 150px、right: 200px</p>
                    <div
                        style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", position: "fixed", top: "150px", right: "300px" }}>
                        fixed</div>
                </div>
                <h3>sticky</h3>
                <p>同時結合relative和fixed的特性，當元素的原始位置進入網頁視窗中時，會如同relative會受到網頁拖動改變位置。</p>
                <p>但是當此元素的原始位置離開網頁視窗時，會如同fixed不會受到網頁拖動改變位置。</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>設置top: 100px</p>
                    <div
                        style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", position: "sticky", top: "100px" }}>
                        sticky</div>
                    <div style={{ display: "inline-block", height: "3000px" }}></div>
                </div>
            </div>
        </div>
    );
}
export default CSSLayout;