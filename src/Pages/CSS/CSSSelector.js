import React from 'react';

function CSSSelector(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>選擇器(Selector)</h1>
                <p>選擇器用於設置條件尋找符合條件的HTML元素，可以一次指定多個選擇器，選擇器之間以,分隔，只要有符合其中一個選擇器即可。</p>
            </div>
            <div className="flex content-div">
                <h1>全局選擇器</h1>
                <p>* { }</p>
                <p>網頁所有的元素。</p>
            </div>
            <div className="flex content-div">
                <h1>元素選擇器</h1>
                <p>p { }</p>
                <p>指定標記名的元素。</p>
            </div>
            <div className="flex content-div">
                <h1>ID選擇器</h1>
                <p>#idName { }</p>
                <p>id屬性的值相符的元素(ID不能重複)。</p>
            </div>
            <div className="flex content-div">
                <h1>class選擇器</h1>
                <p>.className { }</p>
                <p>class屬性的值相符的元素(class可以重複)。</p>
            </div>
            <div className="flex content-div">
                <h1>屬性選擇器</h1>
                <p>[hidden] { }</p>
                <p>含有指定屬性的元素(屬性的值也可以指定)。</p>
            </div>
            <div className="flex content-div">
                <h1>子代選擇器</h1>
                <p>h1 {'>'} p { }</p>
                <p>此例代表所有父元素是h1的p的元素。</p>
            </div>
            <div className="flex content-div">
                <h1>後代選擇器</h1>
                <p>h1 p { }</p>
                <p>此例代表h1元素包含的所有元素中是p的元素，無視層級(不只元素，也可以用其他選擇器條件)。</p>
            </div>
            <div className="flex content-div">
                <h1>相鄰全體選擇器</h1>
                <p>h1 ~ p { }</p>
                <p>此例代表h1元素後面所有的p元素，無視距離(不只元素，也可以用其他選擇器條件)。</p>
            </div>
            <div className="flex content-div">
                <h1>偽類選擇器</h1>
                <p>p:hover { }</p>
                <p>偽類代表元素的一種狀態，偽類可使用較多種類，下面介紹。</p>
                <h2>狀態類型</h2>
                <h3>:focus</h3>
                <p>處於焦點中</p>
                <h3>:hover</h3>
                <p>滑鼠懸停在此元素上</p>
                <h3>:active</h3>
                <p>處於活動狀態時(被點擊)</p>
                <h3>:empty</h3>
                <p>中間內容是空的</p>
                <h3>:link</h3>
                <p>還未被使用者訪問過的連結(具有herf屬性的元素)</p>
                <h3>:visited</h3>
                <p>已被使用者訪問過的連結(具有herf屬性的元素)</p>
                <h3>:valid</h3>
                <p>填入的數值符合資料型別({'<'}input{'>'}元素)</p>
                <h3>:invalid</h3>
                <p>填入的數值不符合資料型別({'<'}input{'>'}元素)</p>
                <h3>:in-range</h3>
                <p>當前值正在範圍中的元素(具有min/max屬性的元素)</p>
                <h3>:out-of-range</h3>
                <p>當前值不在範圍中的元素(具有min/max屬性的元素)</p>
                <h3>:checked</h3>
                <p>單選框或確認框被選中時({'<'}input type="radio"{'>'}或{'<'}input type="checkbox"{'>'})</p>

                <h2>層級類型</h2>
                <h3>:before</h3>
                <p>同層級的前一個元素</p>
                <h3>:after</h3>
                <p>同層級的下一個元素</p>
                <h3>:first-child</h3>
                <p>第一個子元素</p>
                <h3>:nth-child(n)</h3>
                <p>第n個子元素</p>
                <h3>last-child</h3>
                <p>最後一個子元素</p>
                <h3>:nth-last-child(n)</h3>
                <p>倒數第n個子元素</p>
            </div>
        </div>
    );
}
export default CSSSelector;