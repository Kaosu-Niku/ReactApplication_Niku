import React from 'react';

function CSSBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>CSS是什麼</h1>
                <p>CSS是用來定義HTML文件呈現樣式的級聯樣式表。</p>
                <p>CSS既可節省了大量的HTML文件style屬性定義工作，且達成樣式與內容的分離。</p>
            </div>
            <div className="flex content-div">
                <h1>HTML文件連結CSS文件</h1>
                <p>於HTML文件中添加下列程式碼。</p>
                <code>{'<'}link rel="stylesheet" href="CSS文件URL"{'>'}</code>
            </div>
            <div className="flex content-div">
                <h1>CSS語法(Syntax)</h1>
                <p>一份CSS文件的內容全是由CSS規則組成，一個CSS規則由一個選擇器和一個聲明塊組合。</p>
                <p>選擇器用於根據條件篩選HTML元素，ex: 依元素類型、依ID名稱、依className...等等。</p>
                <p>聲明塊用於包含所有聲明，聲明用於表示對HTML元素所要設置的樣式修改。</p>
                <p>範例: <code>{"p { color:red; }"}</code></p>
                <p>這會將所有p元素的文字顏色轉為紅色。</p>
            </div>
            <div className="flex content-div">
                <h1>CSS語法(Syntax)</h1>
                <p>一份CSS文件的內容全是由CSS規則(rule)組成，一個CSS規則由一個選擇器和一個聲明塊組合。</p>
            </div>
        </div>
    );
}
export default CSSBasic;