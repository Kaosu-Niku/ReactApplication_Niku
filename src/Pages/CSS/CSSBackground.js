import React from 'react';

function CSSBackground(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div class="flex content-div">
                <h1>背景(Background)</h1>
                <p>跟背景有關的特性</p>
                <h3>background-color</h3>
                <p>背景顏色(填滿整個border包含的範圍)</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "red" }}></span>
                        <span style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "green" }}></span>
                        <span style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "blue" }}></span>
                    </div>
                </div>
                <h3>opacity</h3>
                <p>透明度</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "black", opacity: "75%" }}></span>
                        <span
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "black", opacity: "50%" }}></span>
                        <span
                            style={{ display: "inline-block", width: "100px", height: "100px", backgroundColor: "black", opacity: "25%" }}></span>
                    </div>
                </div>
                <h3>background-image</h3>
                <p>背景嵌入圖片</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <div
                            style={{ display: "inline-block", width: "250px", height: "250px", backgroundImage: "url(/Asset/Image/Icon.png)" }}>
                            ABCDEFGHIJKLMNOPQR STUVWXYZ</div>
                    </div>
                </div>
            </div>
            <div class="flex content-div">
                <h1>background-repeat</h1>
                <p>背景圖片的延伸填滿設定</p>
                <h3>no-repeat</h3>
                <p>不填滿</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "600px", height: "300px", backgroundImage: "url(/Asset/Image/Icon.png)", borderStyle: "solid", backgroundRepeat: "no-repeat" }}>
                        </span>
                    </div>
                </div>
                <h3>repeat</h3>
                <p>填滿</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "600px", height: "300px", backgroundImage: "url(/Asset/Image/Icon.png)", borderStyle: "solid", backgroundRepeat: "repeat" }}>
                        </span>
                    </div>
                </div>
                <h3>round</h3>
                <p>圖片自動拉伸以適應</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "600px", height: "300px", backgroundImage: "url(/Asset/Image/Icon.png)", borderStyle: "solid", backgroundRepeat: "round" }}>
                        </span>
                    </div>
                </div>
                <h3>space</h3>
                <p>圖片保持比例，其餘位置留空</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ display: "inline-block", width: "600px", height: "300px", backgroundImage: "url(/Asset/Image/Icon.png)", borderStyle: "solid", backgroundRepeat: "space" }}>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CSSBackground;