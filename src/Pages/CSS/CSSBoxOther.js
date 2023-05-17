import React from 'react';

function CSSBoxOther(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>其他(Other)</h1>
                <p>此處介紹其他未分類的特性</p>
            </div>
            <div className="flex content-div">
                <h1>overflow</h1>
                <p>內容溢出的設定。</p>
                <h3>visible</h3>
                <p>溢出內容直接超出顯示</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ display: "inline-block", width: "200px", height: "50px", borderStyle: "solid", overflow: "visible" }}>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    </div>
                </div>
                <h3>hidden</h3>
                <p>將溢出內容隱藏</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ display: "inline-block", width: "200px", height: "50px", borderStyle: "solid", overflow: "hidden" }}>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    </div>
                </div>
                <h3>scroll</h3>
                <p>添加一個窗口，溢出內容需透過滑動條拖拉來查看</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ display: "inline-block", width: "200px", height: "50px", borderStyle: "solid", overflow: "scroll" }}>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    </div>
                </div>
                <h3>auto</h3>
                <p>如果內容有溢出則如同scroll，沒有溢出就正常顯示</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ display: "inline-block", width: "200px", height: "50px", borderStyle: "solid", overflow: "auto" }}>
                            這很短</p>
                        <p style={{ display: "inline-block", width: "200px", height: "50px", borderStyle: "solid", overflow: "auto" }}>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>resize</h1>
                <p>此元素是否可以被使用者任意調整大小</p>
                <p>(需要先將overflow設置為非visible的任意屬性才能運作)</p>
                <h3>horizontal</h3>
                <p>能橫向調整大小</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p
                            style={{ display: "inline-block", width: "200px", borderStyle: "solid", overflow: "auto", resize: "horizontal" }}>
                            horizontal</p>
                    </div>
                </div>
                <h3>vertical</h3>
                <p>能垂直調整大小</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ display: "inline-block", width: "200px", borderStyle: "solid", overflow: "auto", resize: "vertical" }}>
                            vertical</p>
                    </div>
                </div>
                <h3>both</h3>
                <p>兩個方向皆能調整大小</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ display: "inline-block", width: "200px", borderStyle: "solid", overflow: "auto", resize: "both" }}>
                            both</p>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>cursor</h1>
                <p>滑鼠懸浮在該元素上時顯示的圖示</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "none" }}>
                            none</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "default" }}>
                            default</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "auto" }}>
                            auto</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "help" }}>
                            help</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "copy" }}>
                            copy</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "alias" }}>
                            alias</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "progress" }}>
                            progress</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "wait" }}>
                            wait</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "text" }}>
                            text</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "vertical-text" }}>
                            vertical-text</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "pointer" }}>
                            pointer</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "grab" }}>
                            grab</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "grabbing" }}>
                            grabbing</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "move" }}>
                            move</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "all-scroll" }}>
                            all-scroll</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "cell" }}>
                            cell</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "crosshair" }}>
                            crosshair</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "zoom-in" }}>
                            zoom-in</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "zoom-out" }}>
                            zoom-out</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "no-drop" }}>
                            no-drop</p>
                        <p
                            style={{ display: "inline-block", width: "100px", height: "100px", borderStyle: "solid", textAlign: "center", cursor: "not-allowed" }}>
                            not-allowed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CSSBoxOther;