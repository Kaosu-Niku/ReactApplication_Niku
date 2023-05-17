import React from 'react';
import { useState } from 'react';

function JavaScriptWindow(props) {
    const [fetchUrl, setFetchUrl] = useState('http://localhost:8080/httpRequestTest');
    const [fetchValue, setFetchValue] = useState(null);
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>window</h1>
                <p>window對象包含了瀏覽器資訊。</p>
                <h2>property</h2>
                <h3>window.self</h3>
                <p>返回該網頁的window對象</p>
                <output>{`${window.self}`}</output>
                <h3>window.parent</h3>
                <p>返回上一頁的window對象 (若沒有上一頁，則等同於window.self)</p>
                <output>{`${window.parent}`}</output>
                <h3>window.top</h3>
                <p>返回最頂層的window對象 (上一頁不能再按為止)</p>
                <output>{`${window.top}`}</output>
                <h3>window.opener</h3>
                <p>如果該網頁是經由 window.open(); 被其他網頁所開啟的，則返回其他網頁的window對象</p>
                <output>{`${window.opener}`}</output>
                <h3>window.frames</h3>
                <p>返回該網頁的所有iframe元素的window對象</p>
                <output>{`${window.frames}`}</output>
                <h3>window.outerWidth</h3>
                <p>返回瀏覽器的整體視窗寬度</p>
                <output>{`${window.outerWidth}`}</output>
                <h3>window.outerHeight</h3>
                <p>返回瀏覽器的整體視窗高度</p>
                <output>{`${window.outerHeight}`}</output>
                <h3>window.innerWidth</h3>
                <p>返回瀏覽器的內容視窗寬度(白色部分)</p>
                <output>{`${window.innerWidth}`}</output>
                <h3>window.innerHeight</h3>
                <p>返回瀏覽器的內容視窗高度(白色部分)</p>
                <output>{`${window.innerHeight}`}</output>
                <h3>window.screen</h3>
                <p>包含螢幕視窗的相關資訊</p>
                <output>{`${window.screen}`}</output>
                <h3>window.histroy</h3>
                <p>包含歷史紀錄的相關資訊</p>
                <output>{`${window.histroy}`}</output>
                <h3>window.location</h3>
                <p>包含網址路徑的相關資訊</p>
                <output>{`${window.location}`}</output>
                <h3>window.navigator</h3>
                <p>包含用戶端的相關資訊</p>
                <output>{`${window.navigator}`}</output>
                <h2>function</h2>
                <h3>window.open(url:string)</h3>
                <p>於新分頁開啟新網頁</p>
                <div className="function-div">
                    <button onClick={() => { window.open("/"); }}>open</button>
                </div>
                <h3>window.close()</h3>
                <p>關閉該網頁</p>
                <div className="function-div">
                    <button onClick={() => { window.close(); }}>close</button>
                </div>
                <h3>window.confirm(text:string)</h3>
                <p>顯示確認視窗</p>
                <div className="function-div">
                    <button onClick={() => { window.confirm("請確認或關閉"); }}>confirm</button>
                </div>
                <h3>window.alert(text:string)</h3>
                <p>顯示警告視窗</p>
                <div className="function-div">
                    <button onClick={() => { window.alert("這是一則警告訊息"); }}>alert</button>
                </div>
                <h3>window.prompt(text:string)</h3>
                <p>顯示輸入視窗</p>
                <div className="function-div">
                    <button onClick={() => { window.prompt("請輸入訊息"); }}>prompt</button>
                </div>
                <h3>window.print()</h3>
                <p>顯示列印視窗</p>
                <div className="function-div">
                    <button onClick={() => { window.print(); }}>print</button>
                </div>
                <h3>window.setTimeout(foo:function, time:number)</h3>
                <p>過了指定時間後執行函式 (時間單位:毫秒)</p>
                <h3>window.clearTimeout(index:number)</h3>
                <p>停止指定的setTimeout()函式</p>
                <div className="function-div">
                    <h4>(按下按鈕的三秒後會顯示一則訊息)</h4>
                    <p id="setTimeout-p" hidden>Hellooooooooooooooooo!</p>
                    <button onClick={() => { setTimeout(() => { document.querySelector("#setTimeout-p").removeAttribute("hidden"); }, 3000); }}>setTimeout</button>
                </div>
                <h3>window.setInterval(foo:function, time:number)</h3>
                <p>每過一次指定時間執行一次函式 (時間單位:毫秒)</p>
                <h3>window.clearInterval(index:number)</h3>
                <p>停止指定的setInterval()函式</p>
                <div className="function-div">
                    <h4>(每秒刷新一次)</h4>
                    <p id="setInterval-p">0</p>
                    <button onClick={() => {
                        let t = 0
                        const setIntervalP = document.querySelector("#setInterval-p");
                        setInterval(() => { t++; setIntervalP.textContent = t; }, 1000);
                    }}>setInterval</button>
                </div>
                <h3>fetch(url:string, options:object)</h3>
                <p>發送HTTP請求至指定的網址，此為非同步函式，回傳一個response物件，透過response可獲取資料。</p>
                <p>參數options具有可選選項，可對該請求做更詳細的設置，<a href='https://developer.mozilla.org/en-US/docs/Web/API/fetch#options'>options參考</a></p>
                <div className="function-div">
                    <h4>(輸入欄輸入任意url後，按下按鈕後以GET請求獲取數據(預設數據為json格式)，輸出欄顯示獲取的JSON數據)</h4>
                    <span>請輸入任意url:</span>
                    <input id="fetch-input" onChange={(event) => { setFetchUrl(event.target.value); }}></input>
                    <h4>(若輸入欄為空值，則默認請求路徑為 /httpRequestTest )</h4>
                    <output id="fetch-output">{`{ ${fetchValue} }`}</output>
                    <br />
                    <button onClick={() => {
                        async function fetchTest() {
                            let response;
                            if (fetchUrl !== undefined)
                                response = await fetch(fetchUrl);
                            else
                                response = await fetch('http://localhost:8080/httpRequestTest');
                            let jsonData = await response.json();
                            return jsonData;
                        }
                        fetchTest().then((result) => {
                            let jsonString = null;
                            for (let key in result) {
                                if (jsonString === null)
                                    jsonString = `${key}:${result[key]}, `;
                                else
                                    jsonString += `${key}:${result[key]}, `;
                            }
                            setFetchValue(jsonString);
                        });
                    }}>fetch</button>
                </div>
            </div>
        </div>
    );
}
export default JavaScriptWindow;