import React from 'react';

function CSSBoxModel(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>盒模型(Box Model)</h1>
                <p>所有置於&lt;body&gt;內的HTML元素都擁有一個盒模型，盒模型代表了該元素在網頁上所使用的空間。</p>
                <p>每個盒模型預設的構造由四個部分組成，由內到外一層一層分別是，content、padding、border、margin。</p>
                <p>content是中間內容所佔的空間。</p>
                <p>padding是填充空間，包覆content外圍的空間。</p>
                <p>border是邊框，包覆padding最外圍的線條。</p>
                <p>margin是邊界，包覆border外圍的空間，預設情況下兩個元素的margin最外圍是緊貼的。</p>
            </div>
            <div className="flex content-div">
                <h1>Content</h1>
                <h3>width</h3>
                <p>內容空間的寬度</p>
                <h3>height</h3>
                <p>內容空間的高度</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ width: "500px", height: "100px", borderStyle: "solid", display: "inline-block" }}>
                            寬度設置500px、高度設置100px</span>
                    </div>
                </div>
                <h3>max-width</h3>
                <p>內容空間的最大寬度(內容超過該範圍預設會顯示滑動條可滑動移動範圍)</p>
                <h3>max-height</h3>
                <p>內容空間的最大高度(內容超過該範圍預設會顯示滑動條可滑動移動範圍)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ maxWidth: "500px", borderStyle: "solid", display: "inline-block" }}>
                            最大寬度設置500px、但是內容的文字超出了這個寬度，在此處的情況是會換行。</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>Padding</h1>
                <h3>padding-top</h3>
                <p>填充空間上方的寬度</p>
                <h3>padding-botton</h3>
                <p>填充空間下方的寬度</p>
                <h3>padding-left</h3>
                <p>填充空間左方的寬度</p>
                <h3>padding-right</h3>
                <p>填充空間右方的寬度</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ paddingTop: "20px", paddingLeft: "40px", borderStyle: "solid" }}>
                            上方設置20px、左方設置40px</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>Border</h1>
                <h3>border-style</h3>
                <p>邊框的樣式(需設置該特性才能顯示邊框)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ borderStyle: "dashed", display: "inline-block", width: "150px" }}>dashed</span>
                        <span style={{ borderStyle: "dotted", display: "inline-block", width: "150px" }}>dotted</span>
                        <span style={{ borderStyle: "double", display: "inline-block", width: "150px" }}>double</span>
                        <span style={{ borderStyle: "groove", display: "inline-block", width: "150px" }}>groove</span>
                        <span style={{ borderStyle: "inset", display: "inline-block", width: "150px" }}>inset</span>
                        <span style={{ borderStyle: "outset", display: "inline-block", width: "150px" }}>outset</span>
                        <span style={{ borderStyle: "ridge", display: "inline-block", width: "150px" }}>ridge</span>
                        <span style={{ borderStyle: "solid", display: "inline-block", width: "150px" }}>solid</span>
                    </div>
                </div>
                <h3>border-width</h3>
                <p>邊框的粗細(四方位都可以指定)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span
                            style={{ borderStyle: "solid", borderLeftWidth: "4px", borderTopWidth: "8px", borderRightWidth: "12px", borderBottomWidth: "16px" }}>
                            左方設置4px、上方設置8px、右方設置12px、下方設置16px</span>
                    </div>
                </div>
                <h3>border-radius</h3>
                <p>邊框的頂點設置為圓角</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ borderStyle: "solid", borderRadius: "5px", padding: "5px" }}>設置5px</span>
                        <span style={{ borderStyle: "solid", borderRadius: "10px", padding: "5px" }}>設置10px</span>
                    </div>
                </div>
                <h3>border-color</h3>
                <p>邊框的顏色</p>
            </div>
            <div className="flex content-div">
                <h1>Margin</h1>
                <p>(兩個元素之間的margin邊緣預設是緊鄰的)</p>
                <h3>margin-top</h3>
                <p>邊界上方的寬度</p>
                <h3>margin-botton</h3>
                <p>邊界下方的寬度</p>
                <h3>margin-left</h3>
                <p>邊界左方的寬度</p>
                <h3>margin-right</h3>
                <p>邊界右方的寬度</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ marginRight: "0", borderStyle: "solid" }} >設置0px</span>
                        <span style={{ marginLeft: "20px", marginRight: "40px", borderStyle: "solid" }}>左方設置20px、右方設置40px</span>
                        <span style={{ marginLeft: "0", borderStyle: "solid" }}>設置0px</span>
                    </div>
                </div>
            </div >
            <div className="flex content-div">
                <h1>Outline</h1>
                <p>額外的輪廓線線條，其位置是參考border的位置，輪廓線沒有方位之分。</p>
                <h3>outline-style</h3>
                <p>輪廓線的樣式(需設置該特性才能顯示輪廓線)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ outlineStyle: "dashed", display: "inline-block", width: "150px" }}>dashed</span>
                        <span style={{ outlineStyle: "dotted", display: "inline-block", width: "150px" }}>dotted</span>
                        <span style={{ outlineStyle: "double", display: "inline-block", width: "150px" }}>double</span>
                        <span style={{ outlineStyle: "groove", display: "inline-block", width: "150px" }}>groove</span>
                        <span style={{ outlineStyle: "inset", display: "inline-block", width: "150px" }}>inset</span>
                        <span style={{ outlineStyle: "outset", display: "inline-block", width: "150px" }}>outset</span>
                        <span style={{ outlineStyle: "ridge", display: "inline-block", width: "150px" }}>ridge</span>
                        <span style={{ outlineStyle: "solid", display: "inline-block", width: "150px" }}>solid</span>
                    </div>
                </div>
                <h3>outline-width</h3>
                <p>輪廓線的粗細</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ outlineStyle: "solid", outlineWidth: "2px" }}>設置2px</span>
                        <span style={{ display: "inline-block", width: "50px" }}></span>
                        <span style={{ outlineStyle: "solid", outlineWidth: "5px" }} >設置5px</span>
                    </div>
                </div>
                <h3>outline-offset</h3>
                <p>輪廓線和邊框之間的距離</p>
                <p>此處範例需要border展示效果，以虛線框展示border的範圍</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ outlineStyle: "solid", outlineOffset: "2px", borderStyle: "dashed" }}>設置2px</span>
                        <span style={{ display: "inline-block", width: "50px" }}></span>
                        <span style={{ outlineStyle: "solid", outlineOffset: "5px", borderStyle: "dashed" }}>設置5px</span>
                    </div>
                </div>
                <h3>outline-color</h3>
                <p>輪廓線的顏色</p>
            </div>
        </div >
    );
}
export default CSSBoxModel;