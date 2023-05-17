import React from 'react';

function HTMLList(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>列表元素</h1>
            </div>
            <div className="flex content-div">
                <h1>dl</h1>
                <p>基本列表結構，屬於最基本的列表，可用屬性較少。</p>
                <h3>dt</h3>
                <p>設置基本列表的標題。</p>
                <h3>dd</h3>
                <p>基本列表添加一筆內容。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <dl>
                            <dt>基本列表標題</dt>
                            <dd>基本列表內容1</dd>
                            <dd>基本列表內容2</dd>
                            <dd>基本列表內容3</dd>
                        </dl>
                        <style>
                            {
                                "dl { border-style: solid; }"
                            }
                            {
                                "dt { border-style: double; }"
                            }
                            {
                                "dd { border-style: dashed; }"
                            }
                        </style>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>ul</h1>
                <p>無序列表結構，列表的前方會有標記圖示，標記圖示都是一樣的圖形。</p>
                <h3>li</h3>
                <p>無序列表添加一筆內容。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul>
                            <li>無序列表內容1</li>
                            <li>無序列表內容2</li>
                            <li>無序列表內容3</li>
                        </ul>
                        <style>
                            {
                                "ul { border-style: solid; }"
                            }
                            {
                                "li { border-style: dashed; }"
                            }
                        </style>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>ol</h1>
                <p>有序列表結構，列表的前方會有標記圖示，標記圖示是具有排序性的字符。</p>
                <h3>li</h3>
                <p>有序列表添加一筆內容。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ol>
                            <li>有序列表內容1</li>
                            <li>有序列表內容2</li>
                            <li>有序列表內容3</li>
                        </ol>
                        <style>
                            {
                                "ol { border-style: solid; }"
                            }
                            {
                                "li { border-style: dashed; }"
                            }
                        </style>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HTMLList;