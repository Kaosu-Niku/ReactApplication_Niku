import React from 'react';

function CSSText(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div class="flex content-div">
                <h1>文字(Text)</h1>
                <h3>color</h3>
                <p>內容文字的顏色</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ color: "red" }}>color: red</p>
                        <p style={{ color: "green" }}>color: green</p>
                        <p style={{ color: "blue" }}>color: blue</p>
                    </div>
                </div>
                <h3>text-align</h3>
                <p>文字的水平對齊設定</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ display: "inline-block", width: "250px", borderStyle: "solid", textAlign: "start" }}>
                            text-align: start</p>
                        <p style={{ display: "inline-block", width: "250px", borderStyle: "solid", textAlign: "center" }}>
                            text-align: center</p>
                        <p style={{ display: "inline-block", width: "250px", borderStyle: "solid", textAlign: "end" }}>
                            text-align: end</p>
                    </div>
                </div>
                <h3>text-indent</h3>
                <p>首行的縮排距離</p>
                <h3>letter-spacing</h3>
                <p>文字間距</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p>間距1px</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", letterSpacing: "1px" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>間距3px</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", letterSpacing: "3px" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                    </div>
                </div>
                <h3>word-spacing</h3>
                <p>單字間距(用空格隔開來辨別單字)</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p>間距1px</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", wordSpacing: "1px" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>間距5px</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", wordSpacing: "5px" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                    </div>
                </div>
                <h3>line-height</h3>
                <p>行距</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p>間距20px</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", lineHeight: "20px" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>間距40px</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", lineHeight: "40px" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                    </div>
                </div>
                <h3>white-space</h3>
                <p>對空白字元的的處理設定</p>
                <h3>word-break</h3>
                <p>文字到行尾的設定</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p>normal (不會切斷)</p>
                        <p style={{ display: "inline-block", width: "40%", borderStyle: "solid", wordBreak: "normal" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>break-all (會切斷)</p>
                        <p style={{ display: "inline-block", width: "40%", borderStyle: "solid", wordBreak: "break-all" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                    </div>
                </div>
                <h3>text-transform</h3>
                <p>英文字母的大小寫設定</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p>lowercase (全字母小寫)</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", textTransform: "lowercase" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>uppercase (全字母大寫)</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", textTransform: "uppercase" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>capitalize (全單字字首大寫)</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", textTransform: "capitalize" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                    </div>
                </div>
                <h3>user-select</h3>
                <p>設置文字是否可以被滑鼠框選</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p>none (不能框選)</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", userSelect: "none" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>contain (必須經由滑鼠拖拉框選經拖拉過的內容)</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", userSelect: "contain" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                        <p>all (直接選取全部內容)</p>
                        <p style={{ display: "inline-block", width: "50%", borderStyle: "solid", userSelect: "all" }}>
                            I am the storm that is approaching. Provoking black clouds in isolation. I am reclaimer of my name.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex content-div">
                <h1>文字裝飾線(Text Decoration)</h1>
                <h3>text-decoration-line</h3>
                <p>裝飾線的類型</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ textDecorationLine: "line-through" }}>text-decoration-line: line-through</p>
                        <p style={{ textDecorationLine: "overline" }}>text-decoration-line: overline</p>
                        <p style={{ textDecorationLine: "underline" }}>text-decoration-line: underline</p>
                    </div>
                </div>
                <h3>text-decoration-style</h3>
                <p>裝飾線的樣式</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ textDecorationLine: "underline", textDecorationStyle: "dashed" }}>
                            text-decoration-style: dashed</p>
                        <p style={{ textDecorationLine: "underline", textDecorationStyle: "dotted" }}>
                            text-decoration-style: dotted</p>
                        <p style={{ textDecorationLine: "underline", textDecorationStyle: "double" }}>
                            text-decoration-style: double</p>
                        <p style={{ textDecorationLine: "underline", textDecorationStyle: "solid" }}>
                            text-decoration-style: solid</p>
                    </div>
                </div>
                <h3>text-decoration-thickness</h3>
                <p>裝飾線的粗細</p>
                <h3>text-decoration-color</h3>
                <p>裝飾線的顏色</p>
            </div>
            <div class="flex content-div">
                <h1>文字陰影(Text Shadow)</h1>
                <h3>text-shadow</h3>
                <p>文字的陰影設定(一次設置四個值，分別對應:橫向偏移、垂直偏移、模糊程度、顏色)</p>
                <div class="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ textShadow: "2px 2px 1px red" }}>text-shadow:2px 2px 1px red</p>
                        <p style={{ textShadow: "5px 5px 3px red" }}>text-shadow:5px 5px 3px red</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CSSText;