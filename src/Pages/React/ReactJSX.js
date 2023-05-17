import React from 'react';

function ReactJSX(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>JSX是什麼</h1>
                <p>JSX是一個JavaScript的語法擴充，透過JSX可以在JavaScript腳本中以HTML語法來撰寫HTML內容，主要搭配React使用。</p>
            </div>
            <div className="flex content-div">
                <p>JSX語法與HTML語法基本相似，但有一些差異，以下講解。</p>
                <h3>空元素</h3>
                <p>JSX語法中對於空元素，以&lt; /&gt;表示，而這同時也是React掛載元件的語法。</p>
                <code>HTML: &lt;img&gt;&lt;/img&gt;</code>
                <code>JSX : &lt;img /&gt;</code>
                <h3>屬性名稱衝突</h3>
                <p>HTML一些屬性名稱與JavaScript保留字衝突需改為JSX設定的名稱。</p>
                <p>class =&gt; className</p>
                <p>for =&gt; htmlFor</p>
                <code>HTML: &lt;p class="c"&gt;&lt;/p&gt;</code>
                <code>JSX : &lt;p className="c"&gt;&lt;/p&gt;</code>
                <h3>駝峰式寫法</h3>
                <p>JSX語法中有兩個單詞以上的屬性需改為駝峰式寫法。</p>
                <code>HTML: &lt;button onclick&gt;&lt;/button&gt;</code>
                <code>JSX : &lt;button onClick&gt;&lt;/button&gt;</code>
                <h3>回傳JavaScript內容</h3>
                <p>JSX語法中無法使用&lt;script&gt;，但可以以{"{"} {"}"}回傳JavaScript內容。</p>
                <code>let a = "你好";</code>
                <code>&lt;p&gt;{"{"}a{"}"}&lt;/p&gt;</code>
                <h3>字串中包含JavaScript內容</h3>
                <p>這個不限於在JSX語法中使用，這個是常規語法，稱為樣板字面值 (使用樣板字面值的字串不使用' '或" "，而是要使用` `)</p>
                <code>let a = 18;</code>
                <code>&lt;p&gt;`我已經 ${"{"}a{"}"} 歲了喔`&lt;/p&gt;</code>
                <h3>style</h3>
                <p>JSX語法中無法使用&lt;style&gt;，但元素可以使用style屬性，</p>
                <p>style屬性無法設置純字串內容，必須回傳Object類型的JavaScript內容，所有CSS樣式包含在Object中。</p>
                <code>HTML: &lt;p style="height:100px; background-color:red;"&gt;&lt;/p&gt;</code>
                <code>JSX : &lt;p style={"{"}{"{"} height: "100px", backgroundColor: "red" {"}"}{"}"}&gt;&lt;/p&gt;</code>
                <h3>轉義</h3>
                <p>JSX語法中的特殊符號轉義有兩種方法，與HTML同語法+; 或 回傳字串類型的JavaScript內容。</p>
                <code>HTML: &lt; = &amp;lt</code>
                <code>JSX : &lt; = &amp;lt; 或是 &lt; = {"{"}&quot;&lt;&quot;{"}"}</code>
                <h3>陷阱-中間內容</h3>
                <p>JSX語法中不是所有的元素的中間內容都能直接輸入文字，例如這個狀況會導致錯誤<code>&lt;input&gt;Text&lt;/input&gt;</code></p>
                <p>這個狀況簡單點的應對做法是旁邊再添加一個可顯示文字的行內元素即可<code>&lt;input&gt;&lt;/input&gt;&lt;span&gt;Text&lt;/span&gt;</code></p>
                <h3>陷阱-函式傳遞與調用</h3>
                <p>以下幾種所執行的情況需區分清楚。</p>
                <code>function Foo(){"{"} {"}"}</code>
                <code> </code>
                <code>&lt;button onClick={"{"}Foo{"}"}&gt; // 正確，每一次點擊該按鈕執行一次</code>
                <code>&lt;button onClick={"{"}() =&gt; {"{"}Foo(){"}"}{"}"}&gt; // 正確，每一次點擊該按鈕執行一次</code>
                <code>&lt;/button onClick={"{"}Foo(){"}"}&gt; //錯誤，每次重新渲染該按鈕執行一次，點擊按鈕無反應。</code>
            </div>
        </div>
    );
}
export default ReactJSX;