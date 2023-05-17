import React from 'react';
import { useState } from 'react';

function HTMLForms(props) {
    const [stateTypeText, setStateTypeText] = useState(null);
    const [stateTypeNumber, setStateTypeNumber] = useState(null);
    const [stateTypeEmail, setStateTypeEmail] = useState(null);
    const [stateTypePassword, setStateTypePassword] = useState(null);
    const [stateTypeFile, setStateTypeFile] = useState(null);
    const [stateTypeDatetime, setStateTypeDatetime] = useState(null);
    const [stateTypeColor, setStateTypeColor] = useState(null);
    const [stateTypeRadio, setStateTypeRadio] = useState(null);
    const [stateTypeCheckbox, setStateTypeCheckbox] = useState(null);
    const [stateTypeRange, setStateTypeRange] = useState(null);
    const [stateButton, setStateButton] = useState(null);
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Forms</h1>
            </div>
            <div className="flex content-div">
                <h1>form</h1>
                <p>建立表單。</p>
                <h3>method</h3>
                <p>method屬性設置表單提交所使用的HTTP請求(預設是GET)。</p>
                <h3>action</h3>
                <p>action屬性設置表單提交的網址(附加在網址上)</p>
                <h3>autocomplete</h3>
                <p>autocomplete屬性設置表單是否要記錄提交的數據，並於下次填寫表單時自動填入紀錄的數據。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <form method="get" action="/FormTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <button type="submit">提交</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>HTTP Request</h1>
                <p>HTTP請求是HTTP協議裡的一項傳輸標準，具有多種請求方式。</p>
                <p>在網頁上主要使用GET和POST請求，並以表單作為發送請求的媒介。</p>
                <p>一個HTTP請求由Header和Body組成。</p>
                <h3>HTTP Header</h3>
                <p>HTTP頭欄位含有關於該請求的所有資訊，有些資訊自發送請求時就自動包含，有些資訊需經過設置後才有，以下舉例幾種常見的資訊。</p>
                <p>(ex: Date發送日期、from使用者郵件地址、Content-Type請求體的檔案類型)</p>
                <h3>HTTP Body</h3>
                <p>HTTP請求體含有實際發送的數據資料，請求體有幾種發送格式，</p>
                <p>網頁表單所採用的發送格式是 application/x-www-form-urlencoded 和 multipart/form-data</p>
                <p>application/x-www-form-urlencoded是預設發送格式，資料格式以key:value來表示。</p>
                <p>multipart/form-data需要將表單設置Content-Type屬性設為multipart/form-data，用於發送二進制數據，因為用預設格式發送二進制數據的效能不好。</p>
                <h3>GET</h3>
                <p>GET主要用於從伺服器端獲取資料，GET發送請求時不帶有HTTP請求體，而是直接將資料提交至網址上，網址以QueryString的格式來呈現GET的資料。</p>
                <p>以該網址為例 http://xxx.com/example?data1=123&data2=hello</p>
                <p>?之後的字串就是GET所提交的所有資料，以key=value來表示每筆資料，每筆資料之間以&隔開。</p>
                <p>(網址不能含有空格，空格會自動轉換為%20)</p>
                <p>GET只需要解析字串就能取得資料較為方便，但網址有其限制字數所以GET發送的資料大小也會受限制。</p>
                <p>安全性也較危險，資料置於網址上非常容易被竊取，而且網址會留下歷史紀錄還可以被書籤紀錄，因此敏感資料絕對不能用GET請求。</p>
                <h3>POST</h3>
                <p>POST主要用於向伺服器端提交資料，POST將資料提交至HTTP請求體內，比起GET安全許多，且不會受到大小限制，但速度就較GET慢。</p>
                <p>資料的解析也較為麻煩，具體怎麼取得資料得要看所使用的工具如何處理。</p>
            </div>
            <div className="flex content-div">
                <h1>input</h1>
                <p>建立輸入欄。</p>
                <p>輸入欄是最核心的表單元素，輸入欄輸入資料並交由表單提交。</p>
                <h3>name</h3>
                <p>name屬性設置輸入欄資料的key值，提交表單後經由key值來尋找對應的輸入欄資料。</p>
                <h3>type</h3>
                <p>type屬性設置輸入欄可接收的資料格式，不同的格式會極大影響輸入欄的運作。</p>
                <h3>required</h3>
                <p>required屬性設置輸入欄為必填選項不可為空。</p>
            </div>
            <div className="flex content-div">
                <h1>Input Type</h1>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處使用GET請求，提交表單後查看新分頁的網址。</p>
                    <div>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>text</h3>
                            <p>輸入任意內容，行為如同&lt;textarea&gt;</p>
                            <input name="text" type="text" value={stateTypeText} onChange={(event) => { setStateTypeText(event.target.value) }}></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>number</h3>
                            <p>只能輸入整數的數字</p>
                            <input name="number" type="number" value={stateTypeNumber} onChange={(event) => { setStateTypeNumber(event.target.value) }}></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>email</h3>
                            <p>只能輸入電子信箱</p>
                            <input name="email" type="email" value={stateTypeEmail} onChange={(event) => { setStateTypeEmail(event.target.value) }}></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>password</h3>
                            <p>將輸入的內容碼掉以避免能直接肉眼讀取輸入內容</p>
                            <input name="password" type="password" value={stateTypePassword} onChange={(event) => { setStateTypePassword(event.target.value) }}></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>file</h3>
                            <p>選擇檔案並提交</p>
                            <p>accept屬性設置指定的檔案格式(MIME Type)</p>
                            <input name="file" type="file" accept="image/png" value={stateTypeFile} onChange={(event) => { setStateTypeFile(event.target.value) }}></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>datetime-local</h3>
                            <p>只能輸入時間格式(瀏覽器預設會提供輔助工具)</p>
                            <p>(還有其他時間格式但不詳細說明)</p>
                            <input name="datetime-local" type="datetime-local" value={stateTypeDatetime} onChange={(event) => { setStateTypeDatetime(event.target.value) }}></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>color</h3>
                            <p>只能輸入色票(瀏覽器預設會提供輔助工具)</p>
                            <input name="color" type="color" value={stateTypeColor} onChange={(event) => { setStateTypeColor(event.target.value) }} />
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>radio</h3>
                            <p>將輸入框轉型為單選框</p>
                            <p>name屬性設置一樣的會視為同一組，同一組中只會有一個單選框被選取</p>
                            <p>checked屬性設置預設選取的單選框</p>
                            <input name="radio" type="radio" value={stateTypeRadio} onChange={(event) => { setStateTypeRadio(1) }} checked></input>
                            <span>1</span>
                            <br />
                            <input name="radio" type="radio" value={stateTypeRadio} onChange={(event) => { setStateTypeRadio(2) }}></input>
                            <span>2</span>
                            <br />
                            <input name="radio" type="radio" value={stateTypeRadio} onChange={(event) => { setStateTypeRadio(3) }}></input>
                            <span>3</span>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>checkbox</h3>
                            <p>將輸入框轉型為確認框</p>
                            <p>確認框之間不會互相影響，各自為一個單獨選項</p>
                            <input name="checkbox1" type="checkbox" value={stateTypeCheckbox} onChange={(event) => { setStateTypeCheckbox("Yes") }}></input>
                            <span>你是甲甲嗎</span>
                            <br />
                            <input name="checkbox2" type="checkbox" value={stateTypeCheckbox} onChange={(event) => { setStateTypeCheckbox("Yes") }}></input>
                            <span>你是臭甲嗎</span>
                            <br />
                            <input name="checkbox3" type="checkbox" value={stateTypeCheckbox} onChange={(event) => { setStateTypeCheckbox("Yes") }}></input>
                            <span>你明明就是臭甲</span>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                        <form method="get" action="/inputTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <h3>range</h3>
                            <p>將輸入框轉型為範圍條</p>
                            <p>min和max屬性設置最小值和最大值，value屬性代表了當前值</p>
                            <input name="range" type="range" min="0" max="10" value={stateTypeRange} onChange={(event) => { setStateTypeRange(event.target.value) }}></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>datalist</h1>
                <p>建立資料列表。</p>
                <p>(該列表不會直接顯示，需跟輸入欄連結後，透過輸入欄的箭頭開啟列表和選項)。</p>
                <h3>option</h3>
                <p>建立列表的選項。</p>
                <h3>datalist連結input操作步驟</h3>
                <p>&lt;datalist&gt;添加id屬性，&lt;datalist&gt;的子元素添加&lt;option&gt;可以增加可選選項。</p>
                <p>每個&lt;option&gt;都需添加value屬性，代表選中該選項時項表單提交的value。</p>
                <p>要連結的&lt;input&gt;需添加list屬性，list屬性的值是datalist的id值。</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處使用GET請求，提交表單後查看新分頁的網址。</p>
                    <div>
                        <form method="get" action="/datalistTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <datalist id="datalist">
                                <option value="option1"></option>
                                <option value="option2"></option>
                                <option value="option3"></option>
                            </datalist>
                            <p>data1:</p>
                            <input name="data1" list="datalist" required></input>
                            <p>data2:</p>
                            <input name="data2" list="datalist" required></input>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>select</h1>
                <p>建立選項列表。</p>
                <p>(該列表會直接顯示，需跟輸入欄連結後，透過輸入欄的箭頭開啟列表和選項)。</p>
                <h3>option</h3>
                <p>建立列表的選項。</p>
                <h3>optgroup</h3>
                <p>建立列表的選項分類標題，此元素作為select的子元素使用，此元素不會被視為可選的選項。</p>
                <p>使用lable屬性設置&lt;optgroup&gt;的名稱。</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處使用GET請求，提交表單後查看新分頁的網址。</p>
                    <div>
                        <form method="get" action="/selectTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <p>data1:</p>
                            <select name="data1">
                                <optgroup label="1"></optgroup>
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                                <option value="option3">option3</option>
                                <optgroup label="2"></optgroup>
                                <option value="option4">option4</option>
                                <option value="option5">option5</option>
                                <option value="option6">option6</option>
                            </select>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>textarea</h1>
                <p>建立文本區。</p>
                <p>(此元素等同於 &lt;input type="text"&gt;)</p>
                <h3>maxlength</h3>
                <p>設置字數上限</p>
                <h3>cols</h3>
                <p>設置一行的最大字數</p>
                <h3>rows</h3>
                <p>設置行數</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處使用GET請求，提交表單後查看新分頁的網址。</p>
                    <div>
                        <form method="get" action="/textareaTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <p>data1:</p>
                            <textarea name="data1" maxlength="21" cols="10" rows="2" placeholder="最多輸入20個字"></textarea>
                            <br />
                            <button type="submit">提交</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>meter</h1>
                <p>建立狀態條。</p>
                <p>(此元素不能用來提交資料，只能用來表示一個已明確範圍內的狀態值)</p>
                <h3>min</h3>
                <p>設置狀態條的最小值</p>
                <h3>max</h3>
                <p>設置狀態條的最大值</p>
                <h3>value</h3>
                <p>設置狀態條的當前值</p>
            </div>
            <div className="flex content-div">
                <h1>progress</h1>
                <p>建立進度條。</p>
                <p>(此元素不能用來提交資料，只能用來表示一個任務進度的完成率[和meter不同，progress無法設定min])</p>
                <h3>max</h3>
                <p>設置進度條的最大值</p>
                <h3>value</h3>
                <p>設置進度條的當前值</p>
            </div>
            <div className="flex content-div">
                <h1>button</h1>
                <p>建立按鈕。</p>
                <h3>type</h3>
                <p>type屬性設置按鈕的功能。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <form method="get" action="/buttonTest" target="_blank"
                            style={{ display: "inlineBlock", width: "50%", paddingLeft: "25px", borderStyle: "solid" }}>
                            <input name="data1" type="radio" value={stateButton} onChange={(event) => { setStateButton(1) }} required ></input>
                            <span>1</span>
                            <br />
                            <input name="data1" type="radio" value={stateButton} onChange={(event) => { setStateButton(2) }} required ></input>
                            <span>2</span>
                            <br />
                            <input name="data1" type="radio" value={stateButton} onChange={(event) => { setStateButton(3) }} required ></input>
                            <span>3</span>
                            <br />
                            <button type="button">button普通按鈕</button>
                            <button type="reset">reset重置表單</button>
                            <button type="submit">submit提交表單</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HTMLForms;