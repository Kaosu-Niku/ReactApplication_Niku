import React from 'react';

function HTMLObject(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Object</h1>
                <p>Object用於嵌入特定格式的資源。</p>
                <p>使用data屬性指定要嵌入的資源。</p>
                <p>使用type屬性設置嵌入資源的資料格式(MIME Type)</p>
                <a href="https://zh.wikipedia.org/zh-tw/%E4%BA%92%E8%81%94%E7%BD%91%E5%AA%92%E4%BD%93%E7%B1%BB%E5%9E%8B#媒体类型列表"
                    target="_blank">MIME Type 參考網址</a>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處示範嵌入Json檔</p>
                    <div>
                        <object data="/Asset/Json/Test.json" type="application/json">
                        </object>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HTMLObject;