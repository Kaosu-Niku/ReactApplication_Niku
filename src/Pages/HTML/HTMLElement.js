import React from 'react';

function HTMLElement(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>HTML元素(HTML Element)</h1>
                <p>一份HTML文件的內容全是由元素組成的，一個元素的格式是以一個開始標籤&lt;TagName&gt;，中間內容，一個結束標籤&lt;/TagName&gt;來表示。</p>
                <p>尖括號之間的TagName用於定義該元素屬於什麼類型。(ex: h1是標題元素、p是文字元素...等等)。</p>
                <p>範例: <code>&lt;p&gt;文字文字文字&lt;/p&gt;</code></p>
                <p>這會在網頁上呈現一段文字。</p>
            </div>
            <div className="flex content-div">
                <h1>空元素(Empty Element)</h1>
                <p>有些元素並不包含結束標籤，同時也代表不包含中間內容，這些元素稱為空元素。</p>
                <p>這些元素具有特殊性質，依靠屬性的設定來表示內容。</p>
                <p>範例: <code>&lt;img src=""&gt;</code></p>
                <p>這會在網頁上呈現圖片。</p>
            </div>
            <br />
            <div className="flex content-div">
                <h1>元素介紹</h1>
                <p>不常用的或過期的不介紹</p>

                <h2>Metadata 數據元素</h2>
                <h3>title</h3>
                <p>設置網頁的標頭(在瀏覽器分頁上可見的名稱)。</p>
                <h3>meta</h3>
                <p>設置數據資訊並提供給瀏覽器或其它web服務使用。</p>
                <h3>link</h3>
                <p>連結資源並定義與資源之間的連結關係(rel屬性定義連結關係)。</p>
                <h3>script</h3>
                <p>加載JavaScript腳本(中間內容可以直接輸入JS語法運行)。</p>
                <h3>base</h3>
                <p>設置該網頁所有的相對路徑所參考的URL。</p>

                <h2>Layout 佈局元素</h2>
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
                <h3>details</h3>
                <p>細節欄(可以打開或收起的欄位)。</p>
                <h3>summary</h3>
                <p>設置細節欄的名稱，此元素必須作為details的子元素使用。</p>

                <h2>Paragraphs 段落元素</h2>
                <h3>div</h3>
                <p>不具任何特殊性質的空區塊元素。</p>
                <h3>span</h3>
                <p>不具任何特殊性質的空內聯元素。</p>
                <h3>h1</h3>
                <p>顯示標題(最小到h6)。</p>
                <h3>p</h3>
                <p>顯示純文字的區塊元素。</p>
                <h3>pre</h3>
                <p>與p元素一樣用於顯示純文字，但是pre元素的中間內容會照著程式碼的排版呈現。</p>
                <h3>br</h3>
                <p>跨行。</p>
                <h3>hr</h3>
                <p>跨行並顯示一個線條。</p>

                <h2>Formatting 格式化元素</h2>
                <h3>a 超連結</h3>
                <p>建立重定向其他URL的超連結。</p>
                <h3>b & strong</h3>
                <p>內容呈現粗體。</p>
                <h3>i & em</h3>
                <p>內容呈現斜體。</p>
                <h3>small</h3>
                <p>內容呈現縮小。</p>
                <h3>mark</h3>
                <p>內容的背景呈現高亮。</p>
                <h3>q</h3>
                <p>添加引號。</p>
                <h3>s</h3>
                <p>添加刪除線。</p>
                <h3>u</h3>
                <p>添加下劃線。</p>
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

                <h2>List 列表元素</h2>
                <h3>dl</h3>
                <p>基本列表結構，子元素使用dt元素呈現列表標題，dd元素呈現列表內容。</p>
                <h3>ul</h3>
                <p>無序列表結構，子元素使用li子元素呈現列表內容，列表內容前頭帶有黑點標記(可於CSS更改標記)。</p>
                <h3>ol</h3>
                <p>有序列表結構，子元素使用li子元素呈現列表內容，列表內容前頭帶有數字標記(可於CSS更改標記)。</p>

                <h2>Table 表格元素</h2>
                <h3>table</h3>
                <p>表格結構。</p>
                <p>(以下元素皆需做為該元素的子元素使用)</p>
                <h3>caption</h3>
                <p>表格的標題。</p>
                <h3>tr</h3>
                <p>表格的一行。</p>
                <h3>th</h3>
                <p>表格的一格(做為表格標題)。</p>
                <h3>td</h3>
                <p>表格的一格(做為表格內容)。</p>
                <h3>colgroup</h3>
                <p>表格的列組結構。</p>
                <h3>col</h3>
                <p>表格列組的一列，此元素必須作為colgroup的子元素使用。</p>
                <h3>其餘方便表格分類用的元素</h3>
                <p>thead、tbody、tfoot。</p>

                <h2>EmbeddedContent 嵌入內容元素</h2>
                <h3>iframe</h3>
                <p>嵌入網頁(在一個HTML文件內再嵌入一個HTML文件內容)。</p>
                <h3>object</h3>
                <p>嵌入資源內容。(type屬性指定MIME Type)。</p>
                <h3>source</h3>
                <p>為一個圖像或多媒體元素設置多個資源依賴，可讓瀏覽器自動判斷最適用的資源並使用，此元素必須作為picture、audio、video的子元素使用。</p>

                <h2>Image</h2>
                <h3>img</h3>
                <p>圖片內容。</p>
                <h3>picture</h3>
                <p>響應式圖片，瀏覽器會自動根據source元素挑選最適合的圖片顯示(source可設置多個也可無，但必須至少含有一個img元素做為最後一個子元素)。</p>
                <h3>map</h3>
                <p>圖像映射(滑鼠點擊可以回饋的區域)，必須含有area子元素和配對一個img元素(map使用name屬性，而img元素使用usemap屬性，兩者的值相同)。</p>
                <h3>area</h3>
                <p>映射區域，此元素必須作為map的子元素使用(sharp屬性設置區域的形狀，coords屬性設置映射區域的詳細座標)。</p>

                <h2>Multimedia 多媒體元素</h2>
                <h3>audio</h3>
                <p>音訊媒體內容。</p>
                <h3>video</h3>
                <p>視訊媒體內容。</p>
                <h3>track</h3>
                <p>多媒體內容字幕，此元素必須作為audio、video的子元素使用。</p>

                <h2>Forms 表單元素</h2>
                <h3>form</h3>
                <p>表單結構(method屬性設置要使用的HTTP請求類型，action屬性設置提交表單的HTTP請求網址，target屬性設置以何種方式開啟提交表單後顯示的視窗)。</p>
                <p>(以下元素皆需做為該元素的子元素使用，如果是有提交數據的表單元素需設置name屬性，獲取表單時依據name的值來辨別所有數據)</p>
                <h3>fieldset</h3>
                <p>表單集區，將表單分區分類。</p>
                <h3>legend</h3>
                <p>表單集區的標題，此元素必須作為fieldset的子元素使用。</p>
                <h3>label</h3>
                <p>表單元素的簡介說明(for屬性設置與之對應的表單元素的id)。</p>
                <h3>input</h3>
                <p>輸入欄(type屬性設置輸入欄的輸入類型)。</p>
                <p>text=文字、number=數值、password=密碼、email=信箱、color=色彩、tel=電話、time=時間(不包含日期)、date=日期(不包含時間)</p>
                <p>datetime-local=日期及時間、url=URL、file=文件(可以瀏覽並選擇文件)、search=搜尋框、radio=單選框、checkbox=確認框</p>
                <p>range=滑動條、button=普通按鈕、reset=重置表單按鈕、submit=提交表單按鈕、image=自訂顯示圖片的提交表單按鈕。</p>
                <h3>output</h3>
                <p>輸出欄。</p>
                <h3>datalist</h3>
                <p>資料列表(輸入欄下拉會顯示的預填選項)，必須含有option子元素(設置id屬性，input元素可以使用list屬性設置id的值來對應)。</p>
                <h3>select</h3>
                <p>選項列表，必須含有option子元素。</p>
                <h3>optgroup</h3>
                <p>選項列表的選項分類標頭，此元素必須作為select的子元素使用，該元素不會被視為可選的選項。</p>
                <h3>option</h3>
                <p>列表的選項，此元素必須作為datalist、select的子元素使用(value屬性設置提交給表單的值)。</p>
                <h3>textarea</h3>
                <p>文本區(cols屬性設置一行的文字數，rows屬性設置行數)。</p>
                <h3>meter</h3>
                <p>狀態條(min屬性設置最小值，max屬性設置最大值，value屬性代表當前值)。</p>
                <h3>progress</h3>
                <p>進度條(max屬性設置最大值，value屬性代表當前值)。</p>
                <h3>button</h3>
                <p>按鈕(type屬性設置按鈕的用途)。</p>
                <h3>dialog</h3>
                <p>彈出式對話框，(必須含有form、button子元素，form使用method屬性設置dialog，可使button變成用於關閉對話框視窗的按鈕)。</p>

                <h2>Other 其他元素</h2>
                <h3>template</h3>
                <p>建立模板，該元素的內容並不會被網頁渲染出來，需經由JavaScript腳本引用才會渲染。</p>
                <h3>slot</h3>
                <p>建立插槽，作為一個佔位元素，需經由JavaScript腳本定義該元素的標記名後才會真正提供元素的功能。</p>
                <h3>noscript</h3>
                <p>在腳本被關閉或無法使用時執行的JavaScript程式區塊。</p>
                <h3>canvas</h3>
                <p>建立畫布，可在網頁上供使用者繪製圖形，但該元素只是提供容器並沒有實質繪圖功能，需經由JavaScript腳本撰寫繪圖功能。</p>
                <h3>svg</h3>
                <p>繪製向量圖。</p>
                <h3>math</h3>
                <p>過於複雜且幾乎不會用到，不詳細說明...</p>
            </div>
        </div>
    );
}
export default HTMLElement;