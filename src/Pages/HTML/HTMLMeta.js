import React from 'react';

function HTMLMeta(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Meta</h1>
                <p>Meta是用來給網頁附加資訊的元素，總共有三種類型的資訊可以附加，字符編碼、網頁資訊、HTTP請求Header。</p>
                <p>字符編碼使用charset屬性指定(預設是utf-8編碼)。</p>
                <p>網頁資訊使用name屬性指定，使用content屬性設置資訊內容。</p>
                <p>HTTP請求Header使用http-equiv屬性指定，使用content屬性設置Header的值。</p>
            </div>
            <div className="flex content-div">
                <h1>name</h1>
                <h3>application-name</h3>
                <p>該頁面所代表的網頁應用程式名稱</p>
                <p>(通常這個值都使用其代表名稱，ex: Youtube就使用Youtube，Facebook就使用Facebook)</p>
                <h3>description</h3>
                <p>在瀏覽器搜尋結果上顯示的網頁敘述</p>
                <h3>keywords</h3>
                <p>幫助搜尋該網頁的關鍵字</p>
                <p>(關鍵字之間以,隔開)</p>
                <h3>author</h3>
                <p>網頁的作者</p>
                <h3>generator</h3>
                <p>用於生成文件所使用的軟體包</p>
            </div>
        </div>
    );
}
export default HTMLMeta;