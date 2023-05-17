import React from 'react';

function HTMLAttributes(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>HTML屬性(HTML Attributes)</h1>
                <p>屬性用於為元素附加行為和改變狀態，屬性的格式是一個key配一個value，value都是string型別。</p>
                <p>但也有些許屬性只會有一種行為和狀態，這類屬性不需要value值。</p>
                <p>範例: <code>{'<'}p id="aaa" display{'>'}{'<'}/p{'>'}</code></p>
                <p>將此元素的ID設置為aaa，將此元素隱藏。</p>
            </div>
            <div className="flex content-div">
                <h1>屬性介紹</h1>
                <p>不常用的或過期的不介紹</p>

                <h2>全局屬性(所有元素皆可使用)</h2>
                <h3>id</h3>
                <p>設置ID分類元素</p>
                <h3>class</h3>
                <p>設置className分類元素</p>
                <h3>lang</h3>
                <p>設置語言</p>
                <h3>hidden</h3>
                <p>隱藏此元素</p>
                <h3>style</h3>
                <p>設置樣式(權重最高，CSS樣式無法覆蓋)</p>
                <h3>tabindex</h3>
                <p>按下tab鍵可以焦點此元素(屬性的值代表焦點順序)</p>
                <h3>title</h3>
                <p>滑鼠懸停在此元素上會顯示提示文字</p>
                <h3>contenteditable</h3>
                <p>此元素是否可以被編輯中間內容</p>
                <h3>draggable</h3>
                <p>此元素是否能被滑鼠拖曳</p>
                <h3>dropzone</h3>
                <p>此元素是否能接受滑鼠拖曳來的內容</p>
                <h3>spellcheck</h3>
                <p>檢查拼字或語法</p>

                <h2>數據相關屬性</h2>
                <h3>charset</h3>
                <p>設置使用的編碼</p>
                <p className="can">可用元素: meta,script</p>
                <h3>http-equiv</h3>
                <p>設置http請求的header</p>
                <p className="can">可用元素: meta</p>
                <h3>content</h3>
                <p>設置http請求的header的value</p>
                <p className="can">可用元素: meta</p>
                <h3>name</h3>
                <p>設置連結命名(主要用於兩個不同元素之間連結的參考名稱)</p>
                <p className="can">可用元素: meta,map,iframe,object,form,input,output,fieldset,select,textarea,button</p>
                <h3>type</h3>
                <p>設置元素的類型(不同的元素使用方式都不同)</p>
                <p className="can">可用元素: script,link,style,menu,object,source,input,button</p>
                <h3>herf</h3>
                <p>連結資源</p>
                <p className="can">可用元素: link,base,a,area</p>
                <h3>rel</h3>
                <p>設置與資源的連結關係</p>
                <p className="can">可用元素: link,a,area,form</p>
                <h3>download</h3>
                <p>點擊超連結時將下載連結資源</p>
                <p className="can">可用元素: a,area</p>
                <h3>herflang</h3>
                <p>連結新的網頁時所使用的語言</p>
                <p className="can">可用元素: link,a,area</p>
                <h3>src</h3>
                <p>嵌入資源</p>
                <p className="can">可用元素: script,iframe,source,img,audio,video,track,input</p>
                <h3>data</h3>
                <p>專用於object元素，連結資源</p>
                <p className="can">可用元素: object</p>
                <h3>target</h3>
                <p>重定向網頁時的開啟依據</p>
                <p>_self=當前網頁刷新(預設)、_blank=在新分頁開啟</p>
                <p className="can">可用元素: base,a,area,form</p>
                <h3>async</h3>
                <p>使腳本可以非同步執行(HTML不會等待JS腳本執行完畢才往下執行)</p>
                <p className="can">可用元素: script</p>

                <h2>媒體資源相關屬性</h2>
                <h3>srcset</h3>
                <p>設置依賴資源的特徵以供瀏覽器參考條件</p>
                <p className="can">可用元素: source,img</p>
                <h3>alt</h3>
                <p>設置當圖片無法顯示時替代顯示的文字內容</p>
                <p className="can">可用元素: img,area,input type="image"</p>
                <h3>usemap</h3>
                <p>連結圖像映射元素(name)</p>
                <p className="can">可用元素: object,img</p>
                <h3>shape</h3>
                <p>專用於area元素，設置映射區域的形狀</p>
                <p className="can">可用元素: area</p>
                <h3>coords</h3>
                <p>專用於area元素，設置映射區域的詳細座標點</p>
                <p className="can">可用元素: area</p>
                <h3>controls</h3>
                <p>多媒體元素顯示控制器供用戶端使用</p>
                <p className="can">可用元素: audio,video</p>
                <h3>muted</h3>
                <p>靜音多媒體</p>
                <p className="can">可用元素: audio,video</p>
                <h3>autoplay</h3>
                <p>自動播放多媒體</p>
                <p className="can">可用元素: audio,video</p>
                <h3>loop</h3>
                <p>循環播放多媒體</p>
                <p className="can">可用元素: audio,video</p>
                <h3>poster</h3>
                <p>專用於video元素，設置影片的預覽圖</p>
                <p className="can">可用元素: video</p>
                <h3>kind</h3>
                <p>專用於track元素，設置字幕的類型</p>
                <p className="can">可用元素: track</p>
                <h3>label</h3>
                <p>專用於track元素，設置字幕的標題</p>
                <p className="can">可用元素: track</p>
                <h3>default</h3>
                <p>專用於track元素，設置默認使用的字幕</p>
                <p className="can">可用元素: track</p>
                <h3>srclang</h3>
                <p>專用於track元素，設置字幕使用的語言</p>
                <p className="can">可用元素: track</p>

                <h2>表單相關屬性</h2>
                <h3>method</h3>
                <p>專用於form元素，設置表單提交所使用的HTTP請求類型</p>
                <p className="can">可用元素: form</p>
                <h3>action</h3>
                <p>專用於form元素，設置表單提交的網址</p>
                <p className="can">可用元素: form</p>
                <h3>accept-charset</h3>
                <p>專用於form元素，設置表單提交所使用的編碼</p>
                <p className="can">可用元素: form</p>
                <h3>autocomplete</h3>
                <p>表單是否要記錄提交的數據，並於下次填寫表單時自動填入紀錄的數據</p>
                <p className="can">可用元素: form,input</p>
                <h3>autodocus</h3>
                <p>網頁加載後自動焦點該表單元素</p>
                <p className="can">可用元素: input,select,textarea,button</p>
                <h3>disabled</h3>
                <p>禁用表單元素</p>
                <p className="can">可用元素: input,fieldset,select,option,textarea,button</p>
                <h3>readonly</h3>
                <p>表單元素不能修改</p>
                <p className="can">可用元素: input,textarea</p>
                <h3>required</h3>
                <p>設置此表單元素是必填</p>
                <p className="can">可用元素: input,select,textarea</p>
                <h3>value</h3>
                <p>設置初始值或當前值</p>
                <p className="can">可用元素: li,input,option,meter,progress,button</p>
                <h3>placeholder</h3>
                <p>顯示提示文字</p>
                <p className="can">可用元素: input,textarea</p>
                <h3>min</h3>
                <p>設置最小值</p>
                <p className="can">可用元素: input,meter,progress</p>
                <h3>max</h3>
                <p>設置最大值</p>
                <p className="can">可用元素: input,meter,progress</p>
                <h3>checked</h3>
                <p>專用於選項類型的input，設置預設的選項</p>
                <p className="can">可用元素: input type="checkbox",input type="radio"</p>
                <h3>accept</h3>
                <p>專用於檔案類型input元素，設置傳輸檔案類型(MIME Type)</p>
                <p className="can">可用元素: input type="file"</p>
                <h3>list</h3>
                <p>專用於input元素，設置與datalist元素的連結(id)</p>
                <p className="can">可用元素: input</p>
                <h3>open</h3>
                <p>專用於details元素，網頁加載後直接顯示</p>
                <p className="can">可用元素: details</p>
                <h3>selected</h3>
                <p>專用於option元素，設置預設的選項</p>
                <p className="can">可用元素: option</p>
                <h3>multiple</h3>
                <p>允許一次提交多個值</p>
                <p className="can">可用元素: input,select</p>
                <h3>maxlength</h3>
                <p>設置字數上限</p>
                <p className="can">可用元素: input,textarea</p>
                <h3>cols</h3>
                <p>專用於textarea元素，設置一行的最大字數</p>
                <p className="can">可用元素: textarea</p>
                <h3>rows</h3>
                <p>專用於textarea元素，設置行數</p>
                <p className="can">可用元素: textarea</p>
                <h3>form</h3>
                <p>表單元素連結對應的表單(id)</p>
                <p className="can">可用元素: object,label,input,output,fieldset,select,textarea,meter,button</p>
                <h3>for</h3>
                <p>連結對應的表單元素(id)</p>
                <p className="can">可用元素: label,output</p>
                <h3>formaction</h3>
                <p>設置表單提交的網址</p>
                <p className="can">可用元素: input type="submit",button type="submit"</p>
            </div>
        </div>
    );
}
export default HTMLAttributes;