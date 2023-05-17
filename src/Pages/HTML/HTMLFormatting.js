import React from 'react';

function HTMLFormatting(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>格式化元素</h1>
                <p>格式化元素用來處理中間內容的資訊。</p>
            </div>
            <div className="flex content-div">
                <h1>a</h1>
                <p>建立開啟其他URL的超連結，點擊中間內容就會開啟。</p>
                <h3>href</h3>
                <p>使用href屬性設置要開啟的URL。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <a href="/">此連結將前往Home頁面</a>
                    </div>
                </div>
                <p>href屬性還可以根據ID搜索目標網頁中的特定HTML元素並前往到元素的所在位置。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <a href="#bottom">此連結將前往該頁面的最下方</a>
                    </div>
                </div>
                <h3>_blank</h3>
                <p>使用target屬性設置開啟網頁時的開啟依據。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <a href="/" target="_self">_self 在當前頁面開啟</a>
                        <br />
                        <a href="/" target="_blank">_blank 在新分頁開啟</a>
                    </div>
                </div>
                <h3>download</h3>
                <p>使用download屬性可以將開啟網頁改為下載網頁的內容。</p>
                <p>download屬性的值可以設定下載該檔案時使用的檔案名稱。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <a href="/Asset/Image/Icon.png" target="_blank">開啟圖片</a>
                        <br />
                        <a href="/Asset/Image/Icon.png" target="_blank" download="自訂名稱">下載圖片</a>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>樣式</h1>
                <p>該部分的元素主要是用於簡單的樣式改變，並不太實用，建議直接以CSS修改樣式。</p>
                <h3>b & strong</h3>
                <b>內容呈現粗體。</b>
                <strong>內容呈現粗體。</strong>
                <h3>i & em</h3>
                <i>內容呈現斜體。</i>
                <em>內容呈現斜體。</em>
                <h3>small</h3>
                <small>內容呈現縮小。</small>
                <h3>mark</h3>
                <mark>內容的背景呈現高亮。</mark>
                <h3>q</h3>
                <q>添加引號。</q>
                <h3>s</h3>
                <s>添加刪除線。</s>
                <h3>u</h3>
                <u>添加下劃線。</u>
            </div>
            <div className="flex content-div">
                <h1>標註</h1>
                <p>該部分的元素主要是用於標註特定內容並設置一些額外的處理，少數元素在特定狀態下實用，其他的都很無用。</p>
                <h3>bdi</h3>
                <p>將特定內容獨立出來與其它文本區隔開，此元素用於那些可能破壞排版的特殊語言格式(ex: 阿拉伯文)。</p>
                <h3>bdo</h3>
                <p>改變文本的文字排序(dir屬性來更改方向。ltr=左至右。rtl=右置左)。</p>
                <h3>abbr</h3>
                <p>標註重點內容(title屬性可使得焦點在該元素上時出現一個區塊顯示文字)。</p>
                <h3>blockquote</h3>
                <p>標註一段內容的引用出處或是詳細解釋，內容呈現縮排(cite屬性附上關於這段內容的相關連結)。</p>
                <h3>cite</h3>
                <p>標註具有特殊涵義的名詞(ex: 人名、書名、歌名、作品名...等等)，內容呈現斜體。</p>
                <h3>address</h3>
                <p>標註資訊內容(ex: 連絡電話、住址、社交媒體帳號...等等)，內容呈現斜體。</p>
                <h3>ruby</h3>
                <p>呈現東亞文字的拼音註記(子元素使用rp和rt)。</p>
                <h3>其餘未說明的元素</h3>
                <p>sup=上半部文字、sub=下半部文字、time=時間、kbd=輸入按鍵、var=數學公式、code=程式碼、ins、del、samp、data、dfn、wbr。</p>
            </div>
            <div className="flex content-div">
                <p id="bottom" style={{ backgroundColor: "black", color: "red" }}>這裡是網頁的最下方</p>
            </div>
        </div>
    );
}
export default HTMLFormatting;