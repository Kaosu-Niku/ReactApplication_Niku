import React from 'react';

function JavaScriptWindowLocation(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>location</h1>
                <p>window.location包含網址路徑的相關資訊</p>
                <h2>property</h2>
                <h3>location.href</h3>
                <p>返回該網頁的絕對路徑</p>
                <output>{`${window.location.href}`}</output>
                <h3>location.pathname</h3>
                <p>返回該網頁的請求路徑</p>
                <output>{`${window.location.pathname}`}</output>
                <h3>location.search</h3>
                <p>返回該網頁的請求參數</p>
                <output>{`${window.location.search}`}</output>
                <h3>location.hostname</h3>
                <p>返回該網頁的主機IP</p>
                <output>{`${window.location.hostname}`}</output>
                <h3>location.port</h3>
                <p>返回該網頁的端口號</p>
                <output>{`${window.location.port}`}</output>
                <h2>function</h2>
                <h3>location.reload()</h3>
                <p>重新加載該網頁 (等同於按重新整理)</p>
                <div className="function-div">
                    <button onClick={() => { window.location.reload(); }}>reload</button>
                </div>
                <h3>location.assign(url:string)</h3>
                <p>加載新網頁</p>
                <p>(在新網頁可以按上一頁重定向回到該網頁)</p>
                <div className="function-div">
                    <button onClick={() => { window.location.assign("/"); }}>assign</button>
                </div>
                <h3>location.replace(url:string)</h3>
                <p>加載新網頁</p>
                <p>(和assign不同的點在於，replace加載的新網頁不會留下歷史紀錄)</p>
                <div className="function-div">
                    <button onClick={() => { window.location.replace("/"); }}>replace</button>
                </div>
            </div>
        </div>
    );
}
export default JavaScriptWindowLocation;