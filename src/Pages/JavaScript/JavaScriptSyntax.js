import React from 'react';

function JavaScriptSyntax(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>變數宣告</h1>
                <h3>let 變數</h3>
                <p>變數是可以任意變動的數值。</p>
                <code>let 變數;</code>
                <h3>const 常數</h3>
                <p>const是常數，宣告時就必須初始化數值，是一經初始化後便無法改變的固定數值。</p>
                <code>const 常數 = value;</code>
            </div>
            <div className="flex content-div">
                <h1>資料型別</h1>
                <h3>未定義型別</h3>
                <p>(一個變數還沒有任何初始化的數值時的型別也是undefined)</p>
                <code>let uf = undefined;</code>
                <h3>數字型別</h3>
                <code>let number = 1;</code>
                <h3>字串型別</h3>
                <code>let string = "字串";</code>
                <h3>布林型別</h3>
                <code>let boolean = true;</code>
                <h3>空型別</h3>
                <p>(null和undefined大致上相同，但還是有不同之處，偏向找不到對象的場合都會得到undefined，而null則偏向於主動宣告null才會得到)</p>
                <code>let n = null;</code>
                <h3>陣列型別</h3>
                <p>(JS的陣列可以同時含有不同型別的資料)(以索引位置搜尋資料，ex: array[1] ={'>'} 結果為"字串")</p>
                <code>let array = [1,"字串",true];</code>
                <h3>對象型別</h3>
                <p>(JS的對象以key: value的格式來處理資料)(以key名稱搜尋資料，ex: object.A ={'>'} 結果為1)</p>
                <code>let object = {'{'}A: 1, B: "字串", C: true{'}'};</code>
                <h3>JSON型別</h3>
                <p>(和object一樣但是是json格式，josn格式的key是字串型別)(以key名稱搜尋資料，ex: json["C"]={'>'} 結果為true)</p>
                <code>let json = {'{'}"A": 1, "B": "字串", "C": true{'}'};</code>
            </div>
            <div className="flex content-div">
                <h1>運算子</h1>
                <p>+ 加</p>
                <p>- 減</p>
                <p>* 乘</p>
                <p>/ 除</p>
                <p>% 除後取餘數</p>
                <p>++ 加1</p>
                <p>-- 減1</p>
                <p>&gt 大於</p>
                <p>&lt 小於</p>
                <p>== 等於</p>
                <p>&gt= 大於等於</p>
                <p>&lt= 小於等於</p>
                <p>!= 不等於</p>
                <p>=== value和type都等於</p>
                <p>&& 兩個條件皆成立</p>
                <p>&& 其中一個條件成立</p>
            </div>
            <div className="flex content-div">
                <h1>函式</h1>
                <h3>函式宣告</h3>
                <code>function 函式1(){'{'} {'}'}</code>
                <h3>函式使用</h3>
                <code>函式1();</code>
                <h3>函式的參數</h3>
                <code>function 函式2(參數1, 參數2){'{'} {'}'}</code>
                <code>函式2("你好", "再見");</code>
                <h3>函式的回傳</h3>
                <code>function 函式3(){'{'} return 回傳值; {'}'}</code>
                <code>let 取得回傳值 = 函式3();</code>
                <h3>參數傳遞包含參數的函式</h3>
                <code>function 函式4(參數1,參數2){'{'} {'}'}</code>
                <code>function 函式5(函式參數){'{'} {'}'}</code>
                <code>函式5(函式4.bind(null,"你好","再見"));</code>
            </div>
            <div className="flex content-div">
                <h1>流程控制</h1>
                <h3>if判斷式</h3>
                <p>從if開始判斷，if的條件成立就執行if區塊，如不成立往下確認下一個else if的條件是否成立，以此類推，全都不成立就執行else區塊。</p>
                <code>if(條件0){'{'} {'}'}</code>
                <code>else if(條件1){'{'} {'}'}</code>
                <code>else{'{'} {'}'}</code>
                <h3>switch判斷式</h3>
                <p>switch帶入變數，case設定指定數值，執行與switch變數的數值相符的case區塊，全都不相符就執行default區塊。</p>
                <code>switch(變數){'{'}</code>
                <code>    case 0: {'{'} {'}'}; break;</code>
                <code>    case 1: {'{'} {'}'}; break;</code>
                <code>    default: {'{'} {'}'}; break;</code>
                <code>{'}'}</code>
                <h3>for迴圈</h3>
                <p>for指定初始值、條件式、處理式，在條件式未成立前會重複執行，每一次執行完後會接著執行一次處理式。</p>
                <p>(以下例子會重複執行10次)</p>
                <code>for(let i = 0;i {'<'} 10;i++){'{'} {'}'}</code>
                <h3>while條件迴圈</h3>
                <p>while的條件未成立前會重複執行直到條件成立。</p>
                <p>(以下例子會無限執行)</p>
                <code>while(true){'{'} {'}'}</code>
                <h3>try...catch除錯</h3>
                <p>try區塊包含要除錯的程式碼，若有出現錯誤就執行catch區塊。</p>
                <code>try{'{'} {'}'}</code>
                <code>catch{'{'} {'}'}</code>
            </div>
            <div className="flex content-div">
                <h1>class</h1>
                <p>JavaScript從ES6開始引入了物件(class)的概念，如果有學過OOP語言會很好理解。</p>
                <h3>宣告物件</h3>
                <code>class 物件(){'{'}</code>
                <code>  constructor(AAA,BBB){'{'}</code>
                <code>      this.A = AAA;</code>
                <code>      this.B = BBB;</code>
                <code>  {'}'}</code>
                <code>{'}'}</code>
                <h3>創建新的物件</h3>
                <code>let 新物件 = new 物件(10,"你好");</code>
                <h2>講解</h2>
                <h3>建構子</h3>
                <p>constructor()為建構子，其目的在於為物件初始化數據，建構子具有強制性，若要創建該物件就必須提供與建構子對應的數據。</p>
                <h3>this</h3>
                <p>要搞清楚ES6的this不是一件簡單的事，this在不同的地方所表示的都不同，以class為出發點，this用於代表該物件本身，</p>
                <p>上述例子中的this.A代表該物件有一個成員A，而這個成員A的值取決於物件被創建時所填入的第一個值AAA，</p>
                <p>可以透過 新物件.A 調用成員A的值，上述例子調用後會得到10。</p>
            </div>
            <div className="flex content-div">
                <h1>非同步</h1>
                <h3>Promise</h3>
                <p>Promise用於建立任務處理，Promise具有三種狀態，Promise處理中、Resolved處理完成且成功、Rejected處理完成但失敗，</p>
                <p>Promise為一個class類型，建構函式需要一個帶有兩個參數的函式，這兩個參數可自訂名稱，但命名約定上習慣使用resolve(成功)、reject(失敗)。</p>
                <p>調用resolve()代表狀態Resolved，調用reject()代表狀態Rejected，回傳結果並結束任務處理，這就是Promise的基本運作邏輯。</p>
                <code>const pr = new Promise((resolve,reject) ={'>'} {'{'} {'}'});</code>
                <h3>then、catch、finally</h3>
                <p>Promise具有一些用於任務結束後的接續處理的函式，狀態Resolved執行then、狀態Rejected執行catch、只要任務結束就執行finally，</p>
                <p>這些函式都會回傳一個result對象，result對象為Promise的回傳值。</p>
                <code>pr.then((result) ={'>'} {'{'} {'}'});</code>
                <p>Promise結合這些函式的運用使其非常適合用於非同步的設計模式。</p>
                <h3>async & await</h3>
                <p>async和await是語法糖，繼承自於Pormise的概念，為了更直觀且更簡單的呈現Promise的內容，</p>
                <p>async用於宣告一個回傳Promise的非同步函式，就算函式本身的實質內容沒有回傳Promise，async也會自動將函式包裝為回傳Promise的函式，</p>
                <p>await用於獲取Promise的回傳值，非同步函式必定會等待await執行完畢回傳結果後才會繼續往下執行 (!! await只能使用於回傳Promise的函式 !!)</p>
                <p>(!! 若不經由await去調用非同步函式，則只會得到undefined，因為不使用await就不會觸發等待流程，而是直接繼續往下執行 !!)</p>
                <code>function 包裝Promise(){'{'} return pr; {'}'}</code>
                <code>async 非同步(){'{'}</code>
                <code>  let 回傳值 = await 包裝Promise();</code>
                <code>  return 回傳值;</code>
                <code>{'}'}</code>
                <code>非同步().then((result) ={'>'} {'{'} {'}'});</code>
                <h3>try...catch優化</h3>
                <p>最好將非同步函式的所有內容包含至try區塊內，因為非同步流程非常有可能發生問題導致流程卡死。</p>
            </div>
            <div className="flex content-div">
                <h1>其它</h1>
                <h3>Array.map(foo:function)</h3>
                <p>map()用於遍歷一個陣列，對陣列的每個元素執行一次函式，參數填入要執行的函式。</p>
                <code>let a = [1,2,3];</code>
                <code>a.map(() ={'>'} {'{'} {'}'});</code>
            </div>
        </div>
    );
}
export default JavaScriptSyntax;