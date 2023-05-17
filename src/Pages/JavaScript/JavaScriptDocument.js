import React from 'react';

function JavaScriptDocument(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>document</h1>
                <p>document對象包含了HTML文件DOM的資訊。</p>
                <h2>property</h2>
                <h3>document.cookie</h3>
                <p>返回該網頁的Cookie資訊</p>
                <output>{`${document.cookie}`}</output>
                <h3>document.activeElement</h3>
                <p>返回該網頁處於焦點中的元素</p>
                <output>{`${document.activeElement}`}</output>
                <h3>document.lastModified</h3>
                <p>返回該網頁最後一次被修改的時間</p>
                <output>{`${document.lastModified}`}</output>
                <h2>function</h2>
                <h3>document.querySelector(text:string)</h3>
                <p>以CSS選擇器格式來尋找HTML元素 (只返回一個元素)</p>
                <h3>document.querySelectorAll(text:string)</h3>
                <p>以CSS選擇器格式來尋找HTML元素 (返回所有相符的元素)</p>
                <h3>document.createElement(elementType:string)</h3>
                <p>創建一個指定的HTML元素</p>
                <h3>document.createDocumentFragment(elementType:string)</h3>
                <p>創建一個HTML片段</p>
            </div>
        </div>
    );
}
export default JavaScriptDocument;