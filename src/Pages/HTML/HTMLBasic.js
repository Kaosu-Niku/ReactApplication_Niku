import React from 'react';

function HTMLBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>HTML是什麼</h1>
                <p>HTML全稱 Hypertext Markup Language。超文字標記語言。</p>
                <p>HTML不是程式語言，而是一個用於建立網頁的標記式語言。</p>
                <p>瀏覽器會解析HTML文件呈現對應內容，不同的瀏覽器對於相同內容的呈現都會有差別。</p>
            </div>
            <div className="flex content-div">
                <h1>HTML文件架構</h1>
                <p>一份標準的HTML文件至少需含有以下內容</p>
                <code>  </code>
                <code>  {'<'}!DOCTYPE html{'>'}</code>
                <code>  </code>
                <code>  {'<'}html{'>'}</code>
                <code>  </code>
                <code>      {'<'}head{'>'}</code>
                <code>  </code>
                <code>      {'<'}/head{'>'}</code>
                <code>  </code>
                <code>      {'<'}body{'>'}</code>
                <code>  </code>
                <code>      {'<'}/body{'>'}</code>
                <code>  </code>
                <code>  {'<'}/html{'>'}</code>
                <code>  </code>
                <p>{'<'}!DOCTYPE html{'>'} 用於宣告這是一個使用了HTML架構的文件，是任何HTML文件最開頭必備的元素。</p>
                <p>{'<'}html{'>'} 用於包含網頁的全部內容的根元素。</p>
                <p>{'<'}head{'>'} 用於包含網頁的所有數據內容，該元素的內容不會呈現給用戶端。</p>
                <p>{'<'}body{'>'} 用於包含網頁的所有呈現內容，該元素的內容會呈現給用戶端。</p>
            </div>
            <div className="flex content-div">
                <h1>HTML文件常用設置</h1>
                <code>  </code>
                <code>  {'<'}!DOCTYPE html{'>'}</code>
                <code>  </code>
                <code>  {'<'} html lang="zh-tw"{'>'}</code>
                <code>  </code>
                <code>      {'<'}head{'>'}</code>
                <code>          {'<'}meta charset="utf-8"{'>'}</code>
                <code>          {'<'}title{'>'}WebpageName{'<'}/title{'>'}</code>
                <code>          {'<'}link rel="icon" href="Data.png"{'>'}</code>
                <code>          {'<'}link rel="stylesheet" href="Data.css"{'>'}</code>
                <code>          {'<'}script src="Data.js"{'>'}{'<'}/script{'>'}</code>
                <code>      {'<'}/head{'>'}</code>
                <code>  </code>
                <code>      {'<'}body{'>'}</code>
                <code>  </code>
                <code>      {'<'}/body{'>'}</code>
                <code>  </code>
                <code>  {'<'}/html{'>'}</code>
                <code>  </code>
                <p>{'<'}html lang="zh-tw"{'>'} 用於設置使用的語言(zh-tw代表繁體中文)。</p>
                <p>{'<'}meta charset="utf-8"{'>'} 用於設置網頁所使用的編碼(盡量使用utf-8編碼，含有世上絕大多數語言文字)。</p>
                <p>{'<'}title{'>'} 用於設置網頁的標頭(在瀏覽器分頁上可見的名稱)。</p>
                <p>{'<'}link rel="icon" href="Data.png"{'>'} 用於連結圖片並將其設置成網頁的icon。</p>
                <p>{'<'}link rel="stylesheet" href="Data.css"{'>'} 用於連結CSS文件。</p>
                <p>{'<'} script src="Data.js"{'>'} {'<'} /script{'>'} 用於執行JavaScript腳本。(執行到這個的當下就會立即執行腳本且會等待腳本執行完畢，所以須注意執行順序問題)</p>
            </div>
            <div className="flex content-div">
                <h1>DOM</h1>
                <p>DOM是簡稱，英文全稱 document object model。中文稱作文件物件模型。</p>
                <p>DOM是一個網頁標準，其用途在於將一份HTML文件的一切都定義成Node節點，而所有的節點組合會形成一個樹結構。</p>
                <p>Node分成四種類型 (document、element、attribute、text)</p>
                <p>document節點，一份HTML文件只會有一個，其作為該文件的DOM的進入點 (JavaScript必須透過document節點才能存取關於HTML文件的一切)</p>
                <p>element節點代表了HTML元素，attribute節點代表了元素的屬性，text節點代表了元素的中間內容。</p>
            </div>
            <div className="flex content-div">
                <h1>特殊符號轉義</h1>
                <p>以下特殊符號在HTML文件裡具有其意義，若要於字串中表示需使用轉義。</p>
                <p> &amp; = &amp;amp</p>
                <p>{'<'} = &amp;lt</p>
                <p>{'>'} = &amp;gt</p>
                <p>{"'"} = &amp;quot</p>
            </div>
        </div>
    );
}
export default HTMLBasic;