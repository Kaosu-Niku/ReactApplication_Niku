import React from 'react';

function JavaScriptWindowHistory(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>history</h1>
                <p>window.history包含歷史紀錄的相關資訊</p>
                <p>(瀏覽器所附帶的上一頁、下一頁、重新整理功能的UI按紐，運作原理其實是透過讀取歷史紀錄取得瀏覽網頁的順序並以此來操作網頁重定向)</p>
                <h2>property</h2>
                <h3>history.length</h3>
                <p>返回歷史紀錄的長度</p>
                <output>{`${window.history.length}`}</output>
                <h2>function</h2>
                <h3>history.back()</h3>
                <p>重定向至上一筆歷史紀錄的網頁 (等同於按上一頁)</p>
                <div className="function-div">
                    <button onClick={() => { window.history.back(); }}>back</button>
                </div>
                <h3>history.forward()</h3>
                <p>重定向至下一筆歷史紀錄的網頁 (等同於按下一頁)</p>
                <div className="function-div">
                    <button onClick={() => { window.history.forward(); }}>forward</button>
                </div>
                <h3>history.go(index:number)</h3>
                <p>重定向至指定數目的歷史紀錄的網頁</p>
                <p>(-1等同於按上一頁，1等同於按下一頁，0等同於按重新整理，以此類推，-3等同於按三次上一頁)</p>
            </div>
        </div>
    );
}
export default JavaScriptWindowHistory;