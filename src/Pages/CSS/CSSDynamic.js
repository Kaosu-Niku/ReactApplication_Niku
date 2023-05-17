import React from 'react';
import './CSSDynamic.css';

function CSSDynamic(props) {
    let transitionTimingFunctionCheck = true;
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>動態(Dynamic)</h1>
                <p>CSS除了調整網頁大部分的靜態部分，也可以處理動態部分。</p>
                <p>分成三種方式，transform、transition、animation。</p>
            </div>
            <div className="flex content-div">
                <h1>transform</h1>
                <p>transform用於控制HTML元素本身的位移旋轉縮放。</p>
                <p>開啟網頁後自動運行，無法透過事件調用，無法編輯keyframe。</p>
                <p>且由於是直接控制HTML元素，所以較損耗效能。這方面也需要斟酌。</p>
                <h3>translate</h3>
                <p>控制元素的位移</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transform: "translate(250px, 0)" }}></span>
                    </div>
                </div>
                <h3>rotate</h3>
                <p>控制元素的旋轉</p>
                <p>(需要加上角度單位deg)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transform: "rotate(45deg)" }}></span>
                    </div>
                </div>
                <h3>scale</h3>
                <p>控制元素的縮放</p>
                <p></p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transform: "scale(1.5, 1)" }}></span>
                    </div>
                </div>
                <h3>skew</h3>
                <p>控制元素的傾斜</p>
                <p>(需要加上角度單位deg)</p>
                <p></p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transform: "skew(45deg)" }}></span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>transition</h1>
                <p>transition用於控制HTML元素的動態過渡，CSS所設置的特性都是開啟網頁立即見到的靜態效果，透過transition可以控制動態過渡。</p>
                <p>無法自動運行需透過事件調用來運行，無法編輯keyframe。</p>
                <p>(以下範例皆使用hover事件(滑鼠懸停在此元素上))</p>
                <h3>transition-duration</h3>
                <p>完成過渡的總時長(單位s=秒)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span className="duration1"
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red" }}>1秒</span>
                        <br />
                        <span className="duration2"
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red" }}>3秒</span>
                    </div>
                </div>
                <h3>transition-timing-function</h3>
                <p>過渡的速度曲線設定</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <button id="timingFunctionButton" style={{ width: "250px" }} onClick={() => {
                            let d = document.querySelectorAll(".timing-function");
                            if (transitionTimingFunctionCheck === true) {
                                d.forEach((value, key) => {
                                    let a = value.getAttribute("style");
                                    value.setAttribute("style", a + "transform: translate(500px); transition-duration: 3s;");
                                });
                            }
                            else {
                                d.forEach((value, key) => {
                                    let a = value.getAttribute("style");
                                    value.setAttribute("style", a + "transform: translate(0px); transition-duration: 3s;");
                                });
                            }
                            transitionTimingFunctionCheck = !transitionTimingFunctionCheck;
                        }}>按下按鈕測試過渡速度曲線</button>
                        <br />
                        <div style={{ display: "inline-block", width: "600px", borderStyle: "solid" }}>
                            <span className="timing-function"
                                style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transitionTimingFunction: "ease" }}>ease</span>
                            <br />
                            <span className="timing-function"
                                style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transitionTimingFunction: "ease-in" }}>ease-in</span>
                            <br />
                            <span className="timing-function"
                                style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transitionTimingFunction: "ease-in-out" }}>ease-in-out</span>
                            <br />
                            <span className="timing-function"
                                style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transitionTimingFunction: "ease-out" }}>ease-out</span>
                            <br />
                            <span className="timing-function"
                                style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", transitionTimingFunction: "linear" }}>linear</span>
                        </div>
                    </div>
                </div>
                <h3>transition-delay</h3>
                <p>延遲指定秒數後執行(單位s=秒)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span className="delay1"
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red" }}>1秒</span>
                        <br />
                        <span className="delay2"
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red" }}>3秒</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>animation</h1>
                <p>animation相當於進階版的transition，可以更精細的控制動態效果。</p>
                <p>開啟網頁後自動運行，也可以透過事件調用，可以編輯keyframe。</p>
                <h3>animation-duration</h3>
                <p>完成播放的總時長(單位s=秒)</p>
                <h3>animation-timing-function</h3>
                <p>動畫播放的速度曲線設定</p>
                <h3>animation-delay</h3>
                <p>延遲指定秒數後播放(單位s=秒)</p>
                <h3>@keyframes customAnimationName</h3>
                <p>此為特殊選擇器，用於創建動畫，聲明塊其中需包含ketframe相關特性(動畫名稱自取)</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>%數代表了依動畫比例取的關鍵幀，例如一個2秒的動畫，50%就代表1秒，100%就代表2秒</p>
                </div>
                <code>@keyframes myAnimation1 {"{"}</code>
                <code>    0% {"{"}</code>
                <code>        background- color: red;</code>
                <code>    {"}"}</code>
                <code>    50% {"{"}</code>
                <code>        transform: translate(500px);</code>
                <code>        background-color: green;</code>
                <code>    {"}"}</code>
                <code>    100% {"{"}</code>
                <code>        transform: translate(0);</code>
                <code>        background-color: red;</code>
                <code>    {"}"}</code>
                <code>{"}"}</code>
                <h3>animation-name</h3>
                <p>播放指定名稱的動畫</p>
                <div className="example">
                    <h4>範例</h4>
                    <span className="animation-name"
                        style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red" }}></span>
                </div>
                <h3>animation-iteration-count</h3>
                <p>動畫播放的次數</p>
                <p>(設定值為infinite會無限播放動畫)</p>
                <h3>animation-fill-mode</h3>
                <p>動畫播放完的狀態設定</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>播放完畢時將保持最後一幀的狀態</p>
                    <span className="fill-mode"
                        style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", animationFillMode: "forwards" }}>forwards</span>
                    <p>播放完畢時將復原到第一幀的狀態</p>
                    <span className="fill-mode"
                        style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red", animationFillMode: "backwards" }}>backwards</span>
                </div>
            </div>
        </div>
    );
}
export default CSSDynamic;