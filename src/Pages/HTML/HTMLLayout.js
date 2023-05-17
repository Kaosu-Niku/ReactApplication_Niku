import React from 'react';

function HTMLLayout(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>佈局元素</h1>
                <p>佈局元素用來分配網頁的整體佈局(但這些基本上不用也沒關係)。</p>
                <h3>header</h3>
                <p>開頭內容。</p>
                <h3>nav</h3>
                <p>導航分類條目內容。</p>
                <h3>main</h3>
                <p>核心主體內容。</p>
                <h3>article</h3>
                <p>如文章或新聞等等重複出現且獨立的內容。</p>
                <h3>aside</h3>
                <p>與主內容較無關的非重點內容。</p>
                <h3>footer</h3>
                <p>結尾內容。</p>
                <h3>section</h3>
                <p>其餘內容(沒有其它適合使用的元素時才使用這個)。</p>
            </div>
        </div>
    );
}
export default HTMLLayout;