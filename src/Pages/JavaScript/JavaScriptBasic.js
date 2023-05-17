import React from 'react';

function JavaScriptBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>JavaScript是什麼</h1>
                <p>JavaScript是用於獲取網頁DOM(document)和瀏覽器資訊(window)並修改以達成網頁的動態和互動效果目的的直譯式語言。</p>
                <p>JavaScript文件通常透過HTML文件調用來執行(為了獲取HTML文件的DOM)</p>
            </div>
            <div className="flex content-div">
                <h1>HTML文件連結JS文件</h1>
                <p>於HTML文件中添加下列程式碼。</p>
                <code>&lt;script src="JS文件URL"&gt;&lt;/script&gt;</code>
            </div>
            <div className="flex content-div">
                <h1>異步執行JS文件</h1>
                <p>預設情況下HTML文件在連結JS文件時，是採取同步執行。</p>
                <p>HTML文件在執行JS文件時會暫停自身並等待JS文件的所有內容執行完畢時，HTML文件才會繼續往下執行。</p>
                <p>若是需要JS文件採取異步執行，&lt;script&gt;使用async屬性。</p>
                <p>(異步執行JS文件可能導致執行順序的問題，建議對&lt;body&gt;添加load事件監聽，load事件會在&lt;body&gt;內的所有元素加載完畢後才觸發)</p>
            </div>
        </div>
    );
}
export default JavaScriptBasic;