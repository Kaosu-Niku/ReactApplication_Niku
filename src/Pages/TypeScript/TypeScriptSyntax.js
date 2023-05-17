import React from 'react';

function TypeScriptSyntax(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>類型推斷(Type Inference)</h1>
                <p>TS會自動推斷變數的資料類型 (但TS推斷的有時不一定符合我們想要的結果)</p>
                <code>let a; // TS推斷為any類型</code>
                <code>let b = 0; // TS推斷為number類型</code>
                <code>let c = "字串"; // TS推斷為string類型</code>
            </div>
            <div className="flex content-div">
                <h1>類型註解(Type annotation)</h1>
                <p>主動指定變數的資料類型</p>
                <code>let a: numbe; // 指定為numbe類型</code>
                <code>let b: string; // 指定為string類型</code>
                <code>let c: boolean; // 指定為boolean類型</code>
                <p>經過類型註解的變數不可以指定不符合其類型的資料</p>
                <code style={{ color: "red" }}>let a: number = "字串"; // 錯誤，因為該變數已指定資料類型為number</code>
                <p>可以同時指定多個資料類型，資料只需符合其中一個類型即可</p>
                <code>let a: number | string; // 資料可以是number或string類型</code>
            </div>
            <div className="flex content-div">
                <h1>類型斷言(Type Assertion)</h1>
                <p>斷言資料的類型覆蓋TS推斷的結果，用於針對類型不明確或TS推斷不符合期望的資料</p>
                <code>let a = document.querySelector("#test") as Node; // 該例子TS推斷為Element類型，但已被斷言改為Node類型</code>
            </div>
            <div className="flex content-div">
                <h1>非NULL檢查</h1>
                <p>TS有嚴格的非null檢查，對於任何不明確的資料都會給予編譯錯誤，需斷言資料不可能為null</p>
                <code style={{ color: "red" }}>let a = document.querySelector("#test"); // 可能為null</code>
                <code>let a = document.querySelector("#test")!; // 已斷言不可能為null</code>
            </div>
            <div className="flex content-div">
                <h1>確認資料類型</h1>
                <p>使用 typeof 返回資料的類型</p>
                <code>let a = 1;</code>
                <code>typeof a; // 返回 "number"</code>
            </div>
            <div className="flex content-div">
                <h1>新增類型註解</h1>
                <p>添加一個新的類型註解</p>
                <code>type NS = number | string;</code>
                <code>let a: NS; // 指定為 number | string 類型</code>
            </div>
            <div className="flex content-div">
                <h1>新增數據集合</h1>
                <p>添加一個新的數據集合，該數據集合可做為類型註解使用</p>
                <code>interface I {"{"} a: number, b: string, c: boolean {"}"}</code>
                <code>let a: I = {"{"} a = 1, b = "字串", c = true {"}"} {"//"} 必須指定與數據集合相同類型的資料</code>
                <p>以上例子等同於下列</p>
                <code>type I = {"{"} a: number, b: string, c: boolean {"}"}</code>
                <p>interface和type的差異，interface具有擴充性，可以隨意擴充成員</p>
                <code>interface I {"{"} d: any, e: undefined {"}"} {"//"} 現在註解為I類型的變數還要再添加d和e的資料</code>
            </div>
            <div className="flex content-div">
                <h1>函式參數</h1>
                <p>函式的參數也可使用類型註解</p>
                <code>function f(a: number, b: string) {"{"} {"}"}</code>
                <code>f(1, "字串"); // 正確</code>
                <code style={{ color: "red" }}>f(1, 2); // 錯誤，第二個參數必須指定字串類型</code>
                <p>註解?的參數表示為可忽略的參數，調用函式時可以選擇忽略該參數 (所有可忽略的參數都必須宣告在後面)</p>
                <code>function f(a: number, b?: string) {"{"} {"}"}</code>
                <code>f(1); // 可以忽略參數b</code>
                <code style={{ color: "red" }}>function f(a?: number, b: string) {"{"} {"}"} {"//"} 錯誤，可忽略的參數不可以宣告於任何不可忽略的參數前面</code>
            </div>
            <div className="flex content-div">
                <h1>泛型</h1>
                <code>function f&ltT&gt(a: T) {"{"} {"}"}</code>
                <code>f&ltnumber&gt(1); // 泛型為number類型</code>
                <code>f&ltstring&gt("字串"); // 泛型為string類型</code>
            </div>
        </div>
    );
}
export default TypeScriptSyntax;