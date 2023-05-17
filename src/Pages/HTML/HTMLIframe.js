import React from 'react';

function HTMLIframe(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Iframe</h1>
                <p>Iframe用於在HTML文件內再嵌入一個HTML文件內容。</p>
                <p>使用src屬性指定要嵌入的網頁URL。</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處示範嵌入Home首頁</p>
                    <div>
                        <iframe src="/" title=" " style={{ width: "100%", height: "500px" }}>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HTMLIframe;